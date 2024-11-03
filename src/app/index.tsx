import Constants from 'expo-constants'
import { ScrollView, View } from 'react-native'

import { Banner, Header, Search } from '@/modules/core/presentation'

const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-slate-200 ">
      <View className="w-full gap-2 px-4 pt-2.5" style={{ marginTop: statusBarHeight }}>
        <Header />
        <Banner />
        <Search />
      </View>
    </ScrollView>
  )
}
