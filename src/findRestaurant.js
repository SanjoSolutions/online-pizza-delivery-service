import { restaurants } from './restaurants.js'

export function findRestaurant(id) {
  return restaurants.find(restaurant => restaurant.id === id)
}
