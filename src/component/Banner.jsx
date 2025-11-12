import React from "react";
import { motion } from "framer-motion";
import { FaDAndD } from "react-icons/fa";
import { ArrowRight, Search, Star } from "lucide-react";
import Marquee from 'react-fast-marquee';
import { Fade } from "react-awesome-reveal";
 

const Banner = () => {
  return (
    //  <section className="relative overflow-hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-20 px-6 md:px-16">
    //   {/* Floating gradient circles */}
    //   <motion.div
    //     animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
    //     transition={{ duration: 6, repeat: Infinity }}
    //     className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"
    //   ></motion.div>

    //   <motion.div
    //     animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
    //     transition={{ duration: 8, repeat: Infinity }}
    //     className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"
    //   ></motion.div>

    //   <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
    //     {/* Left content */}
    //     <Fade direction="left" triggerOnce>
    //       <div className="max-w-xl text-center md:text-left space-y-6">
    //         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
    //           Share Food, <br /> Spread{" "}
    //           <span className="text-yellow-300">Kindness</span> 🍱
    //         </h1>

    //         <p className="text-lg md:text-xl text-white/90 leading-relaxed">
    //           Join our community of donors and volunteers helping reduce food
    //           waste and feed the hungry. Every meal matters — make yours count.
    //         </p>

    //         <motion.button
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full flex items-center gap-2 mx-auto md:mx-0 shadow-lg hover:bg-yellow-300 transition-all"
    //         >
    //           Get Started <ArrowRight className="w-5 h-5" />
    //         </motion.button>
    //       </div>
    //     </Fade>

    //     {/* Right image */}
    //     <Fade direction="right" triggerOnce>
    //       <motion.img
    //         src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hands-1238728_960_720.jpg"
    //         alt="Donate Food"
    //         className="rounded-3xl shadow-2xl w-full md:w-[450px] object-cover border border-white/20"
    //         initial={{ scale: 0.9, opacity: 0 }}
    //         animate={{ scale: 1, opacity: 1 }}
    //         transition={{ duration: 1 }}
    //       />
    //     </Fade>
    //   </div>

    //   {/* Moving text marquee */}
    //   <div className="mt-16">
    //     <Marquee speed={50} gradient={false} className="text-lg font-medium text-white/90">
    //       🌍 Together we can end hunger • 🥗 Donate surplus food • 💜 Every act of kindness counts • 
    //       🙌 Join now and make a difference • 🍛
    //     </Marquee>
    //   </div>

    //   {/* Floating stars */}
    //   <div className="absolute top-8 right-8 flex gap-1 opacity-70">
    //     {[...Array(5)].map((_, i) => (
    //       <Star key={i} size={18} className="text-yellow-300 animate-pulse" />
    //     ))}
    //   </div>
    // </section>
    //  <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-black text-white overflow-hidden rounded-b-3xl">
    //   {/* Background gradient shapes */}
    //   <motion.div
    //     className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-purple-700 to-indigo-600 opacity-40 blur-[150px] rounded-full"
    //     animate={{ scale: [1, 1.2, 1] }}
    //     transition={{ duration: 6, repeat: Infinity }}
    //   ></motion.div>
    //   <motion.div
    //     className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-pink-600 to-purple-700 opacity-40 blur-[150px] rounded-full"
    //     animate={{ scale: [1.1, 1, 1.1] }}
    //     transition={{ duration: 6, repeat: Infinity }}
    //   ></motion.div>

    //   {/* Content */}
    //   <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
    //     <motion.h1
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1 }}
    //       className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
    //     >
    //       Welcome to <span className="text-purple-400">FoodShare</span>.
    //     </motion.h1>

    //     <motion.p
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 0.5 }}
    //       className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
    //     >
    //       Find delicious meals near you or share extra food with those in need.
    //       Together, we make a difference 🍱
    //     </motion.p>

    //     {/* Search bar */}
    //     <motion.div
    //       initial={{ scale: 0.9, opacity: 0 }}
    //       animate={{ scale: 1, opacity: 1 }}
    //       transition={{ delay: 0.8, duration: 0.6 }}
    //       className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-3 w-full md:w-[500px] mx-auto shadow-lg"
    //     >
    //       <input
    //         type="text"
    //         placeholder="Search your desired food..."
    //         className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
    //       />
    //       <button className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full hover:scale-105 transition">
    //         <Search className="w-6 h-6 text-white" />
    //       </button>
    //     </motion.div>

    //     {/* Buttons */}
    //     <div className="mt-10 flex justify-center gap-4">
    //       <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-purple-500/50 transition">
    //         Find Food
    //       </button>
    //       <button className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
    //         Post Food
    //       </button>
    //     </div>
    //   </div>

    //   {/* Decorative rings (animated lines) */}
    //   <motion.div
    //     className="absolute w-[700px] h-[700px] border border-purple-700/30 rounded-full"
    //     animate={{ rotate: 360 }}
    //     transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    //   ></motion.div>
    //   <motion.div
    //     className="absolute w-[900px] h-[900px] border border-purple-700/20 rounded-full"
    //     animate={{ rotate: -360 }}
    //     transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    //   ></motion.div>
    // </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white py-20 px-6 md:px-16 rounded-b-3xl">
      {/* Floating gradient orbs */}
      <motion.div
        animate={{ y: [0, -25, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-40 h-40 bg-purple-600/40 rounded-full blur-[100px]"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 25, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-56 h-56 bg-pink-600/40 rounded-full blur-[120px]"
      ></motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left text */}
        <Fade direction="left" triggerOnce>
          <div className="max-w-xl text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Share Food, <br /> Spread{" "}
              <span className="text-purple-400">Kindness</span> 🍱
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Join our community of donors and volunteers helping reduce food
              waste and feed the hungry. Every meal matters — make yours count.
            </p>

            {/* Search bar */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-3 w-full shadow-lg mt-6"
            >
              <input
                type="text"
                placeholder="Search your desired food..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-full hover:scale-105 transition">
                <Search className="w-6 h-6 text-white" />
              </button>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 font-semibold px-8 py-3 rounded-full flex items-center gap-2 mx-auto md:mx-0 shadow-lg mt-8"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </Fade>

        {/* Right image */}
        <Fade direction="right" triggerOnce>
          <motion.img
            src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hands-1238728_960_720.jpg"
            alt="Donate Food"
            className="rounded-3xl shadow-2xl w-full md:w-[450px] object-cover border border-white/20 hover:scale-105 transition-transform duration-500"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </Fade>
      </div>

      {/* Moving text marquee */}
      <div className="mt-16">
        <Marquee speed={50} gradient={false} className="text-lg font-medium text-white/90">
          🌍 Together we can end hunger • 🥗 Donate surplus food • 💜 Every act of kindness counts • 🙌 Join now and make a difference • 🍛
        </Marquee>
      </div>

      {/* Floating stars */}
      <div className="absolute top-8 right-8 flex gap-1 opacity-70">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-300 animate-pulse" />
        ))}
      </div>
    </section>
  );
};

export default Banner;
