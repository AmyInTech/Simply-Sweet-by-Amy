import React from "react";
import { useState } from "react";

function TestimonialCard({ review }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const commentToShow = isExpanded
    ? review.comment
    : review.comment.slice(0, 200) + (review.comment.length > 201 ? "..." : "");

  return (
    <div className="ml-auto mr-auto flex h-auto cursor-pointer flex-col gap-3 rounded-lg bg-white p-8 transition-all xs:w-[230px] xs:p-6 mobile:w-[90%] slider600:w-[390px] sm:w-[300px] md:h-[280px] md:w-[230px] slider900:w-[280px] slider1020:w-[300px] slider1060:w-[240px] xl:w-[310px]">
      <div className="flex items-end gap-5">
        <img
          ///img/testimonials-users/testimonial-user-card-stock-photo-1.jpeg
          src={`/img/testimonials-users/${review.icon}`}
          alt={review.reviewersName}
          className="h-[80px] w-[80px] rounded-full object-cover object-center"
        />
        <div className="flex flex-col items-start gap-2">
          <span className="flex">{review.rating}</span>
          <p className="text-base font-semibold text-[#3bc9db]">
            {review.reviewersName}
          </p>
        </div>
      </div>

      <div className="text-[14px]">
        <div>
          {/* <p className="${isExpanded ? : overflow-hidden} h-[100px]  overflow-y-scroll "> */}
          <p
            className={`${
              isExpanded ? "md:overflow-y-scroll" : "md:overflow-hidden"
            } md:h-[110px]`}
          >
            "{review.comment}"
          </p>
        </div>
      </div>
      {review.comment.length > 200 && (
        <button
          className="duration-3000 mt-[8px] hidden max-w-[100px] items-center justify-center gap-4 rounded-md bg-[#faa2c1] px-[6px] py-[2px] text-[12px] font-semibold tracking-[0.5px] text-white transition-transform hover:scale-105 hover:bg-[#f783ac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f783ac] md:flex"
          onClick={toggleExpand}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default TestimonialCard;
