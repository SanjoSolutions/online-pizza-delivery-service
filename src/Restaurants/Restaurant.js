import React from 'react'
import { Link } from 'react-router-dom'
import { generateImagePathForDimensions } from '../generateImagePathForDimensions.js'

export function Restaurant({ id, image, name, dishes }) {
  return (
    <div className="col">
      <Link to={ `/restaurants/${ id }` } className="card h-100">
        <img
          src={ generateImagePathForDimensions(image, 514, 289) }
          alt="Restaurant"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            { name }
          </h5>
          <p className="card-text">{ dishes.join(', ') }</p>
        </div>
      </Link>
    </div>
  )
}
