import { Bell, CaretDown } from "@phosphor-icons/react";



const Header = () => {
    const name: string = 'wisdom';

    return ( 
        <header>
            <div className="flex justify-end p-2 items-center">
                <div className="hover:bg-primary-linen rounded-full mx-2 p-2 ">
                    <Bell size={26} />
                </div>
                <img src="https://img.freepik.com/free-photo/happy-people-young-beautiful-woman-with-little-boy-attractive-man-long-haired-school-age-girl-casual-clothes-hugging-joyful-looking-camera-standing-near-house_259150-59356.jpg?size=626&ext=jpg&uid=R91948713&ga=GA1.1.1052841364.1698365059&semt=sph" alt="" className="w-11 h-11 rounded-full object-cover mx-2 "/>
                <div className="">{ name }</div>
                <CaretDown size={20} className="ml-2 mr-10"/>
            </div>

        </header>
     );
}
 
export default Header;