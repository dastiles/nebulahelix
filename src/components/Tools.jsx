import { AiFillTool, AiOutlineQuestionCircle } from "react-icons/ai";
import { SiExercism, SiTensorflow, SiThealgorithms } from "react-icons/si";
import { BsFillDatabaseFill } from "react-icons/bs";
import ToolCard from "./ToolCard";

const Tools = () => {
  return (
    <div className="w-[90vw] lg:w-[85vw] mx-auto">
      <div className="shadow-lg rounded bg-white flex justify-center items-center flex-col">
        <div className="flex justify-center lg:justify-start lg:gap-2 lg:flex-row items-center flex-col text-center py-4">
          <AiOutlineQuestionCircle size={50} className="text-[#353535]" />
          <p className="text-[#353535] tracking-wide font-bold text md py-2">
            Give me three simple and easy to understand ML exercises and the
            tools involved
          </p>
        </div>
        <div>
          <SiExercism size={150} className="text-[#353535]" />
        </div>
        <div className="px-20 py-2  my-3 lg:w-[40vw] w-[80vw]  transition-all flex flex-col justify-center items-center">
          <ToolCard
            title="Email Spam Classification"
            dataset="Dataset: A collection of labeled emails (spam or non-spam)."
            algo="ML Algorithm: Naive Bayes Classifier."
            tool="Tools: Python programming language with libraries like scikit-learn or
                      TensorFlow."
          />
          <ToolCard
            title="Iris Flower Species Classification"
            dataset="Dataset: Iris flower measurements (sepal length, sepal width, petal length, petal width) with corresponding species labels."
            algo="ML Algorithm: Support Vector Machines (SVM)."
            tool="Tools: Python with scikit-learn library."
          />
          <ToolCard
            title="House Price Prediction"
            dataset="Dataset: Historical house sale records with features like the number of bedrooms, square footage, location, etc., along with their corresponding prices."
            algo="ML Algorithm: Linear Regression."
            tool="Tools: Python with libraries like scikit-learn or TensorFlow."
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
