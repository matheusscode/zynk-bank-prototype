"use client";

import React from "react";
import { Layout } from "@/src/layout/Access";
import CustomInput from "@/src/components/common/custom-input";
import useAccess, { LoginFormState } from "@/src/hooks/useAccess";
import { Button } from "@/ui/button";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const { handleShowPassword, show, loginFormState, setLoginFormState } =
    useAccess();

  const handleInputChange = (field: keyof LoginFormState, value: string) => {
    setLoginFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Layout.Login title="Accessar conta">
      <CustomInput
        event={(field, value) => handleInputChange("cpf", value)}
        placeholder="Insira seu CPF"
        ariaLabel="cpf-data-input"
        value={loginFormState.cpf}
        label="CPF"
        name="cpf"
      />
      <CustomInput
        value={loginFormState.password}
        placeholder="Insira sua senha"
        event={(field, value) => handleInputChange("password", value)}
        label="Password"
        type={show ? "text" : "password"}
        name="password"
        ariaLabel="password-data-input"
        iconRight={
          <Button
            onClick={handleShowPassword}
            className="bg-transparent text-lg text-neutral-700 hover:bg-transparent border-none outline-none shadow-none"
          >
            {show ? <Eye /> : <EyeOff />}
          </Button>
        }
      />
      <Button
        className="flex gap-2 items-center transition-all px-[1.2rem] py-[1.8rem] hover:gap-[1.2rem]"
        onClick={handleShowPassword}
        type="submit"
      >
        <span className="text-md font-bold">Continuar</span>
        <ArrowRight />
      </Button>
    </Layout.Login>
  );
};

export default Login;
