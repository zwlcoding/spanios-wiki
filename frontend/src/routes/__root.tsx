import {
  createRootRoute,
  HeadContent,
  Link,
  Scripts,
} from '@tanstack/react-router';
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer';
import NotFound from '@/components/NotFound';
import { DarkModeBtn, useDarkMode } from '@/features/DarkMode';
import { LangModeBtn } from '@/features/LangMode';
import { m } from '@/paraglide/messages';
import { getLocale } from '@/paraglide/runtime';
import styles from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
      },
      {
        title: m.site_title(),
      },
    ],
    links: [{ rel: 'stylesheet', href: styles }],
    scripts: [
      {
        src: 'https://umami.qdkf.net/script.js',
        defer: true,
        'data-website-id': '84cf0966-1cfb-4a2e-a7b4-076187b2914b',
      },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { toggleDarkMode } = useDarkMode();
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="app-header-inner">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/common/logo@180.png"
                  alt="Spanios.wiki"
                  className="h-10 w-auto"
                />
                <span className="brand-word hidden font-semibold md:inline-block">
                  Spanios.wiki
                </span>
              </Link>

              <nav className="app-nav" aria-label="主导航">
                <Link to="/diseases">疾病</Link>
                <Link to="/hospitals">医院</Link>
                <Link to="/charity">公益组织</Link>
                <Link to="/search">搜索</Link>
              </nav>

              <div className="flex items-center gap-1">
                <DarkModeBtn handleChange={toggleDarkMode} />
                <LangModeBtn />
              </div>
            </div>
          </header>

          <main className="app-main">{children}</main>

          <MedicalDisclaimer />

          <footer className="app-footer flex flex-wrap items-center justify-between gap-2">
            <p>&copy; {new Date().getFullYear()} Spanios.wiki</p>
            <p>Patient-friendly rare disease knowledge and navigation.</p>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
