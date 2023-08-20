import React from "react";

const AboutUs = () => {
  return (
    <div className="w-[90vw] lg:w-[85vw] mx-auto my-10">
      <div className="shadow-lg rounded bg-white flex justify-between lg:items-center flex-col-reverse lg:flex-row ">
        <div className="px-10 py-10">
          <h1 className="text-3xl font-semibold text-[#c0c0c0]">About Us</h1>
          <p className="text-[#353535] font-light tracking-wider  py-5 text-md w-[60vw] lg:w-[30vw]">
            Helix Team is a team of Data Science students focused mainly on
            creating systems which uses Artificial Intelligence and Machine
            Learning
          </p>
        </div>
        <div className="w-full lg:w-[20vw]">
          <img
            className="w-full object-cover"
            src="./img.jfif
      "
            alt="jumbtron images"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
