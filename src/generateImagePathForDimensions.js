import { basename, dirname, extname } from 'path'

export function generateImagePathForDimensions(image, width, height) {
  const imageDirectory = dirname(image)
  const imageExtension = extname(image)
  const imageName = basename(image, imageExtension)
  return `${imageDirectory}/${imageName}_${width}x${height}${imageExtension}`
}
