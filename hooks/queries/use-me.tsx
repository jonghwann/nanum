import { useQuery } from '@tanstack/react-query';
import { me } from '@/api/auth/api';
import { queryKeys } from '@/lib/query-keys';

export default function useMe() {
  return useQuery({
    queryKey: queryKeys.me.all,
    queryFn: me,
  });
}
