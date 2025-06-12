import {  createBrowserRouter} from "react-router-dom";

import Home from "../Pages/Home";
import Root from "../Layout/Root";
import SignIn from "../Pages/SignIn";


const router=createBrowserRouter([
{
    path:'/',
    element:<Root/>,
    children:[
        {
            path:'/',
            element:<Home/>

        }
    ],
    
},
{
    path:'singin',
    element:<SignIn/>
}
]);
export default router