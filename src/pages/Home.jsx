import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../component/FoodCard";
import Banner from "../component/Banner";
import Process from "../component/Process";
import { Link } from "react-router";
import Loader from "./Loader";
 

const Home = () => {
  const [foods, setFoods] = useState();
  const {loading,setLoading} = useState(true)
  // console.log(foods);
  useEffect(() => {
      if (loading) {
    return  <Loader></Loader>;
  }
    axios(`https://plate-share-server-ten.vercel.app/latest-foods?status=${"available"}`).then(
      (data) => {
        setFoods(data.data);
      }
    );
  }, ["available"]);
   if (loading) {
    return  <Loader></Loader>;
  }


  return (
    <div className="mt-20">
      
      <Banner></Banner>
     <section  >
  <div className="relative flex flex-col items-center text-center my-10">
    <span className="uppercase tracking-widest text-sm text-cyan-400 font-semibold mb-2">
      Featured
    </span>
    <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
      Latest <span className="text-cyan-400">Foods</span>
    </h2>
    <div className="absolute -bottom-3 w-28 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full shadow-md"></div>
  </div>
</section>
     {loading===foods?<Loader></Loader> :   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 lg:max-w-10/12 mx-auto">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>}
   
      <div className="flex justify-center mb-10">
        <Link to={"/all-foods"}>
          <button className="relative inline-flex items-center justify-center p-[3px] overflow-hidden font-medium text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb]">
            <span className="px-6 py-3 w-full h-full bg-[#05062d] rounded-md transition-all duration-300  hover:bg-transparent">
            View Details
            </span>
          </button>
        </Link>
      </div>

      <Process></Process>
    </div>
  );
};

export default Home;
