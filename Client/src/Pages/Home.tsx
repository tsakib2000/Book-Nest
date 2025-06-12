
import Hero from "../Component/Hero";
import useAuth from "../Hooks/useAuth";



const Home = () => {
  const {user}=useAuth();
  console.log(user);
    return (
<div>

  <Hero/>
  
</div>
    );
};

export default Home;