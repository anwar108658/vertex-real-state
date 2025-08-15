import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className="px-4">
      <Outlet />
    </div>
  )
}

export default App