import { supabase } from '@/lib/supabase';
import type { VerifyOtpRequest } from './types';

export const signInWithOtp = async (phone: string) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    phone,
  });

  if (error) throw error;
  return data;
};

export const verifyOtp = async ({ phone, code }: VerifyOtpRequest) => {
  const { data, error } = await supabase.auth.verifyOtp({
    phone,
    token: code,
    type: 'sms',
  });

  if (error) throw error;
  return data;
};
