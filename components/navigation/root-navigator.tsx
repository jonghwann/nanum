import { Stack } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { BACK_SCREEN_OPTIONS, BACK_SCREENS } from '@/constants/screens';
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

      {BACK_SCREENS.map(({ name, options }) => (
        <Stack.Screen key={name} name={name} options={{ ...BACK_SCREEN_OPTIONS, ...options }} />
      ))}
    </Stack>
  );
}
