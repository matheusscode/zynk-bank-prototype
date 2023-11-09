import React from "react";

interface RegisterStepsProps {
  index: number;
  active: boolean;
}

const RegisterSteps: React.FC<RegisterStepsProps> = ({ active, index }) => {
  return (
    <div className="flex items-center">
      <div
        className={` py-2 px-4 rounded-sm max-w-[500px] font-bold w-full mx-auto ${
          active
            ? "text-white bg-black scale-[1.2]"
            : "text-black bg-white scale-[1]"
        }`}
      >
        {index}
      </div>
    </div>
  );
};

export default RegisterSteps;
