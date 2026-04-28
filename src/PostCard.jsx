import React, { useState } from "react";

const PostCard = (props) => {
  const { id, userId, title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`flex flex-col justify-between p-6 rounded-xl shadow-lg border transition-all duration-300 transform hover:scale-105 text-center
        ${clicked ? "bg-pink-50 border-gray-300" : "bg-white border-transparent"} 
        hover:border-black hover:bg-pink-100 group`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-800 capitalize">
          {title}
        </h2>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {body}
        </p>
      </div>

      <div className="mt-6">
        <button
          onClick={() => setClicked(true)}
          className={`w-full py-3 rounded-md font-semibold text-white transition-all duration-300 shadow-md
            ${clicked ? "bg-[#e53e3e]" : "bg-gray-500"} 
            group-hover:brightness-125 hover:shadow-lg active:scale-95`}
        >
          {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
        </button>
      </div>
    </div>
  );
};

export default PostCard;