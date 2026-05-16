import type { LucideIcon } from 'lucide-react';
import { SafeHTMLRenderer } from '@/components/SafeHTMLRenderer';

interface QuickLookItemProps {
  label: string;
  tone?: 'primary';
  value?: string;
}

export function QuickLookItem({ label, tone, value }: QuickLookItemProps) {
  if (!value) {
    return null;
  }

  return (
    <div
      className={`rounded-md border p-3 ${
        tone === 'primary'
          ? 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30'
          : 'border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900/30'
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
        {label}
      </div>
      <p className="mt-2 text-sm leading-6 text-stone-700 dark:text-stone-300">
        {value}
      </p>
    </div>
  );
}

interface JourneyListProps {
  icon: LucideIcon;
  items?: string[];
  title: string;
}

export function JourneyList({ icon: Icon, items, title }: JourneyListProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="rounded-md border border-stone-200 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/30">
      <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
        <Icon className="h-4 w-4 text-amber-700" />
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm leading-6 text-stone-600 before:mr-2 before:text-amber-700 before:content-['•'] dark:text-stone-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

interface MedicalBlockProps {
  html: string;
  title: string;
}

export function MedicalBlock({ html, title }: MedicalBlockProps) {
  return (
    <section className="rounded-md border border-stone-200 p-4 dark:border-stone-800">
      <h3 className="mb-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
        {title}
      </h3>
      <SafeHTMLRenderer html={html} className="content-prose" />
    </section>
  );
}
