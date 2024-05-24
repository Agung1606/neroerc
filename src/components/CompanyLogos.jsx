import React from "react";
import { companyLogos } from "../constant";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline text-center mb-6 text-n-1/50">
        Helping people create content at
      </h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem] gap-2"
          >
            <img src={item} alt={item} width={55} height={55} />
            <p className="body-2 text-lg">neroErc</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
