import React from "react";
import { TypeAnimation } from "react-type-animation";
const Jumbotron = () => {
  return (
    <div className="h-[90vh] w-[100vw] relative">
      {/* <img
        className="w-full h-full object-cover"
        src="./img.jfif
      "
        alt="jumbtron images"
      /> */}
      <video
        src="./vid.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
      ></video>
      <div className="absolute bg-black opacity-70 w-full h-full top-0 right-0 text-white">
        <div className="h-full w-[80vw] mx-auto flex justify-center items-center flex-col text-center">
          <h1 className="text-white font-bold tracking-wide text-3xl">
            Nebula Helix Team <br />
            <span className="text-md font-light opacity-80">
              Answering All Questions About A.I
            </span>
          </h1>
          <TypeAnimation
            sequence={[
              "What is the relationship between AI and ML",
              100,
              "Explain step by step how I can set up a system with training data and testing data.",
              100,
              " Give me three simple and easy to understand ML exercises and the tools involved",
              100,
            ]}
            className="tracking-wide text-white text-lg font-light"
            wrapper="p"
            speed={50}
            deletionSpeed={50}
            // style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
