import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2 } from "../assets";
import { brainwaveServices } from "../constant";
import { Gradient } from "./design/Services";

const Services = () => {
  return (
    <Section id={"how-to-use"}>
      <div className="container">
        <Heading
          title={"Generative AI made for creators."}
          text={"neroErc unlocks the potential of AI-powered applications"}
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] border border-n-1/10 mb-5 p-8 rounded-3xl lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="smartest-AI"
                width={800}
                height={730}
                className="w-full h-full object-cover md:object-right"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 text-n-3 mb-[3rem]">
                neroErc unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center py-4 border-t border-n-6"
                  >
                    <img src={check} alt="check" width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid lg:grid-cols-2 gap-5">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="robot"
                  width={630}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">

            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
