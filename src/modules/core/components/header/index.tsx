import { useHeaderModel } from '~/src/modules/core/components/header/model'
import { HeaderView } from '~/src/modules/core/components/header/view'
export function Header() {
  return <HeaderView {...useHeaderModel()} />
}
