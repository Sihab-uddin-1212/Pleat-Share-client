import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodDetails from "../component/FoodCard";
import FoodCard from "../component/FoodCard";
import Loader from "./Loader";

const AllFood = () => {
  const { loading, setLoading } = useState(true);

  const [foods, setFoods] = useState();
  // console.log(foods)

  useEffect(() => {
    axios(
      `https://plate-share-server-ten.vercel.app/foods?status=${"available"}`
    ).then((data) => {
      const shortData = data?.data.sort(
        (a, b) => b.food_quantity - a.food_quantity
      );
      setFoods(shortData);
      // console.log(shortData)
    });
  }, []);

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <div className="relative flex flex-col items-center my-16 text-center">
            <span className="uppercase tracking-widest text-sm text-amber-400 font-semibold mb-2">
              Available Now
            </span>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-amber-200 to-purple-300 drop-shadow-md">
              Available <span className="text-amber-300">Foods</span>
            </h2>
            <div className="mt-3 w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 opacity-70"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 max-w-10/12 mx-auto">
            {foods?.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllFood;
