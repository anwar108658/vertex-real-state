import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <div className="px-1 sm:px-3">
        <Header/>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App