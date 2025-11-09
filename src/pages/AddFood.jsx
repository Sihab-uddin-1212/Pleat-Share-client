import React, { use } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthContext';

const AddFood = () => {

  const { user } = use(AuthContext)
  console.log(user)


  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      food_name: e.target.name.value,
      pickup_location: e.target.location.value,
      food_quantity:e.target.quantity.value,
      food_image: e.target.food_img.value,
      expire_date:e.target.date.value,
      status:'available',
      email: user.email,
      donator_name:user.displayName,
      donator_image:user.photoURL
    }
    console.log(formData)

    fetch('http://localhost:3000/foods', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data=> {
      toast.success("Successfully added!")
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
   

  }

 

    return (
        <div>
             <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
        <form 
        onSubmit={handleSubmit}
         className="space-y-4">
         
          <div>
            <label className="label font-medium">Food Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Food name"
            />
          </div>

          {/* Location*/}
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
          <div>
            <label className="label font-medium">Quantity</label>
             
                <input
              type="text"
              name="quantity"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Food Quantity"
            />
              
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Expire date</label>
            <textarea
              name="date"
              required
              
             className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200  "
              placeholder="expire_date"
            ></textarea>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Food Url</label>
            <input
              type="url"
              name="food_img"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add Food 
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddFood;