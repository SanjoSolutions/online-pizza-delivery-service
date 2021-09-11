import sharp from 'sharp'
import { generateImagePathForDimensions } from './src/generateImagePathForDimensions.js'

const images = [
  'public/images/kitchen_restaurant.jpg',
  'public/images/wasser_restaurant.jpg',
  'public/images/placeholder_restaurant.jpg',
]

const sizes = [
  { width: 514, height: 289 },
]

async function generateImages(imagePath) {
  const image = sharp(imagePath)
  await Promise.all(sizes.map(generateImage.bind(null, imagePath, image)))
}

async function generateImage(imagePath, image, { width, height }) {
  await image
    .resize(width, height)
    .toFile(generateImagePathForDimensions(imagePath, width, height))
}

await Promise.all(images.map(generateImages))
