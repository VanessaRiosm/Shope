import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import routes from './src/routes/index'
config()
import './src/mongo'

const port = 3000
const server = express()

server.use(express.json())
server.use(cors({origin: '*'}))
server.use('/', routes)

server.listen(port, () => {
  console.log('Listening on port', port)
})

export default server
