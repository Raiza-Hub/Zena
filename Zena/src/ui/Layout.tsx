import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return ( 
        <main className="w-full flex">
            <Sidebar />
            <div className="flex-1 ">
                <Navbar />
                <Outlet />
            </div>
        </main>
     );
}
 
export default Layout;