import { dummyApi } from '@/lib/axios/dummyApi'
import { IAuthLoginProps, IAuthLoginResponse } from './types'

export const authLogin = async (userData: IAuthLoginProps) => {
  const { data } = await dummyApi.post<IAuthLoginResponse>(
    '/user/login',
    userData,
  )

  return data
}
