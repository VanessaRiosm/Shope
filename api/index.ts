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
// server.use(cors({origin: '*'}))
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'

//   )
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
//   next()
// })
server.use('/', routes)

server.listen(port, () => {
  console.log('Listening on port', port)
})

export default server
