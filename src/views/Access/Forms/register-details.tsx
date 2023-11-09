import { RegisterDetailsFormState } from "@/src/hooks/useAccess";
import { Layout } from "@/layout/Access";
import React from "react";
import CustomInput from "@/src/components/common/custom-input";

interface RegisterDetailsProps {
  formState: RegisterDetailsFormState;
  setFormState: React.Dispatch<
    React.SetStateAction<RegisterDetailsFormState>
  >;
}

const RegisterDetails: React.FC<RegisterDetailsProps> = ({
  formState,
  setFormState,
}) => {
  const handleInputChange = (
    field: keyof RegisterDetailsFormState,
    value: string
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Layout.Register title="Nós informe alguns dados pessoais">
      <div className="flex gap-4 w-full">
        <CustomInput
          value={formState.cpf}
          placeholder="Insira seu CPF"
          event={(field, value) => handleInputChange("cpf", value)}
          label="CPF"
          name="cpf"
          type="text"
          ariaLabel="cpf-data-input"
        />
        <CustomInput
          value={formState.phone}
          placeholder="Insira seu telefone"
          event={(field, value) => handleInputChange("phone", value)}
          label="Telefone"
          name="phone"
          type="text"
          ariaLabel="phone-data-input"
        />
      </div>
      <CustomInput
        value={formState.birthday}
        placeholder="Insira sua data de nascimento"
        event={(field, value) => handleInputChange("birthday", value)}
        label="Data de Nascimento"
        name="birthday"
        type="text"
        ariaLabel="birthday-data-input"
        min="1940-01-01"
      />
      <CustomInput
        value={formState.recuperationEmail}
        placeholder="Insira um email para"
        event={(field, value) => handleInputChange("recuperationEmail", value)}
        label="Email de recuperação"
        name="recuperationEmail"
        type="text"
        ariaLabel="recuperation-email-data-input"
      />
    </Layout.Register>
  );
};

export default RegisterDetails;
