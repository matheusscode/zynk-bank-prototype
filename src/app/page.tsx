import { Portfolio } from "@/common/portfolio";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Portfolio.Infobar />
      <Portfolio.Navbar />
    </main>
  );
}
