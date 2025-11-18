import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { m } from '@/paraglide/messages'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [value, setValue] = useState<number>(59);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? 59 : v - 1));
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);
  return (
    <>
      <div className="relative flex grow flex-col items-center justify-center py-12">
        <p className="text-base-content/60 font-mono text-sm font-medium tracking-[2px] uppercase">
          {m.coming_soon__title()}
        </p>
        <div className="mt-6 text-center text-3xl font-semibold tracking-[-1px] transition-all duration-300 hover:tracking-[0px] sm:text-4xl sm:font-black lg:text-5xl">
          <p className="inline">{m.coming_soon__exciting()}</p>{" "}
          <p className="text-primary-content relative inline whitespace-nowrap">
            {m.coming_soon__on_the_way()}
            <span className="from-primary to-secondary rounded-box animate-background-shift trall absolute -inset-x-2 -inset-y-1 -z-1 -rotate-2 bg-gradient-to-r bg-[200%,200%] transition-all duration-1000 starting:blur-xl"></span>
          </p>
        </div>
        <p className="text-base-content/80 mt-8 text-center text-lg sm:text-xl xl:text-2xl">
          {m.coming_soon__working()}
        </p>
        <p className="mt-6 text-base-content/60 font-mono text-sm font-medium tracking-[2px] uppercase">
          {m.coming_soon__desc()}
        </p>
        <div className="mt-12 flex flex-wrap gap-3 text-center md:gap-5">
          <div className="bg-base-200 rounded-box flex size-16 flex-col items-center justify-center gap-1 text-xs sm:size-20 sm:text-sm">
            <span className="countdown text-xl md:text-3xl">
              <span style={{ "--value": 29 }}></span>
            </span>
            {m.coming_soon__Days()}
          </div>
          <div className="bg-base-200 rounded-box flex size-16 flex-col items-center justify-center gap-1 text-xs sm:size-20 sm:text-sm">
            <span className="countdown text-xl md:text-3xl">
              <span style={{ "--value": 16 }}></span>
            </span>
            {m.coming_soon__Hours()}
          </div>
          <div className="bg-base-200 rounded-box flex size-16 flex-col items-center justify-center gap-1 text-xs sm:size-20 sm:text-sm">
            <span className="countdown text-xl md:text-3xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            {m.coming_soon__Minutes()}
          </div>
          <div className="bg-base-200 rounded-box flex size-16 flex-col items-center justify-center gap-1 text-xs sm:size-20 sm:text-sm">
            <span className="countdown text-xl md:text-3xl">
              <span style={{ "--value": value }}></span>
            </span>
            {m.coming_soon__Seconds()}
          </div>
        </div>
        <div className="absolute -start-12 sm:-start-24">
          <img
            src="/images/coming-soon/coming-soon-spiral.svg"
            alt="ComingSoon"
            className="h-40 opacity-20 sm:h-60 dark:opacity-80"
          />
        </div>
        <div className="absolute end-0 top-12">
          <img
            src="/images/coming-soon/coming-soon-diamond.svg"
            alt="ComingSoon"
            className="h-28 opacity-20 sm:h-40 dark:opacity-80"
          />
        </div>
      </div>
    </>
  )
}
