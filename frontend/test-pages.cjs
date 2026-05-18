const { chromium } = require('playwright');

const urls = [
  'http://localhost:3000/',
  'http://localhost:3000/diseases',
  'http://localhost:3000/diseases/21-hydroxylase-deficiency',
  'http://localhost:3000/hospitals',
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });

  for (const url of urls) {
    const page = await context.newPage();
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      await page.waitForTimeout(1000);
      const title = await page.title();
      const bodyText = await page.locator('body').textContent();
      const hasError =
        /error|exception|failed|加载失败|未找到|something went wrong/i.test(
          bodyText,
        );
      const screenshotPath = `/tmp/screenshot-${url.replace(/[^a-z0-9]/g, '_')}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: false });
      console.log(`${hasError ? '❌' : '✅'} ${url}`);
      console.log(`   title: "${title}"`);
      console.log(`   screenshot: ${screenshotPath}`);
      if (hasError) {
        const errMatch = bodyText.match(
          /.{0,60}(error|exception|failed|加载失败|未找到).{0,60}/i,
        );
        console.log(`   error snippet: ${errMatch?.[0]}`);
      }
    } catch (e) {
      console.log(`❌ ${url} — ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
})();
