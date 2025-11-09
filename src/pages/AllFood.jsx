import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodDetails from '../component/FoodCard';
import FoodCard from '../component/FoodCard';

const AllFood = () => {

    const [foods,setFoods] = useState()
    // console.log(foods)

    useEffect(()=>{
        axios('http://localhost:3000/foods')
        .then(data => {
            setFoods(data.data)
        })
    },[])

    return (
        <div>
             <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {foods?.map((food) => (
            <FoodCard  key={food._id} food={food}></FoodCard>
         ))}
      </div>
           
        </div>
    );
};

export default AllFood;