import sharp from 'sharp'
import { generateImagePathForDimensions } from './src/generateImagePathForDimensions.js'

const images = [
  'public/images/kitchen_restaurant.jpg',
  'public/images/wasser_restaurant.jpg'
]

async function generateImages(image) {
  const width = 514
  const height = 289
  await sharp(image)
    .resize(width, height)
    .toFile(generateImagePathForDimensions(image, width, height))
}

await Promise.all(images.map(generateImages))
