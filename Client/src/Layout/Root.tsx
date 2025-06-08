import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";


const Root = () => {
    return (
   <>
  <div className="w-full bg-blue-400">
     <Navbar/>
  </div>
   <Outlet/>
   </>
    );
};

export default Root;