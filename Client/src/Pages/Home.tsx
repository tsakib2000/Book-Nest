import { Button } from "flowbite-react";
import useAuth from "../Hooks/useAuth";



const Home = () => {
  const {user}=useAuth();
  console.log(user);
    return (
      <div >


    </div>
    );
};

export default Home;