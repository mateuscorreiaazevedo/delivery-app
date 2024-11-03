import { Image, Pressable, View } from 'react-native'
import PagerView from 'react-native-pager-view'

import { useBannerModel } from './model'

type ViewProps = ReturnType<typeof useBannerModel>
export function BannerView(props: ViewProps) {
  const { slides, pagerViewRef, handlePageSelected } = props

  return (
    <View className="mb-4 mt-5 h-36 w-full rounded-2xl md:h-60">
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        initialPage={0}
        pageMargin={14}
        onPageSelected={handlePageSelected}>
        {slides.map((slide) => (
          <Pressable
            className="h-36 w-full rounded-2xl md:h-60"
            key={slide.key}
            onPress={() => console.log(`clicked on banner ${slide.key}`)}>
            <Image source={slide.path as any} className="h-36 w-full rounded-2xl md:h-60" />
          </Pressable>
        ))}
      </PagerView>
    </View>
  )
}
