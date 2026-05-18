import { Activity, Bone, Brain, Eye } from 'lucide-react';
import { describe, expect, it } from 'vitest';
import { categoryIconByName, getCategoryIcon } from '../categoryIcons';

describe('categoryIconByName', () => {
  it('contains expected icon mappings', () => {
    expect(categoryIconByName.brain).toBe(Brain);
    expect(categoryIconByName.bone).toBe(Bone);
    expect(categoryIconByName.eye).toBe(Eye);
    expect(categoryIconByName.activity).toBe(Activity);
  });

  it('reuses icons for related concepts (kidney→droplet, lungs→activity)', () => {
    expect(categoryIconByName.kidney).toBe(categoryIconByName.droplet);
    expect(categoryIconByName.lungs).toBe(categoryIconByName.activity);
  });
});

describe('getCategoryIcon', () => {
  it('returns the mapped icon for known names', () => {
    expect(getCategoryIcon('brain')).toBe(Brain);
    expect(getCategoryIcon('bone')).toBe(Bone);
  });

  it('returns Activity as default fallback for unknown names', () => {
    expect(getCategoryIcon('nonexistent')).toBe(Activity);
    expect(getCategoryIcon('')).toBe(Activity);
  });

  it('handles undefined input gracefully', () => {
    expect(getCategoryIcon(undefined)).toBe(Activity);
  });
});
