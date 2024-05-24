import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constant";

import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with neroErc"
        />
        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {benefits.map((item) => (
              <div
                key={item.id}
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] max-w-[24rem]"
                style={{ backgroundImage: `url(${item.backgroundUrl})` }}
              >
                <div className="relative z-2 min-h-[22rem] p-[2.4rem] flex flex-col pointer-events-none">
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 mb-4">{item.text}</p>

                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      alt={item.iconUrl}
                      width={48}
                      height={48}
                    />

                    <p className="ml-auto font-code font-bold text-n-1 uppercase text-xs tracking-wider">
                      Explore now
                    </p>
                    <Arrow />
                  </div>
                </div>
                {item.light && <GradientLight />}
                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: `url(#benefits)` }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        width={380}
                        height={362}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                <ClipPath />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
