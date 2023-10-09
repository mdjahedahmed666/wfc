import Navbar from "../components/Navbar/Navbar"
import { Outlet } from 'react-router-dom';

const Mainayout = () => {
  return (
    <div>
      <Navbar/>
    <Outlet/>
    </div>
  )
}

export default Mainayout