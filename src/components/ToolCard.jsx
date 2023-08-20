import { AiFillTool, AiOutlineQuestionCircle } from "react-icons/ai";
import { SiExercism, SiTensorflow, SiThealgorithms } from "react-icons/si";
import { BsFillDatabaseFill } from "react-icons/bs";

const ToolCard = ({ title, dataset, algo, tool }) => {
  return (
    <div className=" py-2 flex gap-2 flex-col justify-center items-center border-b-2">
      <h1 className="text-[#353535] tracking-wide font-bold text-md">
        {title}
      </h1>
      <BsFillDatabaseFill size={30} className="text-[#353535]" />
      <p className="text-[#353535] font-light tracking-wider text-center pb-10">
        {dataset}
      </p>
      <SiThealgorithms size={30} className="text-[#353535]" />
      <p className="text-[#353535] font-light tracking-wider text-center pb-10">
        {algo}
      </p>
      <SiTensorflow size={30} className="text-[#353535]" />
      <p className="text-[#353535] font-light tracking-wider text-center pb-10">
        {tool}
      </p>
    </div>
  );
};

export default ToolCard;
