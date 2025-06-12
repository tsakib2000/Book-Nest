import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import NavigationTab from "../Component/NavigationTab";


const Root = () => {
    return (
   <>
      <div className="h-[80px] flex justify-center items-center">
        <Navbar />
         <NavigationTab/>
      </div>
   <Outlet/>
   </>
    );
};

export default Root;