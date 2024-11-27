import { useActionState, useRef } from "react"

const NewUser = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const altaUsuario = async () => {
      // Dar de alta este nuevo usuario
      if (!formRef || !formRef.current) return

      const formData = new FormData(formRef.current)

      const username = formData.get("username")
      const password = formData.get("password")

      console.log({ username, password })
  }
  const [error, formAction] = useActionState(altaUsuario, null)


  return (
    <form
      action={formAction}
      ref={formRef}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <input type="text" name="username" placeholder="Tu nombre de usuario" />
      <input type="password" name="password" placeholder="Tu contraseña" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default NewUser
