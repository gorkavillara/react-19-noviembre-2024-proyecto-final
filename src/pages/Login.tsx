import { useState, useRef } from "react"

interface LoginForm {
  username: string
  password: string
}

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  })
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!usernameRef.current || !passwordRef.current) return

    setFormData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
    // Comprobación de credenciales
    setIsLoggedIn(true)
  }
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      {isLoggedIn ? (
        <>Ya estás logueado!</>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            ref={usernameRef}
            type="email"
            placeholder="Tu nombre de usuario"
            min={3}
            max={20}
          />
          <br />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Tu contraseña"
          />
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  )
}

export default Login
