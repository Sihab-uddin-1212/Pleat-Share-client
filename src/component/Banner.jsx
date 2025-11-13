import React from "react";
import { motion } from "framer-motion";
import { FaDAndD } from "react-icons/fa";
import { ArrowRight, Search, Star } from "lucide-react";
import Marquee from 'react-fast-marquee';
import { Fade } from "react-awesome-reveal";
 

const Banner = () => {
  return (
    
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
          

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-500 font-semibold px-8 py-3 rounded-full flex items-center gap-2 mx-auto md:mx-0 shadow-lg mt-8"
            >
              View All Foods <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </Fade>

        {/* Right image */}
        <Fade direction="right" triggerOnce>
          <motion.img
            src="https://img.freepik.com/premium-vector/food-donation-concept-with-character-can-use-web-banner-infographics-hero-images-isometric_566886-5330.jpg?w=2000"
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
