const fs = require('fs')

const src = '../src/js'
const dest = 'node_modules/usr'

fs.lstat(dest, (err, stats) => {
  if (err) {
    console.log('Creating local package symlink...')
    fs.symlinkSync(src, dest, 'dir')
  } else {
    console.log('Symlink already exists.')
  }
})

