import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Bone,
  Brain,
  Dna,
  Droplet,
  Eye,
  FlaskConical,
  HeartPulse,
  Network,
  Shield,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

export const categoryIconByName: Record<string, LucideIcon> = {
  activity: Activity,
  bone: Bone,
  brain: Brain,
  dna: Dna,
  droplet: Droplet,
  eye: Eye,
  flask: FlaskConical,
  'heart-pulse': HeartPulse,
  kidney: Droplet,
  lungs: Activity,
  network: Network,
  shield: Shield,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
};

export function getCategoryIcon(iconName: string | undefined): LucideIcon {
  return categoryIconByName[iconName ?? ''] ?? Activity;
}
