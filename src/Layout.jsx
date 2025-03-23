import { Outlet } from "react-router-dom";

import NavBar from "./NavBar.jsx";

import "./Layout.css"

function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;