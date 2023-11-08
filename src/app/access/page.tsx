import NextImage from "next/image";
import backdrop from "@/public/credit-card-bg.jpg";

import AccessForm from "@/src/views/Access";

export default function Access() {
  return (
    <main className="flex w-full h-screen overflow-hidden">
      <div className={`relative w-[50%] h-full bg-gray-100 transition-all`}>
        <div className="absolute bg-white transform rotate-[50deg] w-[300px] h-[400px] top-[-220px] left-[-100px] shadow-2xl" />
        <NextImage
          src={backdrop}
          alt="Zynk card."
          className="w-full h-full object-cover"
        />
      </div>
      <AccessForm />
    </main>
  );
}
