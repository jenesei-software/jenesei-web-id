import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const manifestDirPath = path.resolve(__dirname, 'public')
const manifestPath = path.resolve(manifestDirPath, 'manifest')

const sizes = [192, 256, 384, 512]

const inputFile = path.join(__dirname, 'public/logos/logo-jenesei-software.png')
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

function updateManifest() {
  let manifest

  try {
    const manifestContent = fs.readFileSync(manifestPath, 'utf8')
    manifest = JSON.parse(manifestContent)
  } catch (error) {
    console.error('Error reading or parsing manifest:', error)
    return
  }

  const newIcons = [
    {
      src: 'icons/icon-64x64.ico',
      sizes: '64x64',
      type: 'image/x-icon',
      purpose: 'any',
    },
    {
      src: 'icons/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: 'icons/icon-256x256.png',
      sizes: '256x256',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: 'icons/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: 'icons/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: 'icons/icon-180x180.png',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'any',
    },
  ]

  if (!manifest.icons) {
    manifest.icons = []
  }

  newIcons.forEach((icon) => {
    if (!manifest.icons.some((existingIcon) => existingIcon.src === icon.src)) {
      manifest.icons.push(icon)
    }
  })

  try {
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
    console.log('Updated manifest')
  } catch (error) {
    console.error('Error writing updated manifest:', error)
  }
}

updateManifest()
