export const restaurants = [
  {
    id: 1,
    image: '/images/kitchen_restaurant.jpg',
    name: 'Kitchen Restaurant',
    dishes: [
      'Kidney Beans',
      'Kartoffeln',
      'gebratene Kartoffeln',
      'Kartoffeln mit Frischkäse',
    ],
  },
  {
    id: 2,
    image: '/images/wasser_restaurant.jpg',
    name: 'Wasser Restaurant',
    dishes: [
      'Wasser aus der Leitung',
    ],
  },
]

const totalNumberOfRestaurants = 20

while (restaurants.length < totalNumberOfRestaurants) {
  addRestaurant()
}

function addRestaurant() {
  const id = restaurants.length + 1
  const restaurant = {
    id,
    image: '/images/placeholder_restaurant.jpg',
    name: `Placeholder Restaurant ${ id }`,
    dishes: [],
  }
  restaurants.push(restaurant)
}
