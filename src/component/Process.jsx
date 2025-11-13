import React from 'react';
import { motion } from "framer-motion";
import { Search, ShoppingBag, Upload } from 'lucide-react';
const steps = [
  {
    id: 1,
    title: "Post Food",
    icon: <Upload className="w-10 h-10 text-purple-500" />,
    description:
      "Login to your account, click your profile icon on the top-right navbar, and select “Add Food” to share surplus meals with the community.",
    image:
      "https://i.ibb.co.com/zWHKTmP7/download.webp",
  },
  {
    id: 2,
    title: "Find Food",
    icon: <Search className="w-10 h-10 text-pink-500" />,
    description:
      "Go to the Find Food section, use the search bar to explore meals you desire, and view their details instantly.",
    image:
      "https://i.ibb.co.com/jZxKD8CX/OIP.webp",
  },
  {
    id: 3,
    title: "Collect Food",
    icon: <ShoppingBag className="w-10 h-10 text-red-500" />,
    description:
      "Open the food details page, click “Request Food,” and once approved, collect it from the donor’s shared location.",
    image:
      "https://i.ibb.co.com/k25zq0Qn/OIP-1.webp",
  },
];
 

const Process = () => {
    return (
      <div>
         <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-purple-50 via-pink-50 to-white text-gray-800 lg:max-w-10/12 mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          How It <span className="text-purple-600">Works</span> 🍴
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to share, find, and collect food easily.
        </p>
      </div>

      <div className="relative flex flex-col space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-8 relative ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={step.image}
                alt={step.title}
                className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Divider line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-purple-200 -translate-x-1/2" />

            {/* Card */}
            <div className="md:w-1/2 bg-white/80 backdrop-blur-md border border-purple-100 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 rounded-full p-2 shadow-md">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-4 text-sm text-gray-400">Step {step.id}</div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>

  <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white py-20 px-6 md:px-16 text-center">
  
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 text-transparent bg-clip-text mb-6">
      Our Mission
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed">
      We believe that food has the power to bring hope and kindness. Our mission is to build a community where every meal shared means less hunger, less waste, and more love for one another.
    </p>
  </div>

  
  <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 transition w-64">
      <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">12K+</h3>
      <p className="text-gray-300">People Helped</p>
    </div>
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 transition w-64">
      <h3 className="text-4xl md:text-5xl font-bold text-pink-300 mb-2">50K+</h3>
      <p className="text-gray-300">Meals Shared</p>
    </div>
    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-md hover:bg-white/20 transition w-64">
      <h3 className="text-4xl md:text-5xl font-bold text-purple-300 mb-2">8K+</h3>
      <p className="text-gray-300">Food Saved</p>
    </div>
  </div>
</section>



      </div>
 
    );
};

export default Process;