import request from "./Request";

export const fetchSearchItem = async (): Promise<any> => {
  const response = await request.get('/api/search')
  return response.data
}