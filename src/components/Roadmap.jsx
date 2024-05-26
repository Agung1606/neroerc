import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constant";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
import Button from "./Button";

const Roadmap = () => {
  return (
    <Section id={"roadmap"} className={"overflow-hidden"}>
      <div className="container md:pb-10">
        <Heading
          tag={"ready to get started"}
          title={"what we are working on"}
        />
        <div className="grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progress";
            return (
              <div
                key={item.id}
                className={`${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                } rounded-[2rem] p-0.25 md:flex md:even:translate-y-[7rem]`}
              >
                <div className="relative p-8 rounded-[2rem] bg-n-8 overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="grid"
                      width={550}
                      height={550}
                      className="w-full"
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>
                      <div className="flex items-center bg-n-1 px-4 py-1 rounded">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                          width={16}
                          height={16}
                          className="mr-2.5"
                        />
                        <p className="text-n-8">{status}</p>
                      </div>
                    </div>

                    <div className="-mx-15 -my-10 mb-10">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        width={630}
                        height={420}
                        className="w-full"
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-1/50">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center mt-12 md:mt-20">
          <Button>Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
