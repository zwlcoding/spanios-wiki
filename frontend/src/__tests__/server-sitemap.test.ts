import { describe, expect, it } from 'vitest';
import { createSitemap, localizedSitemapPaths } from '@/utils/sitemap';

describe('sitemap generation', () => {
  it('includes localized disease list and published disease detail pages', () => {
    const zhPaths = localizedSitemapPaths('zh');
    const enPaths = localizedSitemapPaths('en');

    expect(zhPaths).toContain('/zh/diseases');
    expect(enPaths).toContain('/en/diseases');
    expect(zhPaths.some((path) => path.startsWith('/zh/diseases/'))).toBe(true);
    expect(enPaths.some((path) => path.startsWith('/en/diseases/'))).toBe(true);
  });

  it('emits escaped absolute URLs', () => {
    const sitemap = createSitemap('https://spanios.qdkf.net');

    expect(sitemap).toContain(
      '<loc>https://spanios.qdkf.net/zh/diseases</loc>',
    );
    expect(sitemap).toContain(
      '<loc>https://spanios.qdkf.net/en/diseases</loc>',
    );
  });
});
