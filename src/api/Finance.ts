import type { financeDataType } from "../types/financeType";
import request from "./Request";

export const fetchShowFinance = async (): Promise<financeDataType> => {
  const response = await request.get('/api/finance')
  return response.data
}