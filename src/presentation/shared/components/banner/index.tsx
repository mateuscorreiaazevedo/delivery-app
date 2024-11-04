import { useBannerModel } from './model'
import { BannerView } from './view'

export function Banner() {
  return <BannerView {...useBannerModel()} />
}
