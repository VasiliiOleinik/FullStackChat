import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import sequelize from './utils/DB.js'
import router from './routes/index.js'

const PORT = process.env.PORT || 3001
const app = express()

app.use(
  cors({
    origin: ['http://localhost:8899', 'http://192.168.0.101:8899'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true
  }),
);
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync().then(() => console.log('Database conntected'))
    app.listen(3001, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(`Start error: `, e)
  }
}

start()