import { create } from 'zustand'
import { IAuthLoginResponse } from "@/services/authentication/types"
import { StateProps } from './types';

export const useUser = create<StateProps>((set) => ({
  user: {} as IAuthLoginResponse,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: {} as IAuthLoginResponse })
}));