export interface VerifyOtpRequest {
  phone: string;
  code: string;
}

export interface SignUpRequest {
  name: string;
  gender: string;
  birthDate: Date;
  region1: string;
  region2: string;
  region3: string;
  hCode: string;
}
