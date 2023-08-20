import React from "react";
import { AiFillBulb, AiOutlineQuestionCircle } from "react-icons/ai";
const StepComponent = ({ step, paragraphy }) => {
  return (
    <div className="px-20 py-2 shadow my-3 lg:w-[40vw] w-[80vw] hover:bg-[#f1f1f1] transition-all">
      <div className=" py-2 flex gap-2">
        <AiFillBulb size={25} className="text-[#353535]" />
        <p className="text-[#353535] tracking-wide font-semibold">{step}</p>
      </div>

      <p className="text-[#353535] font-light tracking-wider text-center pb-10">
        {paragraphy}
      </p>
    </div>
  );
};

export default StepComponent;
