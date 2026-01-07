import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from '@/lib/cn';

interface ScreenProps {
  hasHeader?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Screen({ hasHeader = false, children, className }: ScreenProps) {
  return (
    <SafeAreaView
      edges={hasHeader ? ['left', 'right', 'bottom'] : ['top', 'left', 'right', 'bottom']}
      className={cn('flex-1 bg-white px-5', className)}
    >
      {children}
    </SafeAreaView>
  );
}
