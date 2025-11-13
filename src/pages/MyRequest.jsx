import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
 

const MyRequest = () => {
    const {user,loading,setLoading}=use(AuthContext)
    const [myRequest,setmyRequest] = useState()
    
    const email = user?.email;
    console.log(email)

    useEffect(()=>{
        if (!email) return;
        fetch(`https://plate-share-server-ten.vercel.app/my-request?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
          setmyRequest(data)
          setLoading(false)
        })

    },[email])

    return (
       <div className="overflow-x-auto p-6">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        📋 My Food Requests
      </h2>

      <table className="min-w-full border-separate border-spacing-y-3">
        <thead>
          <tr className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 text-left">
            <th className="py-3 px-4 rounded-l-xl">User</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Reason</th>
            <th className="py-3 px-4">Contact Info</th>
            <th className="py-3 px-4 rounded-r-xl">Status</th>
          </tr>
        </thead>
        {myRequest ?
         <tbody>
          {myRequest.map((req, i) => (
            <tr
              key={i}
              className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
            >
              {/* User photo + name */}
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  src={req.photoURL}
                  alt={req.user_name}
                  className="w-10 h-10 rounded-full border border-gray-200 object-cover"
                />
                <span className="font-semibold text-gray-800">
                  {req.user_name}
                </span>
              </td>

              <td className="py-3 px-4 text-gray-600">{req.user_email}</td>
              <td className="py-3 px-4 text-gray-600">{req.location}</td>
              <td className="py-3 px-4 text-gray-700 italic">{req.reason}</td>
              <td className="py-3 px-4 text-gray-700">{req.contract_Info}</td>

              {/* Status badge */}
              <td className="py-3 px-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {req.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
          :<></> }

       
      </table>
    </div>
    );
};

export default MyRequest;
