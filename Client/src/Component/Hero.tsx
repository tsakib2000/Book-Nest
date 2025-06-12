
import Lottie from 'lottie-react';
import hero from '../assets/hero.json'

const Hero = () => {

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie animationData={hero} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        <div>
          <h1 className="text-5xl font-bold"> Welcome to BookNest – Your Trusted Online Bookstore</h1>
          <p className="py-6">
            Discover a world of knowledge and imagination right from your screen. BookNest brings readers from all 64 districts of Bangladesh together on one easy-to-use platform
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;