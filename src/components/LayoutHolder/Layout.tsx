import { Outlet } from "react-router-dom"
import Register from "../Static/Register"

const Layout = () => {
  return (
    <div>
        <Register/>
        <Outlet/>
    </div>
  )
}

export default Layout