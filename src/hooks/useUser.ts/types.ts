import { IAuthLoginResponse } from "@/services/authentication/types"

export interface StateProps  {
	user: IAuthLoginResponse
  setUser: (user: IAuthLoginResponse) => void
  removeUser: () => void
}