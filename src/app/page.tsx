
import NavbarContainerPortfolio from "@/common/portfolio/navbar-container-portfolio";
import InfoBarPortfolio from "@/common/portfolio/infobar-portfolio";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <InfoBarPortfolio />
      <NavbarContainerPortfolio />
    </main>
  );
}
