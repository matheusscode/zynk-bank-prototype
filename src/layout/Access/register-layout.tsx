import React from "react";

export default function RegisterLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <form
      className="max-w-[600px] h-[500px] px-8 pb-0 mt-[6rem] mx-auto w-full flex flex-col gap-8"
      action=""
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </form>
  );
}
