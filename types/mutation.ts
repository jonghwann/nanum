export interface UseMutationCallbacks {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}
