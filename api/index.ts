import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import routes from './src/routes/index'
config()
import './src/mongo'

const port = 3000
const server = express()
server.use(
  cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  })
)
server.use(express.json())

server.use('/', routes)

server.listen(port, () => {
  console.log('Listening on port', port)
})

export default server
