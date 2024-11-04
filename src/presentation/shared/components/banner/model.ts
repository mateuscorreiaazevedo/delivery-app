import { useEffect, useRef, useState } from 'react'
import { NativeSyntheticEvent } from 'react-native'
import PagerView from 'react-native-pager-view'

import { SliderBannerType } from './types'

type ModelProps = {
  timeInMs?: number
}

export function useBannerModel(props: ModelProps = {}) {
  const { timeInMs = 5000 } = props

  const pagerViewRef = useRef<PagerView>(null)
  const [, setCurrentPage] = useState(0)

  const slides: SliderBannerType[] = [
    {
      key: '1',
      path: require('../../../../assets/images/banner1.png'),
    },
    {
      key: '2',
      path: require('../../../../assets/images/banner2.png'),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => {
        const nextPage = (prev + 1) % slides.length
        pagerViewRef.current?.setPage(nextPage)

        return nextPage
      })
    }, timeInMs)

    return () => clearInterval(interval)
  }, [])

  const handlePageSelected = (e: NativeSyntheticEvent<Readonly<{ position: number }>>) => {
    setCurrentPage(e.nativeEvent?.position)
  }

  return {
    slides,
    pagerViewRef,
    handlePageSelected,
  }
}
