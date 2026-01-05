import AsyncStorage from '@react-native-async-storage/async-storage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as ExpoDevice from 'expo-device';
import { Platform } from 'react-native';
import { useSyncQueriesExternal } from 'react-query-external-sync';

const queryClient = new QueryClient();

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  useSyncQueriesExternal({
    queryClient,
    socketURL: 'http://localhost:42831',
    deviceName: Platform.OS,
    platform: Platform.OS,
    deviceId: Platform.OS,
    isDevice: ExpoDevice.isDevice,
    asyncStorage: AsyncStorage,
    enableLogs: false,
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
