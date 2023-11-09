
import React from "react";
import RegisterAccount from "../views/Access/Forms/register-account";
import RegisterDetails from "../views/Access/Forms/register-details";
import RegisterAddress from "../views/Access/Forms/register-address";

export interface LoginFormState {
  cpf: string;
  password: string;
}

export interface RegisterAccountFormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterDetailsFormState {
  gender: string;
  birthday: string;
  cpf: string;
  phone: string;
  isCompany: boolean;
  isPersonal: boolean;
  recuperationEmail: string;
}

export interface RegisterAddressFormState {
  country: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
  complement: string;
  houseNumber: string;
}

export interface RegisterAvatarFormState {
  avatar: string;
}

export interface RegisterEmailConfirmation {}

export interface SetFormStateAction {
  (prevState: RegisterAccountFormState): void;
}

export default function useAccess() {
  const [isRegister, setIsRegister] = React.useState<boolean>(false);
  const [loginFormState, setLoginFormState] = React.useState<LoginFormState>({
    cpf: "",
    password: "",
  });
  const [accountFormState, setAccountFormState] =
    React.useState<RegisterAccountFormState>({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  const [personalDetailsFormState, setPersonalDetailsFormState] =
    React.useState<RegisterDetailsFormState>({
      birthday: "",
      cpf: "",
      gender: "",
      isCompany: false,
      isPersonal: false,
      phone: "",
      recuperationEmail: "",
    });
  const [addressFormState, setAddressFormState] =
    React.useState<RegisterAddressFormState>({
      city: "",
      country: "",
      complement: "",
      houseNumber: "",
      state: "",
      street: "",
      zipCode: "",
    });
  const [theme, setTheme] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [show, setShow] = React.useState<boolean>(false);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const handleOpenInputFile = () => {
    fileInputRef.current?.click();
  };

  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleGoToLogin = () => {
    setIsRegister(false);
    setStep(1);
  };

  const handleGoToRegister = () => {
    setIsRegister(true);
  };

  const steps = [1, 2, 3];

  const getCompStep = () => {
    switch (step) {
      case 1:
        return (
          <RegisterAccount
            setFormState={setAccountFormState}
            formState={accountFormState}
          />
        );
      case 2:
        return (
          <RegisterDetails
            setFormState={setPersonalDetailsFormState}
            formState={personalDetailsFormState}
          />
        );
      case 3:
        return (
          <RegisterAddress
            setFormState={setAddressFormState}
            formState={addressFormState}
          />
        );
      default:
        return (
          <RegisterAccount
            setFormState={setAccountFormState}
            formState={accountFormState}
          />
        );
    }
  };
  
  const handleStepBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { cpf, password } = loginFormState;

    if (cpf.trim() === "" || password.trim() === "") {
      console.error("Por favor, preencha CPF e senha.");
      return;
    }
  };

  const handleRegister = () => {};

  const handleStepNext = () => {
    let isCurrentStepValid = false;

    switch (step) {
      case 1:
        isCurrentStepValid = Object.values(accountFormState).every(
          (value) => value !== ""
        );
        break;
      case 2:
        isCurrentStepValid = Object.values(personalDetailsFormState).every(
          (value) => value !== "" || value !== null
        );
        break;
      case 3:
        isCurrentStepValid = Object.values(addressFormState).every(
          (value) => value !== ""
        );
        break;
      default:
        break;
    }

    if (isCurrentStepValid && step < 3) {
      setStep(step + 1);
    } else {
      console.error("Por favor, preencha todos os campos antes de avançar.");
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handleStepBack();
      } else if (event.key === "ArrowRight") {
        handleStepNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [step]);

  return {
    handleFileInputChange,
    handleOpenInputFile,
    handleGoToRegister,
    handleShowPassword,
    handleGoToLogin,
    handleStepBack,
    handleStepNext,
    handleLogin,
    setPersonalDetailsFormState,
    setAccountFormState,
    setAddressFormState,
    setLoginFormState,
    setSelectedFile,
    setIsRegister,
    selectedFile,
    setShow,
    setStep,
    setTheme,
    steps,
    step,
    accountFormState,
    addressFormState,
    personalDetailsFormState,
    loginFormState,
    fileInputRef,
    isRegister,
    show,
    theme,
    getCompStep,
  };
}
