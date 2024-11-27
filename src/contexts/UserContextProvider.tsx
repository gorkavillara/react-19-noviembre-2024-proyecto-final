import { createContext, useEffect, useState } from "react"
import type { PropsWithChildren } from "react"
import { User } from "../types"
import axios from "axios"

interface UserContextType {
  users: User[]
  loading: boolean
  error: string | null
}

export const UserContext = createContext<UserContextType>(null!)

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    setLoading(true)
    axios
      // .get("http://localhost:3210/api/users")
      .get("https://chargers.loca.lt/api/users")
      .then((res) => setUsers(res.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])
  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
