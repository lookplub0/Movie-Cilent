import { Link } from "react-router-dom"
import { assets } from "../../assets/assets"

const AdminNavbar = () => {
  return (
    <div className="flex items-center justify-between px-6 
    md:px-10 h-16 border-b border-gray-300/30">
        <Link to="/">
        <img src={assets.Mhee}  alt="logo" className="w-10 h-auto"/>
        </Link>

    </div>
  )
}
export default AdminNavbar