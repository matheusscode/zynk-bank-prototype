"use client";

import React from "react";
import useAccess, { RegisterAccountFormState } from "@/hooks/useAccess";
import { Layout } from "@/layout/Access";
import CustomInput from "@/src/components/common/custom-input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/src/components/ui/button";

interface RegisterAccountProps {
  formState: RegisterAccountFormState;
  setFormState: React.Dispatch<React.SetStateAction<RegisterAccountFormState>>;
}

const RegisterAccount: React.FC<RegisterAccountProps> = ({
  formState,
  setFormState,
}) => {
  const { handleShowPassword, show } = useAccess();

  const handleInputChange = (
    field: keyof RegisterAccountFormState,
    value: string
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Layout.Register title="Cadastre sua conta">
      <div className="flex gap-4 w-full">
        <CustomInput
          value={formState.firstName}
          placeholder="Insira seu nome"
          event={(field, value) => handleInputChange("firstName", value)}
          label="Nome"
          name="firstName"
          ariaLabel="first-name-data-input"
        />
        <CustomInput
          value={formState.lastName}
          placeholder="Insira seu sobrenome"
          event={(field, value) => handleInputChange("lastName", value)}
          label="Sobrenome"
          name="lastName"
          ariaLabel="last-name-data-input"
        />
      </div>
      <CustomInput
        value={formState.email}
        placeholder="Insira seu email"
        event={(field, value) => handleInputChange("email", value)}
        label="Email"
        name="email"
        ariaLabel="email-data-input"
      />
      <CustomInput
        value={formState.password}
        placeholder="Insira sua senha"
        event={(field, value) => handleInputChange("password", value)}
        label="Senha"
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
      <CustomInput
        value={formState.confirmPassword}
        placeholder="Confirmar senha"
        event={(field, value) => handleInputChange("confirmPassword", value)}
        label="Confirmar Senha"
        type={show ? "text" : "password"}
        name="confirmPassword"
        ariaLabel="confirm-password-data-input"
      />
    </Layout.Register>
  );
};

export default RegisterAccount;
