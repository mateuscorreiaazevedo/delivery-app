import { Alert } from 'react-native'

export function useAlert() {
  const setError = (message: string) => {
    Alert.alert('Error', message)
  }

  const setSuccess = (message: string) => {
    Alert.alert('Success', message)
  }

  return {
    setError,
    setSuccess,
  }
}
