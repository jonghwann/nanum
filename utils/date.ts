import { format } from 'date-fns';

export function formatISODate(date: Date) {
  return format(date, 'yyyy-MM-dd');
}
