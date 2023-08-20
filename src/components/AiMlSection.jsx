import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GiRobotGolem } from "react-icons/gi";
const AiMlSection = () => {
  return (
    <div className="w-[90vw] lg:w-[85vw] mx-auto">
      <div className="shadow-lg rounded bg-white flex justify-center items-center flex-col">
        <div className="flex justify-center lg:justify-start lg:gap-2 lg:flex-row items-center flex-col text-center py-4">
          <AiOutlineQuestionCircle size={50} className="text-[#353535]" />
          <p className="text-[#353535] tracking-wide font-bold text md py-2">
            What is the relationship between AI and ML
          </p>
        </div>
        <div>
          <GiRobotGolem size={150} className="text-[#353535]" />
        </div>
        <div className="px-20 py-2">
          <p className="text-[#353535] font-light tracking-wider text-center pb-10">
            AI and ML are interconnected fields, with ML being a subset of AI.
            AI involves creating intelligent systems for tasks requiring
            human-like intelligence, while ML focuses on algorithms and models
            that learn from data to make predictions or decisions without
            explicit programming. ML utilizes statistical techniques to analyze
            data, identify patterns, and optimize performance over time. AI
            encompasses various techniques like natural language processing and
            robotics. ML's ability to learn from data has garnered attention. In
            summary, ML is a subset of AI that enables machines to learn and
            improve without explicit programming, forming a crucial component of
            AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiMlSection;
