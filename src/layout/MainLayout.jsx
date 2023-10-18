import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  )
}

export default MainLayout
