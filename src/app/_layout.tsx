import '../assets/styles/global.css'
import { Slot } from 'expo-router'

import { HttpClientProvider } from '@/presentation/shared/providers/http-client-provider'

export default function RootLayout() {
  return (
    <HttpClientProvider>
      <Slot />
    </HttpClientProvider>
  )
}
