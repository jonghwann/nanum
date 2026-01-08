import { Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import useMe from '@/hooks/queries/use-me';

export default function RootNavigator() {
  const { data: me, isLoading: isMeLoading, isError: isMeError } = useMe();

  if (isMeLoading || isMeError) return <ActivityIndicator />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={me === null}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={me !== null}>
        <Stack.Screen name="(tabs)" />
      </Stack.Protected>

      <Stack.Screen
        name="address-search"
        options={{
          title: '주소 검색',
          headerShown: true,
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'minimal',
        }}
      />
    </Stack>
  );
}
