import { Pressable, Text } from 'react-native';
import Screen from '@/components/layout/screen';
import { supabase } from '@/lib/supabase';

export default function Index() {
  const handleSignOutPress = async () => {
    await supabase.auth.signOut();
  };

  return (
    <Screen>
      <Pressable onPress={handleSignOutPress}>
        <Text>로그아웃</Text>
      </Pressable>
    </Screen>
  );
}
