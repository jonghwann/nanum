export const toE164 = (phone: string) => {
  if (phone.startsWith('010')) {
    return `+82${phone.slice(1)}`;
  }
  return phone;
};
