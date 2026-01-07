import Screen from '@/components/layout/screen';
import Input from '@/components/ui/input';

export default function AddressSearch() {
  return (
    <Screen hasHeader>
      <Input
        placeholder="동·읍·면을 입력해주세요."
        autoFocus
        icon={{ size: 16 }}
        className="h-10 rounded-full"
        inputClassName="text-base leading-5"
      />
    </Screen>
  );
}
