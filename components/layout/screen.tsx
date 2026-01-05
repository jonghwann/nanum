import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from '@/lib/cn';

interface ScreenProps {
  children: React.ReactNode;
  className?: string;
}

export default function Screen({ children, className }: ScreenProps) {
  return <SafeAreaView className={cn('flex-1 px-4', className)}>{children}</SafeAreaView>;
}
