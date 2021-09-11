import React from 'react'
import { useParams } from 'react-router-dom'
import { findRestaurant } from './findRestaurant.js'

export function Restaurant() {
  const params = useParams()
  const id = parseInt(params.id, 10)
  const restaurant = findRestaurant(id)
  const { image } = restaurant
  console.log('id', id)
  return (
    <img
      src={image}
      alt="Restaurant"
      height={320}
      style={{ width: '100%', objectFit: 'cover' }}
    />
  )
}
