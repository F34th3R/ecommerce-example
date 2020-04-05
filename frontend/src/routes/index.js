import { AUTH_ROUTES } from './auth.routes'
import { GLOBAL_ROUTES } from './global.routes'

export { SERVER_URL, API } from './API.routes'
export const ROUTES = [...AUTH_ROUTES, ...GLOBAL_ROUTES]
