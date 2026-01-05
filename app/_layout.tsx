import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import QueryProvider from '@/providers/query-provider';
import './global.css';

export default function RootLayout() {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </QueryProvider>
  );
}
