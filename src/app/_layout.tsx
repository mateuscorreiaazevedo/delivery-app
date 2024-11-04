import '../assets/styles/global.css'
import { Slot } from 'expo-router'
import { StatusBar } from 'react-native'

import { HttpClientProvider } from '@/presentation/shared/providers/http-client-provider'

export default function RootLayout() {
  return (
    <HttpClientProvider>
      <StatusBar barStyle="default" />
      <Slot />
    </HttpClientProvider>
  )
}
