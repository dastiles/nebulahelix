import React from "react";
import { GiFootsteps } from "react-icons/gi";
import StepComponent from "./StepComponent";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const StepSection = () => {
  return (
    <div className="w-[90vw] lg:w-[85vw] mx-auto my-10">
      <div className="shadow-lg rounded bg-white flex justify-center items-center flex-col">
        <div className="flex justify-center lg:justify-start lg:gap-2 lg:flex-row items-center flex-col text-center py-4">
          <AiOutlineQuestionCircle size={50} className="text-[#353535]" />
          <p className="text-[#353535] tracking-wide font-bold text-md py-2">
            Explain step by step how I can set up a system with training data
            and testing data.
          </p>
        </div>
        <div>
          <GiFootsteps size={150} className="text-[#353535]" />
        </div>
        <StepComponent
          step="Define the Problem"
          paragraphy="Clearly understand the problem you want to solve using machine learning. Identify the goal, the type of data you have, and the expected outcome."
        />
        <StepComponent
          step="Gather and Prepare Data"
          paragraphy="Collect relevant data that is representative of the problem you want to solve. Preprocess the data by cleaning, transforming, and normalizing it to make it suitable for training."
        />
        <StepComponent
          step="Split the Data"
          paragraphy="Divide the dataset into two parts: training data and testing data. Typically, the majority of the data (around 70-80%) is used for training, while the remaining portion is reserved for testing the trained model's performance."
        />
        <StepComponent
          step="Select an ML Algorithm"
          paragraphy="Choose an appropriate ML algorithm based on your problem type, such as classification, regression, clustering, or recommendation. The choice of algorithm depends on the nature of your data and the desired outcome."
        />
        <StepComponent
          step="Train the Model"
          paragraphy="Feed the training data into the selected ML algorithm. The algorithm will learn patterns and relationships within the data to create a model that can make predictions or decisions."
        />
        <StepComponent
          step="Evaluate the Model"
          paragraphy="Use the testing data to evaluate the performance of the trained model. Measure relevant metrics such as accuracy, precision, recall, or mean squared error to assess how well the model generalizes to unseen data."
        />
        <StepComponent
          step="Fine-tune and Iterate"
          paragraphy="Analyze the model's performance and make necessary adjustments. This may involve refining the algorithm, changing hyperparameters, or exploring different feature engineering techniques. Iterate this process until you achieve satisfactory results."
        />
      </div>
    </div>
  );
};

export default StepSection;
