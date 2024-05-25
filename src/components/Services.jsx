import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { neroErcServices, neroErcServicesIcons } from "../constant";
import { Gradient, PhotoChatMessage, VideoBar, VideoChatMessage } from "./design/Services";
import Generating from "./Generating";

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
                {neroErcServices.map((item, index) => (
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
            <Generating
              className={
                "absolute bottom-7 left-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-[28rem] xl:w-[31rem] border border-n-1/10"
              }
            />
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
              <div className="absolute bottom-10 left-4 max-w-[28rem]">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 text-n-3">
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 text-n-3 mb-[2rem]">
                  The world's most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {neroErcServicesIcons.map((item, index) => (
                    <li
                    key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "bg-conic-gradient w-[3rem] h-[3rem] md:w-[4.5rem] md:h-[4.5rem] p-0.25"
                          : "bg-n-6 w-10 h-10 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={`${
                          index === 2 &&
                          "bg-n-7 w-full h-full rounded-2xl flex items-center justify-center"
                        }`}
                      >
                        <img src={item} alt={item} width={24} height={24} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative bg-n-8 rounded-xl overflow-hidden h-[20rem] md:h-[25rem]">
                <img
                  src={service3}
                  alt="scary-robot"
                  width={520}
                  height={400}
                  className="w-full h-full object-cover"
                />
              <VideoChatMessage />
              <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
