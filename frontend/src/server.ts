import handler from '@tanstack/react-start/server-entry';
import { getWikiContent } from '@/content/wikiData';
import { paraglideMiddleware } from '@/paraglide/server.js';
import { createSitemap, isPublishedDisease } from '@/utils/sitemap';

export default {
  fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const siteUrl = getSiteUrl(req);

    if (url.pathname === '/robots.txt') {
      return Promise.resolve(
        new Response(
          `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
          {
            headers: {
              'content-type': 'text/plain; charset=utf-8',
            },
          },
        ),
      );
    }

    if (url.pathname === '/sitemap.xml') {
      return Promise.resolve(
        new Response(createSitemap(siteUrl), {
          headers: {
            'content-type': 'application/xml; charset=utf-8',
          },
        }),
      );
    }

    const unpublishedDiseaseResponse = getUnpublishedDiseaseResponse(
      url.pathname,
    );

    if (unpublishedDiseaseResponse) {
      return Promise.resolve(unpublishedDiseaseResponse);
    }

    return paraglideMiddleware(req, ({ request }: { request: Request }) =>
      handler.fetch(request),
    );
  },
};

function getSiteUrl(req: Request) {
  const configuredSiteUrl =
    (typeof process !== 'undefined' ? process.env.VITE_SITE_URL : undefined) ??
    import.meta.env.VITE_SITE_URL;

  if (configuredSiteUrl) {
    return configuredSiteUrl.replace(/\/$/, '');
  }

  const url = new URL(req.url);
  const forwardedProto = req.headers.get('x-forwarded-proto')?.split(',')[0];
  const forwardedHost = req.headers.get('x-forwarded-host')?.split(',')[0];
  const proto = (forwardedProto || url.protocol.replace(':', '')).trim();
  const host = (forwardedHost || req.headers.get('host') || url.host).trim();

  return `${proto}://${host}`.replace(/\/$/, '');
}

function getUnpublishedDiseaseResponse(pathname: string) {
  const match = pathname.match(/^\/(?:(en|zh)\/)?diseases\/([^/]+)\/?$/);

  if (!match) {
    return undefined;
  }

  const locale = (match[1] ?? 'zh') as 'en' | 'zh';
  const slug = decodeURIComponent(match[2]);
  const disease = getWikiContent(locale).diseases.find(
    (item) => item.slug === slug,
  );

  if (disease && isPublishedDisease(disease)) {
    return undefined;
  }

  return new Response('Not found', {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'x-robots-tag': 'noindex',
    },
    status: 404,
  });
}
