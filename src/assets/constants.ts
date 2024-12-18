import { Charger, User } from "../types"

export const users: User[] = [
  {
    id: "1",
    username: "usuario1",
    role: "admin",
    email: "usuario1@example.es",
  },
  {
    id: "2",
    username: "usuario2",
    role: "user",
    email: "usuario2@example.es",
  },
  {
    id: "3",
    username: "usuario3",
    role: "user",
    email: "usuario3@example.es",
  },
  {
    id: "4",
    username: "usuario4",
    role: "user",
    email: "usuario4@example.es",
  },
  {
    id: "5",
    username: "usuario5",
    role: "admin",
    email: "usuario5@example.es",
  },
]

export const chargers: Charger[] = [
  {
    id: "1",
    name: "Charger 1",
    status: "active",
    type: "fast",
    model: "Model X",
    isAvailable: true,
  },
  {
    id: "2",
    name: "Charger 2",
    status: "inactive",
    type: "standard",
    model: "Model Y",
    isAvailable: false,
  },
  {
    id: "3",
    name: "Charger 3",
    status: "active",
    type: "fast",
    model: "Model Z",
    isAvailable: true,
  },
  {
    id: "4",
    name: "Charger 4",
    status: "inactive",
    type: "standard",
    model: "Model A",
    isAvailable: false,
  },
  {
    id: "5",
    name: "Charger 5",
    status: "active",
    type: "fast",
    model: "Model B",
    isAvailable: true,
  },
  {
    id: "6",
    name: "Charger 6",
    status: "inactive",
    type: "standard",
    model: "Model C",
    isAvailable: false,
  },
  {
    id: "7",
    name: "Charger 7",
    status: "active",
    type: "fast",
    model: "Model D",
    isAvailable: true,
  },
  {
    id: "8",
    name: "Charger 8",
    status: "inactive",
    type: "standard",
    model: "Model E",
    isAvailable: false,
  },
  {
    id: "9",
    name: "Charger 9",
    status: "active",
    type: "fast",
    model: "Model F",
    isAvailable: true,
  },
  {
    id: "10",
    name: "Charger 10",
    status: "inactive",
    type: "standard",
    model: "Model G",
    isAvailable: false,
  },
]
