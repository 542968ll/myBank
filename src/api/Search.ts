import request from "./Request";
import type { searchItemType } from "../types/search"

export const fetchSearchItem = async (): Promise<searchItemType> => {
  const response = await request.get('/api/search')
  return response.data
}