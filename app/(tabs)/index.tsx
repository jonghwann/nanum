import { Text, View } from 'react-native';
import Screen from '@/components/layout/screen';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <Screen>
      <View className="flex-row items-center">
        <Text className="font-bold text-3xl">정왕2동</Text>
        <Icon name="chevron-forward" size={20} />
      </View>
    </Screen>
  );
}
