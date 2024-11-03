import Constants from 'expo-constants'
import { ScrollView, View } from 'react-native'

import { Header } from '../modules/core/components/header'

const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-slate-200 ">
      <View className="w-full px-4 pt-2.5" style={{ marginTop: statusBarHeight }}>
        <Header />
      </View>
    </ScrollView>
  )
}
