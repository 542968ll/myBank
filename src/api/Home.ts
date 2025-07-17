import request from './Request'
import type { homeData } from '../types/homeType'

export const fetchHomeData = async (): Promise<homeData> => {
  const response = await request.get('/api/home')
  return response.data
}