import mongosee from 'mongosee'
import config from '../config/key'

export const connect = mongosee
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err))
