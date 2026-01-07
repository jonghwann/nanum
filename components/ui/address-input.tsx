import { router } from 'expo-router';
import Input from './input';

interface AddressInputProps {
  className?: string;
  value?: string;
}

export default function AddressInput({ className, value }: AddressInputProps) {
  return (
    <Input
      value={value}
      editable={false}
      pointerEvents="none"
      placeholder="주소"
      onPressIn={() => router.push('/address-search')}
      className={className}
    />
  );
}
