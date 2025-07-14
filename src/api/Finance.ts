import type { financeDataType } from "../types/financeType";
import type { detailDataType } from "../types/detail"
import request from "./Request";

export const fetchShowFinance = async (): Promise<financeDataType> => {
  const response = await request.get('/api/finance')
  return response.data
}

export const fetchFinanceDetail = async (): Promise<detailDataType> => {
  const response = await request.get('/api/detail')
  return response.data
}