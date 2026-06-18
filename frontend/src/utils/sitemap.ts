import { getWikiContent } from '@/content/wikiData';
import type { Disease } from '@/types/content';

export function createSitemap(siteUrl: string) {
  const paths = [
    '/',
    ...localizedSitemapPaths('zh'),
    ...localizedSitemapPaths('en'),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>`;
}

export function localizedSitemapPaths(locale: 'en' | 'zh') {
  const content = getWikiContent(locale);
  const prefix = `/${locale}`;

  return [
    prefix,
    `${prefix}/diseases`,
    `${prefix}/hospitals`,
    `${prefix}/charity`,
    ...content.diseases
      .filter(isPublishedDisease)
      .map((disease) => `${prefix}/diseases/${disease.slug}`),
    ...content.hospitals.map(
      (hospital) => `${prefix}/hospitals/${hospital.id}`,
    ),
    ...content.charities.map((charity) => `${prefix}/charity/${charity.id}`),
  ];
}

export function isPublishedDisease(disease: Pick<Disease, 'reviewStatus'>) {
  return (
    disease.reviewStatus === 'patient-reviewed' ||
    disease.reviewStatus === 'medical-reviewed'
  );
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}
