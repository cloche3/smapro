/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from 'firebase/auth'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  VFC,
} from 'react'

type UserState = User | null
type UserDispatch = Dispatch<SetStateAction<UserState>>

export const UserStateContext = createContext<UserState>(null as any)
export const UserDispatchContext = createContext<UserDispatch>(null as any)

export const UserContextProvider: VFC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserState>(null)

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

export const useUser = () => {
  const state = useContext(UserStateContext)
  const dispatch = useContext(UserDispatchContext)

  return [state, dispatch] as const
}
