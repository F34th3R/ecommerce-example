require('dotenv').config()
import express, { json } from 'express'
import cors from 'cors'

const app = express()
// settings
app.set('PORT', process.env.PORT || 4000)
// midelwares
app.use(json()) // remplace of body-parser
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
      'X-Password-Expired'
    ],
    optionsSuccessStatus: 200
  })
)

// Routes
import projectRoutes from '@root/routes/projects'

app.use('/api/projects', projectRoutes)

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  })
})

export default app
