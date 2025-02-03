import React from "react";
import Button from "./Button";
import { arrowRight } from "./assets/icons";
import { shoe8 } from "./assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="lg:max-w-lg mt-10 font-montserrat text-slate-gray">
          Ensuring Premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality , innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg mt-5 font-montserrat text-slate-gray">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" iconURL="" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
