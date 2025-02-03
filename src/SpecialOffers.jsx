import React from "react";
import Button from "./Button";
import { arrowRight } from "./assets/icons";
import { offer } from "./assets/images";

const SpecialOffers = () => {
  return (
    <section className="max-container flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-4xl font-palanquin font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h3>
        <p className="lg:max-w-lg mt-10 font-montserrat text-slate-gray">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="lg:max-w-lg mt-5 font-montserrat text-slate-gray">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the lofties expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 w-50 flex flex-wrap gap-5">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
