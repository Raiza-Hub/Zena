import { NavLink } from "react-router-dom";
import { House, DotsNine, CreditCard, ArrowsLeftRight, Files, CurrencyCircleDollar, GearSix, Info } from "@phosphor-icons/react";

// type Icons = {
//     size: number,
//     weight: string,
//     className?: string 
// }

const Sidebar = () => {
    return ( 
        <nav className="w-52 h-screen flex flex-col justify-between bg-primary-white-smoke">
            <div className="h-3/6 flex flex-col justify-around mx-5">
                <h1 className="text-4xl mt-2 mb-4 font-heading pl-2">Zena</h1>
                <div className="h-3/4 flex flex-col justify-around  font-text">
                   <NavLink to='/' className='flex p-2'>
                        <House size={21}  className="mr-2" />
                        Home
                    </NavLink> 
                    <NavLink to='/projects' className='flex p-2'>
                        <DotsNine size={22}  className="mr-2" />
                        Projects
                    </NavLink> 
                    <NavLink to='/business' className='flex p-2 '>
                        <CreditCard size={21}  className="mr-2" />
                        Business spend
                    </NavLink> 
                    <NavLink to='/transaction' className='flex p-2 '>
                        <ArrowsLeftRight size={21}  className="mr-2" />  
                        Transactions
                    </NavLink>
                    <NavLink to='/payments' className='flex p-2'>
                        <Files size={21}  className="mr-2" />
                        Payments
                    </NavLink>
                    <NavLink to='/statements' className='flex p-2'>
                        <CurrencyCircleDollar size={21}  className="mr-2" />
                        Statements
                    </NavLink>   
                </div>
            </div>

            <div className="h-28 flex flex-col mx-5 justify-evenly font-text">
                <NavLink to='/settings' className='flex p-2 '>
                    <GearSix size={21} className="mr-2" />
                    Settings
                </NavLink>
                <NavLink to='/help' className='flex p-2'>
                    <Info size={21} className="mr-2" />
                    Need help?
                </NavLink>  
            </div>

        </nav>
     );
}
 
export default Sidebar;