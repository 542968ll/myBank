import request from './Request'
import type { myDataType } from '../types/myType'

export const fetchMyMain = async (): Promise<myDataType> => {
  const response = await request.get('/api/my')
  return response.data
}