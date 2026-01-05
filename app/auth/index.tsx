import { useState } from 'react';
import { View } from 'react-native';
import Screen from '@/components/layout/screen';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Title from '@/components/ui/title';
import useSignInWithOtp from '@/hooks/mutations/use-sign-in-with-otp';
import { toE164 } from '@/utils/phone';

type Field = 'phoneNumber' | 'verificationCode';

export default function Index() {
  const [values, setValues] = useState<Record<Field, string>>({
    phoneNumber: '',
    verificationCode: '',
  });

  const { mutate: signInWithOtp } = useSignInWithOtp();

  const handleChange = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignInWithOtpPress = async () => {
    signInWithOtp(toE164(values.phoneNumber));
  };

  return (
    <Screen>
      <Title>번호 인증</Title>

      <View className="gap-6">
        <View className="gap-4">
          <View className="flex-row gap-4">
            <Input
              className="flex-1"
              value={values.phoneNumber}
              placeholder="01012345678"
              maxLength={11}
              keyboardType="number-pad"
              autoFocus
              onChangeText={(text) => handleChange('phoneNumber', text)}
            />
            <Button title="번호 요청" className="w-32" onPress={handleSignInWithOtpPress} />
          </View>

          <Input
            value={values.verificationCode}
            placeholder="인증번호를 입력하세요."
            maxLength={6}
            keyboardType="number-pad"
            onChangeText={(text) => handleChange('verificationCode', text)}
          />
        </View>

        <Button title="다음" />
      </View>
    </Screen>
  );
}
