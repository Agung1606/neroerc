import React from "react";
import Section from "./Section";
import { socials } from "../constant";

const Footer = () => {
  return (
    <Section className={"!px-0 !py-4"} crosses>
      <div className="container flex items-center sm:justify-between gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">© {new Date().getFullYear()}. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              className="bg-n-7 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-n-6"
            >
              <img
                src={social.iconUrl}
                alt={social.title}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
