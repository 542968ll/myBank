import request from './Request'
import type { lifeDataType } from "../types/lifeType"

export const fetchShowLife = async (): Promise<lifeDataType> => {
  const response = await request.get('/api/life')
  return response.data
}