import { Outlet } from "react-router"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const Home = () => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px'}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home