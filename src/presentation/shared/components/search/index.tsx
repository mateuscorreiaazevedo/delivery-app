import { useSearchModel } from './model'
import { SearchView } from './view'

export function Search() {
  return <SearchView {...useSearchModel()} />
}
