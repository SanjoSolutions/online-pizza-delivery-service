import React from 'react'
import { useParams } from 'react-router-dom'
import { findRestaurant } from './findRestaurant.js'

export function Restaurant() {
  const params = useParams()
  const id = parseInt(params.id, 10)
  const restaurant = findRestaurant(id)
  const { image, name, dishes } = restaurant
  return (
    <div>
      <img
        src={ image }
        alt="Restaurant"
        height={ 320 }
        style={ { width: '100%', objectFit: 'cover' } }
      />
      <h1 className="mt-2">{ name }</h1>
      <h2>Dishes</h2>
      <ul>
        { dishes.map((dish, index) => <li key={ index }>{ dish }</li>) }
      </ul>
    </div>
  )
}
