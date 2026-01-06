import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error';

const showToast = (type: ToastType, message: string) => {
  Toast.show({
    type: type,
    text1: message,
    position: 'top',
    visibilityTime: 2000,
  });
};

export const toast = {
  success: (message: string) => showToast('success', message),
  error: (message: string) => showToast('error', message),
};
