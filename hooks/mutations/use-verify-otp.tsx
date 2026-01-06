import { useMutation } from '@tanstack/react-query';
import { verifyOtp } from '@/api/auth/api';
import type { UseMutationCallbacks } from '@/types/mutation';

export default function useVerifyOtp(callbacks?: UseMutationCallbacks) {
  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: () => {
      callbacks?.onSuccess?.();
    },
    onError: (error) => {
      callbacks?.onError?.(error);
    },
  });
}
