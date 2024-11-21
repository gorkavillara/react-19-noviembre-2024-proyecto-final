import { use } from "react"
import axios from "axios"
import { UserContext } from "../../contexts/UserContextProvider"

const token = localStorage.getItem("authToken")
const apiInstance = axios.create({
  baseURL: "https://api.ejemplo.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

const Users = () => {
  // Obtenemos los usuarios del contexto
  const { users, loading, error } = use(UserContext)

  if (loading) return <span>Cargando...</span>
  if (error) return <span>Error! {error}</span>

  return (
    <div>
      <h2>Listado de usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            {index + 1}. {user.username}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users
