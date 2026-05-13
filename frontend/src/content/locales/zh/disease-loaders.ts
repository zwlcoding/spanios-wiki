import type { DiseaseDraft } from '@/content/data/types';

const diseaseModules = import.meta.glob<Record<string, DiseaseDraft>>(
  './disease-drafts/*.ts',
);

export async function loadZhDiseaseDraft(slug: string) {
  const moduleLoader = diseaseModules[`./disease-drafts/${slug}.ts`];

  if (!moduleLoader) {
    return undefined;
  }

  const module = await moduleLoader();

  return Object.values(module).find((draft) => draft.slug === slug);
}
