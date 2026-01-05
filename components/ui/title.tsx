import { Text } from 'react-native';

export default function Title({ children }: { children: React.ReactNode }) {
  return <Text className="mt-3 mb-6 text-center font-semibold text-2xl">{children}</Text>;
}
