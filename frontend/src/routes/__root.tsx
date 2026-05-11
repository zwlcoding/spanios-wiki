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
import { trackEvent } from '@/utils/analytics';
import { uiText } from '@/utils/localeText';
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
        'data-website-id': 'b09dfc4e-d16c-430d-9499-5b1bcdf07759',
      },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { toggleDarkMode } = useDarkMode();
  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    trackEvent('theme_change', {
      target_theme: event.currentTarget.checked ? 'dark' : 'light',
    });
    toggleDarkMode();
  };

  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="app-shell">
          <header className="app-header">
            <div className="app-header-inner">
              <Link
                to="/"
                className="flex items-center gap-2"
                onClick={() =>
                  trackEvent('nav_click', { location: 'header', target: '/' })
                }
              >
                <img
                  src="/common/logo@180.png"
                  alt="Spanios"
                  className="h-10 w-auto"
                />
                <span className="brand-word hidden font-semibold md:inline-block">
                  Spanios
                </span>
              </Link>

              <nav
                className="app-nav"
                aria-label={uiText('主导航', 'Main navigation')}
              >
                <Link
                  to="/diseases"
                  onClick={() =>
                    trackEvent('nav_click', {
                      location: 'header',
                      target: '/diseases',
                    })
                  }
                >
                  {uiText('疾病', 'Diseases')}
                </Link>
                <Link
                  to="/hospitals"
                  onClick={() =>
                    trackEvent('nav_click', {
                      location: 'header',
                      target: '/hospitals',
                    })
                  }
                >
                  {uiText('就医资源', 'Care Resources')}
                </Link>
                <Link
                  to="/charity"
                  onClick={() =>
                    trackEvent('nav_click', {
                      location: 'header',
                      target: '/charity',
                    })
                  }
                >
                  {uiText('公益组织', 'Support Groups')}
                </Link>
                <Link
                  to="/search"
                  onClick={() =>
                    trackEvent('nav_click', {
                      location: 'header',
                      target: '/search',
                    })
                  }
                >
                  {uiText('搜索', 'Search')}
                </Link>
              </nav>

              <div className="flex items-center gap-1">
                <DarkModeBtn handleChange={handleDarkModeChange} />
                <LangModeBtn
                  handleChanged={(locale) =>
                    trackEvent('language_change', { locale })
                  }
                />
              </div>
            </div>
          </header>

          <main className="app-main">{children}</main>

          <MedicalDisclaimer />

          <footer className="app-footer flex flex-wrap items-center justify-between gap-2">
            <p>&copy; {new Date().getFullYear()} Spanios</p>
            <p>
              {uiText('少见，不该难找。', 'Rare should not mean hard to find.')}
            </p>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
