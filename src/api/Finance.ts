import request from "./Request";

export const fetchShowFinance = async (): Promise<any> => {
  const response = await request.get('/api/finance')
  return response.data
}