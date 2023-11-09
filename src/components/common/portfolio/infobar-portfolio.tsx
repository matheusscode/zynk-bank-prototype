import React from "react";

interface InfoBarPortfolioProps {}

const InfoBarPortfolio: React.FC<InfoBarPortfolioProps> = ({}) => {
  return (
    <div className="w-full px-4 py-2 text-white bg-neutral-950">
      <p className="text-sm text-center">
        Aproveite nossa oferta especial! Consulte agora. 💰✨ <span className="font-bold">#SeuBanco</span>
      </p>
    </div>
  );
};

export default InfoBarPortfolio;
