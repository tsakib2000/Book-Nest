import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";


const Root = () => {
    return (
   <>
      <div className="h-[80px] flex justify-center items-center">
        <Navbar />
      </div>
   <Outlet/>
   </>
    );
};

export default Root;