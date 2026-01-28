import { useQuery } from '@tanstack/react-query';
import {
  fetchCharityOrganizations,
  fetchCharityOrganizationById,
} from '@/lib/strapiClient';
import type { CharityOrganization } from '@/types/strapi';

export function useCharityOrganizations(filters?: {
  type?: string;
  search?: string;
}) {
  return useQuery({
    queryKey: ['charityOrganizations', filters],
    queryFn: () => fetchCharityOrganizations(filters),
    staleTime: 5 * 60 * 1000,
  });
}

export function useCharityOrganization(id: string) {
  return useQuery({
    queryKey: ['charityOrganization', id],
    queryFn: () => fetchCharityOrganizationById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}
