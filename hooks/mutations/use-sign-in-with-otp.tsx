import { useMutation } from '@tanstack/react-query';
import { signInWithOtp } from '@/api/auth';
import type { UseMutationCallbacks } from '@/types/mutation';

export default function useSignInWithOtp(callbacks?: UseMutationCallbacks) {
  return useMutation({
    mutationFn: signInWithOtp,
    onSuccess: () => {
      callbacks?.onSuccess?.();
    },
    onError: (error) => {
      callbacks?.onError?.(error);
    },
  });
}
