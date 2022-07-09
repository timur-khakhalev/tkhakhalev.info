require('dotenv').config()
require('module-alias/register')
require('colors')
const fs = require('fs')
const https = require('https')

const koa = require('@/koa')

const config = {
  http: {
    port: process.env.PORT,
    host: process.env.HTTP_HOST,
    fullAddress: `http://${process.env.HTTP_HOST}:${process.env.PORT}`
  },
  https: {
    domain: process.env.DOMAIN,
    port: process.env.PORT,
    options: {
      key: fs.readFileSync(process.env.SSL_KEY, 'utf-8').toString(),
      cert: fs.readFileSync(process.env.SSL_CERT, 'utf-8').toString(),
    },
    fullAddress: `https://${process.env.DOMAIN}:${process.env.PORT}`
  }
}


const server = process.env.NODE_ENV === 'development' ? koa : https.createServer(config.https.options, koa.callback())

server.listen(process.env.NODE_ENV === 'development' ? config.http : config.https, async () => {
  const bootTime = new Date()
  const timeString = `${bootTime.getHours()}:${bootTime.getMinutes()}:${bootTime.getSeconds()}`
  const pidString = `pid: ${process.pid}`

  console.clear()
  console.log(`\nServer ready at ${process.env.NODE_ENV === 'development' ? config.http.fullAddress : config.https.fullAddress.cyan}  ${timeString.gray}  ${pidString.gray}`)
  console.log('======================================'.blue + '========='.yellow + '============\n'.red)
})

