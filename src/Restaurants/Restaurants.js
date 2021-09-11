import { Restaurant } from './Restaurant.js'
import { restaurants } from '../restaurants.js'

export function Restaurants() {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      {restaurants.map((restaurant, index) => <Restaurant {...restaurant} />)}
      {/*
      <nav class="mt-3" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item active"><span class="page-link" href="#">1</span></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    */}
    </div>
  )
}
