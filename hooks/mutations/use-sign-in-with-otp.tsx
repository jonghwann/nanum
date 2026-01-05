import { useMutation } from '@tanstack/react-query';
import { signInWithOtp } from '@/api/auth';

export default function useSignInWithOtp() {
  return useMutation({
    mutationFn: signInWithOtp,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
