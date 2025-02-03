import React from "react";
import { reviews } from "./constants";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl font-bold text-center">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="font-montserrat text-slate-gray text-center mt-5 info-text max-w-lg m-auto">
        here genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
