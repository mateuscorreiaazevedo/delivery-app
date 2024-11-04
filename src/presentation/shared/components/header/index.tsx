import { useHeaderModel } from './model'
import { HeaderView } from './view'

export function Header() {
  return <HeaderView {...useHeaderModel()} />
}
