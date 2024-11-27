import { useActionState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const baseUrl = "https://4e0a-88-10-218-164.ngrok-free.app"
const appName = import.meta.env.VITE_NOMBRE_APP

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const submitLogin = async () => {
    // Enviar la info al backend
    if (!usernameRef.current || !passwordRef.current) return

    // const username = usernameRef.current.value
    // const password = passwordRef.current.value
    try {
      // const res = await axios.post(`${baseUrl}/api/login`, {
      //   username,
      //   password,
      // })
      const res = await axios.get(`${baseUrl}/api/login`)
      if (res) {
        localStorage.setItem("authToken", "123123123")
        navigate("/")
      }
      // console.log(res.data)
    } catch (error) {
      console.error(error)
      return "Error al hacer login"
    }
  }
  const [error, formAction, isPending] = useActionState(submitLogin, null)
  return (
    <div>
      <form action={formAction}>
        <input
          ref={usernameRef}
          type="text"
          placeholder="Tu nombre de usuario"
          min={3}
          max={20}
        />
        <br />
        <input ref={passwordRef} type="password" placeholder="Tu contraseña" />
        <br />
        <button type="submit" disabled={isPending}>Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>Nombre de la app: {appName}</p>
      </form>
    </div>
  )
}

export default Login
