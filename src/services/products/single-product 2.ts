import { dummyApi } from '@/lib/axios/dummyApi'

export const singleProduct = async (data) => {
  const response = await dummyApi.post('/products/1', data)

  return response.data
}
