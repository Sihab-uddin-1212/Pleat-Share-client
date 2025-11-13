import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const FoodCard = ({food}) => {
    const { donator_name, food_image,food_name,food_quantity, _id,pickup_location,status,expire_date} = food
    return (
    
     <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-700/30 border border-white/10 text-white"
    >
      {/* Image */}
      <figure className="h-52 sm:h-48 w-full  overflow-hidden relative">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {/* Status badge */}
        <div className="absolute top-3 right-3 bg-purple-600/80 text-xs font-semibold px-3 py-1 rounded-full">
          {status}
        </div>
      </figure>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold tracking-wide text-white">
          {food_name}
        </h2>

        <div className="flex flex-wrap gap-2 text-sm text-gray-300">
          <span className="bg-white/10 px-3 py-1 rounded-full">
            Quantity: {food_quantity}
          </span>
          <span className="bg-white/10 px-3 py-1 rounded-full">
            {donator_name}
          </span>
        </div>

        <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 pt-2 gap-y-1">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span>{pickup_location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>{new Date(expire_date).toLocaleDateString()}</span>
          </div>
        </div>

        <Link
          to={`/food-details/${_id}`}
          className="block w-full mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-pink-600 hover:to-purple-600 text-white text-center py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg"
        >
          View Details
        </Link>
      </div>
    </motion.div>
    );
};

export default FoodCard;