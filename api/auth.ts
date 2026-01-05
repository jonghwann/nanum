import { supabase } from '@/lib/supabase';

export const signInWithOtp = async (phone: string) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    phone,
  });

  if (error) throw error;
  return data;
};
