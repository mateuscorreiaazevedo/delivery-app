import { useFamousRestaurantsListModel } from './model'
import { FamousRestaurantsListView } from './view'

export function FamousRestaurantsList() {
  return <FamousRestaurantsListView {...useFamousRestaurantsListModel()} />
}
