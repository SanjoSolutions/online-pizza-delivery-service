import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import { Restaurant } from './Restaurant.js'
import { Restaurants } from './Restaurants/Restaurants.js'
import React from 'react'

export function App() {
  return (
    <Router
      basename={
        location.hostname === 'sanjosolutions.github.io'
          ? '/online-pizza-delivery-service'
          : '/'
      }
    >
      <div>
        <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
          <symbol id='logo' viewBox='0 0 135.46667 135.46667'>
            <title>Logo</title>
            <path
              d='M 256.5 0.5 A 256.00001 256.00001 0 0 0 0.5 256.5 A 256.00001 256.00001 0 0 0 256.5 512.5 A 256.00001 256.00001 0 0 0 512.5 256.5 A 256.00001 256.00001 0 0 0 256.5 0.5 z M 173.59961 96.697266 A 64.000002 64.000002 0 0 1 237.59961 160.69727 A 64.000002 64.000002 0 0 1 173.59961 224.69727 A 64.000002 64.000002 0 0 1 109.59961 160.69727 A 64.000002 64.000002 0 0 1 173.59961 96.697266 z M 405.25977 193.4668 A 64.000002 64.000002 0 0 1 469.25977 257.4668 A 64.000002 64.000002 0 0 1 405.25977 321.4668 A 64.000002 64.000002 0 0 1 341.25977 257.4668 A 64.000002 64.000002 0 0 1 405.25977 193.4668 z M 201.16406 318.97461 A 64.000002 64.000002 0 0 1 265.16406 382.97461 A 64.000002 64.000002 0 0 1 201.16406 446.97461 A 64.000002 64.000002 0 0 1 137.16406 382.97461 A 64.000002 64.000002 0 0 1 201.16406 318.97461 z '
              transform='scale(0.26458334)'
            />
          </symbol>
        </svg>
        <nav className='navbar sticky-top navbar-dark bg-dark mb-3'>
          <div className='container-fluid'>
            <Link to='/' className='navbar-brand text-primary'>
              <svg
                className='bi me-2'
                width={40}
                height={32}
                role='img'
                aria-label='Pizza Delivery Service'
              >
                <use xlinkHref='#logo' />
              </svg>
            </Link>
          </div>
        </nav>
        <div className='container'>
          <Switch>
            <Route exact path='/'>
              <Restaurants />
            </Route>
            <Route exact path='/restaurants/:id'>
              <Restaurant />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
