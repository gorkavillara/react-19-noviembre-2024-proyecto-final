type Role = "admin" | "user" | "client"
type Status = "active" | "inactive"

export interface User {
  id: string
  username: string
  role: Role
  email: string
}

export interface Charger {
  id: string
  name: string
  status: Status
  type: string
  model: string
  isAvailable: boolean
}
