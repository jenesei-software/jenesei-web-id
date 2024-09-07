import { config } from 'dotenv'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const manifestTemplatePath = path.resolve(__dirname, 'generate-manifest.template')
const manifestDirPath = path.resolve(__dirname, 'public')
const manifestPath = path.resolve(manifestDirPath, 'manifest.json')

const VITE_DEFAULT_NAME = process.env.VITE_DEFAULT_NAME || 'Default App Name'
const VITE_DEFAULT_SHORTNAME = process.env.VITE_DEFAULT_SHORTNAME || 'Default Shortname'
const VITE_DEFAULT_THEME_COLOR = process.env.VITE_DEFAULT_THEME_COLOR || '#ffffff'
const VITE_DEFAULT_DESCRIPTION = process.env.VITE_DEFAULT_DESCRIPTION || 'Default Description'

let manifest = fs.readFileSync(manifestTemplatePath, 'utf8')

manifest = manifest.replace('{{VITE_DEFAULT_NAME}}', VITE_DEFAULT_NAME)
manifest = manifest.replace('{{VITE_DEFAULT_SHORTNAME}}', VITE_DEFAULT_SHORTNAME)
manifest = manifest.replace('{{VITE_DEFAULT_THEME_COLOR}}', VITE_DEFAULT_THEME_COLOR)
manifest = manifest.replace('{{VITE_DEFAULT_BACKGROUND_COLOR}}', VITE_DEFAULT_THEME_COLOR)
manifest = manifest.replace('{{VITE_DEFAULT_DESCRIPTION}}', VITE_DEFAULT_DESCRIPTION)

if (!fs.existsSync(manifestDirPath)) {
  fs.mkdirSync(manifestDirPath, { recursive: true })
}

fs.writeFileSync(manifestPath, manifest)

console.log('manifest created successfully in public/browser.')
