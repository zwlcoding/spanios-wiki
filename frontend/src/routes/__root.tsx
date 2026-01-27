import { DarkModeBtn, useDarkMode } from '@/features/DarkMode'
import { LangModeBtn } from "@/features/LangMode"
import { m } from '@/paraglide/messages'
import { getLocale } from '@/paraglide/runtime'
import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import styles from '../styles.css?url'

import NotFound from '@/components/NotFound'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
      },
      {
        title: m.site_title(),
      }
    ],
    links: [{ rel: 'stylesheet', href: styles }],
    scripts: [
      { src: 'https://umami.qdkf.net/script.js', defer: true, 'data-website-id': '84cf0966-1cfb-4a2e-a7b4-076187b2914b' }
    ]
  }),
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { toggleDarkMode } = useDarkMode();
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>

        <div className="container flex h-screen flex-col py-4">
          <div className="fixed inset-0 -z-20 bg-[url('/common/squares-background.png')] opacity-2 dark:invert"></div>
          <div className="fixed inset-0 -z-19 bg-[url('/common/mesh-background.jpg')] [background-size:110%] object-fill opacity-2"></div>
          <div className="to-base-100 via-base-100/40 fixed inset-0 top-0 -z-1 bg-linear-to-b from-transparent"></div>
          <div className="flex items-center justify-between">
            <Link to="/">
              <div className='flex items-center'>
                <img
                  src="/common/logo@180.png"
                  alt="Spanios.wiki"
                  className="h-12"
                />
                <span className='pl-2 hidden md:inline-block'>Spanios.wiki</span>
              </div>
            </Link>
            <div>
              <DarkModeBtn handleChange={toggleDarkMode} />
              <LangModeBtn />
            </div>
          </div>
          {children}
          <div className="flex flex-wrap items-center justify-between gap-2 max-sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Spanios.wiki</p>
            <div className="inline-flex items-center gap-4">
              {/* <Link className="link hover:link-primary no-underline" to="/">
                Terms
              </Link>
              <Link className="link hover:link-primary no-underline" to="/">
                Privacy
              </Link>
              <Link className="link hover:link-primary no-underline" to="/">
                Sitemap
              </Link> */}
            </div>
          </div>
        </div>

        <TanStackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}