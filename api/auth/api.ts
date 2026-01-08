import { supabase } from '@/lib/supabase';
import { formatISODate } from '@/utils/date';
import type { SignUpRequest, VerifyOtpRequest } from './types';

export async function signInWithOtp(phone: string) {
  const { data, error } = await supabase.auth.signInWithOtp({
    phone,
  });

  if (error) throw error;
  return data;
}

export async function verifyOtp({ phone, code }: VerifyOtpRequest) {
  const { data, error } = await supabase.auth.verifyOtp({
    phone,
    token: code,
    type: 'sms',
  });

  if (error) throw error;
  return data;
}

export async function me() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function signUp(params: SignUpRequest) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error();

  const { name, gender, birthDate, region1, region2, region3, hCode } = params;

  if (!name || !gender || !birthDate || !region1 || !region2 || !region3 || !hCode) {
    throw new Error();
  }

  const { data, error } = await supabase.from('profiles').upsert({
    id: user.id,
    name,
    gender,
    birth_date: formatISODate(birthDate),
    region1,
    region2,
    region3,
    h_code: hCode,
    updated_at: new Date().toISOString(),
  });

  if (error) throw error;
  return data;
}
