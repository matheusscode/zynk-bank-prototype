"use client";

import React from "react";
import Login from "./Forms/login";
import useAccess from "@/hooks/useAccess";
import { Button } from "@/ui/button";
import RegisterSteps from "./Steps/register-steps";

interface AccessFormProps {}

const AccessForm: React.FC<AccessFormProps> = ({}) => {
  const {
    getCompStep,
    step,
    steps,
    isRegister,
    handleGoToLogin,
    handleGoToRegister,
    handleStepBack,
    handleStepNext,
  } = useAccess();

  const registerFormFooterLinks = [
    {
      id: 1,
      text: "Voltar",
      event: handleStepBack,
    },
    {
      id: 2,
      text: step === 3 ? "Enviar" : "Próximo",
      event: handleStepNext,
    },
  ];

  const loginFormFooterLinks = [
    {
      id: 1,
      text: "Esqueceu a senha?",
      event: handleGoToRegister,
    },
    {
      id: 2,
      text: "Não sou cliente",
      event: handleGoToRegister,
    },
  ];

  return (
    <div className="relative flex justify-center items-center overflow-hidden transition-all h-full w-[50%]">
      <div
        className={`absolute flex flex-col justify-center items-center transition-all w-full h-full ${
          isRegister
            ? "opacity-0 translate-x-[-1200px]"
            : "opacity-100 translate-x-0"
        }`}
      >
        <Login />
        <div className="flex w-full px-16 mb-8 flex-end gap-8">
          {loginFormFooterLinks.map((link) => (
            <Button
              className="w-full text-center py-[1.8rem] px-4 rounded-lg shadow-md font-medium hover:bg-neutral-800"
              key={link.id}
              onClick={link.event}
            >
              {link.text}
            </Button>
          ))}
        </div>
      </div>
      <div
        className={`absolute flex w-full h-full justify-center items-center transition-all flex-col  ${
          isRegister
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[1200px]"
        }`}
      >
        <div className="relative w-full h-full flex flex-col justify-center transition-all ">
          <div className="flex w-full gap-4 justify-center items-center">
            {steps.map((item: any) => (
              <RegisterSteps key={item} index={item} active={step === item} />
            ))}
          </div>

          {getCompStep()}

          <div className="flex w-full justify-center items-center gap-4 max-w-[550px] mx-auto my-0 bottom-[-40px]">
            {registerFormFooterLinks.map((button) => (
              <Button
                className="w-full text-center py-[1.8rem] px-4 rounded-lg shadow-md font-medium bg-neutral-950 hover:bg-neutral-800"
                key={button.id}
                onClick={button.event}
              >
                <p className="text-md font-bold">{button.text}</p>
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full p-8 gap-4 flex justify-center">
          <Button
            className="w-full text-center py-[1.8rem] px-[1rem] mb-6 rounded-lg font-medium text-neutral-950 bg-transparent max-w-[450px] my-0 mx-auto shadow-none hover:bg-neutral-100"
            onClick={handleGoToLogin}
          >
            Já tem conta? 
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessForm;
