// startscript.js
const exec = require('child_process').exec
const path = require('path')

const client = exec('npm run start:server', {
  windowsHide: true,
  cwd: path.join(__dirname, './'),
})

client.stdout.pipe(process.stdout)
client.stderr.pipe(process.stderr)
