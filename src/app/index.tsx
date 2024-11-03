import Constants from 'expo-constants'
import { ScrollView, View } from 'react-native'

import { Banner, Header, Search, Section } from '@/presentation/shared/components'

const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-slate-200">
      <View className="w-full gap-2 px-4 pt-2.5" style={{ marginTop: statusBarHeight }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        marginTop={10}
        title="Comidas em alta"
        size="text-2xl"
        labelButton="Ver todos"
        actionButton={() => console.log('Veja mais')}
      />
    </ScrollView>
  )
}
