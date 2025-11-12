import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../component/FoodCard';
import Banner from '../component/Banner';
import Process from '../component/Process';

const Home = () => {
    const [foods,setFoods] = useState()
console.log(foods)
    useEffect(()=>{
        axios(`http://localhost:3000/latest-foods?status=${"available"}`)
        .then(data =>{
            setFoods(data.data)
        })
    },[])

    return (
        
        
        <div>
            <Banner></Banner>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {foods?.map((food) => (
            <FoodCard  key={food._id} food={food}></FoodCard>
         ))}
      </div>
      <Process></Process>
        </div>
    );
};

export default Home;