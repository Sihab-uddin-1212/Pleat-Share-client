import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Loader from "./Loader";
 

const MyFoods = () => {
  const { user } = use(AuthContext);
  const modalRef = useRef();

  const [loading, setLoading] = useState(true);
  const [myFood, setMyFood] = useState([]);
  const [reFetch,setReFetch] = useState(false)
  const email = user?.email;
  // console.log(email);

  useEffect(() => {
    if (!email) return;
    fetch(`https://plate-share-server-ten.vercel.app/my-food?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyFood(data);
        setLoading(false);

      });
  }, [email,reFetch]);

  const handleDeleteFood = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plate-share-server-ten.vercel.app/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your bid has been deleted.",
                icon: "success",
              });

              const remainingBids = myFood.filter((food) => food._id !== _id);
              setMyFood(remainingBids);
            }
          });
      }
    });
  };

  const hendleModalRequest = () => {
    modalRef.current.showModal();
  };

  const hendelRequest = (e, _id) => {
    e.preventDefault();
     
    // console.log(_id);
    const details = {
      food_name: e.target.name.value,
      pickup_location: e.target.location.value,
      food_quantity: e.target.quantity.value,
      food_image: e.target.food_img.value,
      expire_date: e.target.date.value,
    };
    // console.log(details);

    fetch(`https://plate-share-server-ten.vercel.app/foods/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully  updated!");
        // console.log(data);
        setReFetch(!reFetch)
      })
      .catch((err) => {
        // console.log(err);
      });

    modalRef.current.close();
  };

  if (loading) {
    return<Loader></Loader>   ;
  }

  return (
    <div className="overflow-x-auto bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        My Donated Foods
      </h2>

      <table className="table w-full">
        <thead className="bg-purple-600 text-white text-sm uppercase tracking-wider">
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Donator</th>
            <th>Quantity</th>
            <th>Pickup Location</th>
            <th>Expire Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {myFood.map((food, index) => (
            <tr
              key={food._id}
              className="hover:bg-purple-100 transition duration-200"
            >
              <td>{index + 1}</td>

              {/* Food */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={food.food_image} alt={food.food_name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      {food.food_name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {food.food_quantity}
                    </div>
                  </div>
                </div>
              </td>

              {/* Donator */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-circle w-10 h-10">
                      <img src={food.donator_image} alt={food.donator_name} />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">
                      {food.donator_name}
                    </p>
                    <p className="text-xs text-gray-500">{food.email}</p>
                  </div>
                </div>
              </td>

              {/* Quantity */}
              <td className="text-gray-700">{food.food_quantity}</td>

              {/* Pickup location */}
              <td className="text-gray-700">{food.pickup_location}</td>

              {/* Expire date */}
              <td className="text-gray-600">
                {new Date(food.expire_date).toLocaleString("en-BD", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </td>

              {/* Status */}
              <td>
                <span
                  className={`badge ${
                    food.status === "available"
                      ? "badge-success"
                      : food.status === "pending"
                      ? "badge-warning"
                      : "badge-error"
                  } text-white px-3 py-2`}
                >
                  {food.status}
                </span>
              </td>

              {/* Action buttons */}
              <td className="space-x-2">
                <button
                  onClick={() => handleDeleteFood(food._id)}
                  className="btn btn-sm bg-rose-500 hover:bg-rose-600 text-white rounded-lg"
                >
                  Delete
                </button>
                <div>
                  <button
                    //   onClick={() => handleUpdate(food._id)}
                    onClick={hendleModalRequest}
                    className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg"
                  >
                    Update
                  </button>
               

                  <dialog
                    ref={modalRef}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <div>
                        <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
                          <div className="card-body p-6 relative">
                            <h2 className="text-2xl font-bold text-center mb-6">
                              UpDate Your data
                            </h2>
                            <form
                              
                              onSubmit={(e) => hendelRequest(e, food._id)}
                              className="space-y-4"
                            >
                              <div>
                                <label className="label font-medium">
                                  Food Name
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  required
                                  defaultValue={food.donator_name}
                                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                  placeholder="Food name"
                                />
                              </div>

                              {/* Location*/}
                              <div>
                                <label className="label font-medium">
                                  Location
                                </label>

                                <input
                                  type="text"
                                  name="location"
                                  required
                                  defaultValue={food.pickup_location}
                                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                  placeholder="Location"
                                />
                              </div>
                              <div>
                                <label className="label font-medium">
                                  Quantity
                                </label>

                                <input
                                   type="number"
                                   min="1"
                                  name="quantity"
                                  required
                                  defaultValue={food.food_quantity}
                                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                  placeholder="Food Quantity"
                                />
                              </div>

                              {/* Description Textarea */}
                              <div>
                                <label className="label font-medium">
                                  Expire date
                                </label>
                                <textarea
                                  name="date"
                                  required
                                  defaultValue={food.expire_date}
                                  className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200  "
                                  placeholder="expire_date"
                                ></textarea>
                              </div>

                              {/* Thumbnail URL */}
                              <div>
                                <label className="label font-medium">
                                  Food Url
                                </label>
                                <input
                                  type="url"
                                  name="food_img"
                                  required
                                  defaultValue={food.food_image}
                                  className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                                  placeholder="https://example.com/image.jpg"
                                />
                              </div>

                              {/* Submit Button */}
                              <button
                                // onClick={(e) => hendelRequest(e,food._id)}
                                type="submit"
                                className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
                              >
                                Update
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoods;
