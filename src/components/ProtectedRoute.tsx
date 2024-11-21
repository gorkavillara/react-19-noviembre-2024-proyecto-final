import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const authToken = localStorage.getItem("authToken")

  // Enviar la solicitud a la API y ver si nos deja entrar o no
  if (!authToken) return <Navigate to="login" />

  return element
}

export default ProtectedRoute
