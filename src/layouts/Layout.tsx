import { Link, Outlet } from "react-router-dom"
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <Link to="/users">Usuarios</Link>
        <Link to="/chargers">Cargadores</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
