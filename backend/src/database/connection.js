import mongosee from 'mongosee'

export const connection = mongosee.connection(config.mongoURI)
