import React from "react";
import { companyLogos } from "../constant";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline text-center mb-6 text-n-1/50 text-lg">
        Big corporate that used our AI
      </h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={item} alt={item} width={45} height={45} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
