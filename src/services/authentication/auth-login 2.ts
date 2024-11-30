import { dummyApi } from '@/lib/axios/dummyApi'

export const authLogin = async (data) => {
  const response = await dummyApi.post('/auth/login', data)

  return response.data
}
