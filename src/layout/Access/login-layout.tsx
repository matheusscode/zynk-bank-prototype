import useAccess from "@/src/hooks/useAccess";
import { Form, FormControl, FormField } from "@/ui/form";
import React from "react";

export default function LoginLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { handleLogin } = useAccess();

  return (
    <div className="flex items-center justify-between w-full flex-col transition-all">
      <form
        className="max-w-[600px] w-full h-[650px] py-16 px-8 mt-[12rem] flex flex-col gap-12"
        action=""
        onSubmit={() => handleLogin}
      >
        <h1 className="text-2xl font-bold text-neutral-800 mb-[1rem]">
          {title}
        </h1>
        {children}
      </form>
    </div>
  );
}
