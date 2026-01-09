import { router } from 'expo-router';
import Screen from '@/components/layout/screen';
import Title from '@/components/ui/title';

export default function Index() {
  return (
    <Screen>
      <Title
        title="정왕2동"
        icon={{ name: 'chevron-forward', size: 20 }}
        onPress={() => router.push('/address-search')}
      />
    </Screen>
  );
}
