import { useQuery } from '@tanstack/react-query';
import { fetchHospitalById, fetchHospitals } from '@/lib/contentClient';

export function useHospitals(filters?: { province?: string; search?: string }) {
  return useQuery({
    queryKey: ['hospitals', filters],
    queryFn: () => fetchHospitals(filters),
    staleTime: 5 * 60 * 1000,
  });
}

export function useHospital(id: string) {
  return useQuery({
    queryKey: ['hospital', id],
    queryFn: () => fetchHospitalById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
}
