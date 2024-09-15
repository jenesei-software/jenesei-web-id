import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sizes = [192, 256, 384, 512]

const inputFile = path.join(__dirname, 'public/logos/logo-jenesei-id.png')
const outputDir = path.join(__dirname, 'public/icons')
const faviconPath = path.join(outputDir, 'icon-64x64.ico')
const whiteBackgroundIconPath = path.join(outputDir, 'icon-180x180.png')

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

sizes.forEach((size) => {
  sharp(inputFile)
    .resize(size, size)
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`), (err) => {
      if (err) {
        console.error(`Error generating icon ${size}x${size}:`, err)
      } else {
        console.log(`Generated icon ${size}x${size}`)
      }
    })
})

sharp(inputFile)
  .resize(180, 180)
  .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .toFile(whiteBackgroundIconPath, (err) => {
    if (err) {
      console.error('Error generating icon with white background:', err)
    } else {
      console.log('Generated icon 180x180')
    }
  })

sharp(inputFile)
  .resize(64, 64)
  .toFile(faviconPath, (err) => {
    if (err) {
      console.error('Error generating favicon:', err)
    } else {
      console.log('Generated icon-favicon.ico')
    }
  })
