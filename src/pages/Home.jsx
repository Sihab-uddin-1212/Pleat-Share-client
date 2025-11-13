import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../component/FoodCard";
import Banner from "../component/Banner";
import Process from "../component/Process";
import { Link } from "react-router";

const Home = () => {
  const [foods, setFoods] = useState();
  console.log(foods);
  useEffect(() => {
    axios(`http://localhost:3000/latest-foods?status=${"available"}`).then(
      (data) => {
        setFoods(data.data);
      }
    );
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {foods?.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center mb-10">
        <Link to={"/all-foods"}>
          <button class="relative inline-flex items-center justify-center p-[3px] overflow-hidden font-medium text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb]">
            <span class="px-6 py-3 w-full h-full bg-[#05062d] rounded-md transition-all duration-300  hover:bg-transparent">
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
