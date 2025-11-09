import axios from "axios";
import React, { use, useEffect, useRef, useState } from "react";
import { BiCalendar, BiMapPin, BiUser } from "react-icons/bi";
import { FaUtensils } from "react-icons/fa";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { AuthContext } from "../Auth/AuthContext";

const FoodDetails = () => {
    const {user} = use(AuthContext)
    console.log(user)
  const { id } = useParams();
  const [food, setFood] = useState();
  const [loading, setLoading] = useState(true);
  const modalRef = useRef(null);
  console.log({ food });

  useEffect(() => {
    axios(`http://localhost:3000/foods/${id}`).then((data) => {
      setFood(data?.data);
      setLoading(false);
    });
  }, [id]);

  const hendleModalRequest = () => {
    modalRef.current.showModal();
  };

  const hendelRequest = (e) =>{
    e.preventDefault()
    const details ={
        location:e.target.location.value,
        reason:e.target.cause.value,
        contract_Info:e.target.Contract.value,
        user_name:user.displayName,
        user_email:user.email,
        photoURL:user.photoURL,
        foodId:food._id,
        donar_email:food.email
      
    }
    console.log(details)



 modalRef.current.close();;
  }

  if (loading) {
    return <p>Loding</p>;
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 rounded-3xl p-[2px] shadow-xl mt-10"
      >
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 flex flex-col md:flex-row gap-8">
          {/* Left side - Food Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-1 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={food.food_image}
              alt={food.food_name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right side - Food Details */}
          <div className="flex-1 space-y-5">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {food.food_name}
            </h2>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="flex items-center gap-2">
                <FaUtensils className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Quantity:</span>{" "}
                {food.food_quantity}
              </p>
              <p className="flex items-center gap-2">
                <BiMapPin className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Pickup Location:</span>{" "}
                {food.pickup_location}
              </p>
              <p className="flex items-center gap-2">
                <BiCalendar className="w-5 h-5 text-purple-600" />
                <span className="font-semibold">Expires On:</span>{" "}
                {new Date(food.expire_date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>

            {/* Donator Info */}
            <div className="border-t border-gray-200 pt-5">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BiUser className="w-5 h-5 text-purple-600" /> Donator Info
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={food.donator_image}
                  alt={food.donator_name}
                  className="w-14 h-14 rounded-full border-2 border-purple-500 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {food.donator_name}
                  </p>
                  <p className="text-sm text-gray-500">Verified Donator</p>
                </div>
              </div>
            </div>

            {/* Request Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              // onClick={handleRequestFood}
            >
              Request Food
            </motion.button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div>
              <button className="btn" onClick={hendleModalRequest}>
                open modal
              </button>
              <dialog
                ref={modalRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  {/* form  */}
                  <form onSubmit={hendelRequest}>
                    <div>
                      <label className="label font-medium">Location</label>

                      <input
                        type="text"
                        name="location"
                        required
                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Location"
                      />
                    </div>
                   
                    {/* Description Textarea */}
                    <div>
                      <label className="label font-medium">Why Need Food</label>
                      <textarea
                        name="cause"
                        required
                        className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200  "
                        placeholder="Why Need Food"
                      ></textarea>
                    </div>
                     <div>
                      <label className="label font-medium">Contract Number</label>

                      <input
                        type="text"
                        
                        name="Contract"
                        required
                        className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                        placeholder="Contract Number"
                      />
                    </div>
                    <button className="btn">Request submit</button>

                  </form>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FoodDetails;
