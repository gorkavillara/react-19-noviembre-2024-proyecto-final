import axios from "axios"
import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, Mocked, vi } from "vitest"
import UserContextProvider from "../contexts/UserContextProvider"
import Users from "../pages/Users"
import { User } from "../types"

vi.mock("axios")
const mockedAxios = axios as Mocked<typeof axios>

// const getFactoryUser = (role: "admin" | "user" | "client"): () => JSX.Element => {
//   return () => <div>{role}</div>
// }

// const elementFactory = getFactoryUser("admin")

// const PrimerComponent = elementFactory()
// const SegundoComponent = elementFactory()

describe("Testing Users.tsx", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  it.skip("Renders correctly", async () => {
    const testUsers: User[] = [
      {
        id: "123456",
        email: "prueba1@gmail.com",
        role: "client",
        username: "prueba1",
      },
      {
        id: "654321",
        email: "prueba2@gmail.com",
        role: "user",
        username: "prueba2",
      },
    ]

    mockedAxios.get.mockResolvedValueOnce({ data: testUsers })

    render(
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    )

    await screen.findByRole("users-list")

    const users = screen.getAllByRole("user")
    expect(users.length).toBe(2)

    screen.getByText(`1. ${testUsers[0].username}`)
  })
  //   it("Renders mocked data", () => {
  //     console.log("mocked")
  //   })

  it("Renders an error", async () => {
    mockedAxios.get.mockRejectedValueOnce({ message: "Network Error" })

    render(
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    )

    const errorElement = await screen.findByRole("error")
    expect(errorElement.innerHTML).toBe("Error! Network Error")
  })
})
