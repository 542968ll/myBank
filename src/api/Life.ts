import request from './Request'

export const fetchShowLife = async (): Promise<any> => {
  const response = await request.get('/api/life')
  return response.data
}