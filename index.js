const fs = require('fs')
const path = require('path')

const envdir = dir => {
  const defaultDir = dir || process.env.ENVDIR || 'env'

  const files = fs.readdirSync(defaultDir)
  files
    .filter(file => {
      const stat = fs.statSync(path.join(defaultDir, file))
      return stat.isFile()
    })
    .forEach(file => {
      const value = fs.readFileSync(path.join(defaultDir, file))
      process.env[file] = value.toString().trim()
    })
}

module.exports = envdir
