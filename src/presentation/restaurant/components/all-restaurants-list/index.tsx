import { useAllRestaurantsListModel } from './model'
import { AllRestaurantsListView } from './view'

export function AllRestaurantsList() {
  return <AllRestaurantsListView {...useAllRestaurantsListModel()} />
}
