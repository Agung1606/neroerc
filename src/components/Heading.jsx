import React from "react";
import Tagline from "./Tagline";

const Heading = ({ className, tag, title, text }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <Tagline>{tag}</Tagline>}
      {title && <h2 className="h2 text-center">{title}</h2>}
      {text && <p className="body-2 text-n-2/70 text-center">{text}</p>}
    </div>
  );
};

export default Heading;
