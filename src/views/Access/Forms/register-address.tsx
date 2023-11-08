"use client";
import CustomInput from "@/src/components/common/custom-input";
import { RegisterAddressFormState } from "@/src/hooks/useAccess";
import { Layout } from "@/src/layout/Access";
import React from "react";

interface RegisterAddressProps {
  formState: RegisterAddressFormState;
  setFormState: React.Dispatch<React.SetStateAction<RegisterAddressFormState>>;
}

const RegisterAddress: React.FC<RegisterAddressProps> = ({
  formState,
  setFormState,
}) => {
  const handleInputChange = (
    field: keyof RegisterAddressFormState,
    value: string
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Layout.Register title="Diga há nos qual é sua localização">
      <div className="flex gap-4">
        <CustomInput
          value={formState.country}
          placeholder="Insira seu pais de origiem"
          event={(field, value) => handleInputChange("country", value)}
          label="Pais"
          type="text"
          name="country"
          ariaLabel="country-data-input"
        />
        <CustomInput
          value={formState.zipCode}
          placeholder="Insira o seu CEP"
          event={(field, value) => handleInputChange("zipCode", value)}
          label="Código Postal"
          type="text"
          name="zipCode"
          ariaLabel="zip-code-data-input"
        />
      </div>
      <div className="gap-4 w-full">
        <CustomInput
          value={formState.state}
          placeholder="Insira seu estado"
          event={(field, value) => handleInputChange("state", value)}
          label="Estado"
          type="text"
          name="state"
          ariaLabel="state-data-input"
        />

        <CustomInput
          value={formState.city}
          placeholder="Insira sua cidade"
          event={(field, value) => handleInputChange("city", value)}
          label="Cidade"
          name="city"
          type="text"
          ariaLabel="city-data-input"
        />
      </div>
      <CustomInput
        value={formState.complement}
        placeholder="Complemento"
        event={(field, value) => handleInputChange("complement", value)}
        label="Complemento"
        type="text"
        name="complement"
        ariaLabel="complement-data-input"
      />
      <CustomInput
        value={formState.street}
        placeholder="Digite o nome da sua rua"
        event={(field, value) => handleInputChange("street", value)}
        label="Rua"
        type="text"
        name="street"
        ariaLabel="street-data-input"
      />
    </Layout.Register>
  );
};

export default RegisterAddress;
