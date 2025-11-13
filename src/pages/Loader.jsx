import React from 'react';

const Loader = () => {
     const letters = "Generating".split("");
    return (
        <div>
                <div className="relative flex items-center justify-center w-44 h-44 rounded-full text-white font-light text-lg select-none">
      {/* Rotating ring */}
      <div
        className="absolute inset-0 rounded-full animate-[spin_2s_linear_infinite]"
        style={{
          boxShadow:
            "0 10px 20px 0 #fff inset, 0 20px 30px 0 #ad5fff inset, 0 60px 60px 0 #471eec inset",
        }}
      ></div>

      {/* Animated letters */}
      {letters.map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-40"
          style={{
            animation: "letter 2s infinite",
            animationDelay: `${i * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}

      {/* Custom keyframes via inline CSS */}
      <style>{`
        @keyframes letter {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          20% { opacity: 1; transform: scale(1.15); }
          40% { opacity: 0.7; transform: translateY(0); }
        }
      `}</style>
    </div>
        </div>
    );
};

export default Loader;