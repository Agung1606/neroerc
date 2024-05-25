import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import PricingList from "./PricingList";

const Pricing = () => {
  return (
    <Section id={"pricing"} className={"overflow-hidden"}>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            alt="small-phere"
            width={255}
            height={255}
            className="relative z-1"
          />

          <div className="absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="stars"
              width={950}
              height={400}
              className="w-full"
            />
          </div>
        </div>

        <Heading
          tag={"get started with neroErc"}
          title={"Pay once, use forever"}
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a className="font-code font-bold uppercase text-xs border-b" href="/pricing">see the full details</a>
        </div>

      </div>
    </Section>
  );
};

export default Pricing;
