import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

let starRating5 = [
  <BsStarFill key="star1" />,
  <BsStarFill key="star2" />,
  <BsStarFill key="star3" />,
  <BsStarFill key="star4" />,
  <BsStarFill key="star5" />,
];

let starRating4 = [
  <BsStarFill key="star6" />,
  <BsStarFill key="star7" />,
  <BsStarFill key="star8" />,
  <BsStarFill key="star9" />,
  <BsStar key="star10" />,
];

let starRating3 = [
  <BsStarFill key="star11" />,
  <BsStarFill key="star12" />,
  <BsStarFill key="star13" />,
  <BsStar key="star14" />,
  <BsStar key="star15" />,
];

let starRating2 = [
  <BsStarFill key="star16" />,
  <BsStarFill key="star17" />,
  <BsStar key="star18" />,
  <BsStar key="star19" />,
  <BsStar key="star20" />,
];

let starRating1 = [
  <BsStarFill key="star21" />,
  <BsStar key="star22" />,
  <BsStar key="star23" />,
  <BsStar key="star24" />,
  <BsStar key="star25" />,
];

let featuredReviews = [
  {
    icon: "user-avatar.png",
    rating: starRating4,
    reviewersName: "Vickie V.",
    comment:
      "Very fluffy, chewy and not so sweet. Great having it for my tea time 🍵",
    isTruncated: false,
  },
  {
    icon: "testimonial-photo-robin.png",
    rating: starRating5,
    reviewersName: "Robin D.",
    comment:
      "These macarons are delicate and airy, with a light, crispy exterior and a slightly chewy interior. The filling is light, yet flavorful and are not overly sweet -- the ultimate compliment for a dessert! These sweet treats are a good size (not too big or small), come in a wide range of tasty flavors, and are a reasonable price. They are comparable to what you get from stores and bakeries. Definitely give them a try and I promise that you will be coming back for more!",
    isTruncated: true,
  },
  {
    icon: "user-avatar.png",
    rating: starRating5,
    reviewersName: "Monineath S.",
    comment: "Crème brûlée was my favorite!",
    isTruncated: false,
  },
  {
    icon: "user-avatar.png",
    rating: starRating5,
    reviewersName: "Vuthy S.",
    comment:
      "Great variety of unique flavors to choose from. All of them tasted great!",
    isTruncated: false,
  },
  // {
  //   icon: "testimonial-user-card-stock-photo-5.jpeg",
  //   rating: starRating5,
  //   reviewersName: "First Last 5",
  //   comment:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, enim cupiditate libero placeat nemo autem est.",
  // },
  // {
  //   icon: "testimonial-user-card-stock-photo-6.jpeg",
  //   rating: starRating4half,
  //   reviewersName: "First Last 6",
  //   comment:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, enim cupiditate libero placeat nemo autem est.",
  // },
  // {
  //   icon: "testimonial-user-card-stock-photo-7.jpeg",
  //   rating: starRating5,
  //   reviewersName: "First Last 7",
  //   comment:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, enim cupiditate libero placeat nemo autem est.",
  // },
  // {
  //   icon: "testimonial-user-card-stock-photo-8.jpeg",
  //   rating: starRating4half,
  //   reviewersName: "First Last 8",
  //   comment:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, enim cupiditate libero placeat nemo autem est.",
  // },
  // {
  //   icon: "testimonial-user-card-stock-photo-9.jpeg",
  //   rating: starRating5,
  //   reviewersName: "First Last 9",
  //   comment:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, enim cupiditate libero placeat nemo autem est.",
  // },
  // {
  //   icon: "testimonial-user-card-stock-photo-10.jpeg",
  //   rating: starRating4half,
  //   reviewersName: "First Last 10",
  //   comment:
  //     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, enim cupiditate libero placeat nemo autem est.",
  // },
];

function HomeTestimonialsSection() {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1059,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div
      id="home-testimonials-section"
      className="xs:py-26 flex items-center justify-center bg-[#fff5f5] py-32 font-[Raleway] md:pt-32"
    >
      <div className="flex flex-col justify-evenly gap-5 rounded-lg bg-[#f3f0ff] px-20 py-10 mobile:px-14 slider600:w-[500px] sm:w-[550px] md:w-[700px] slider900:w-[800px] slider1020:w-[900px] slider1060:w-[980px] xl:w-[1200px]">
        <div className="relative flex justify-center">
          <h1 className="relative px-8 py-4 text-center text-xl font-semibold uppercase tracking-[0.2em] text-stone-500 after:border-solid md:before:absolute md:before:left-[-120px] md:before:top-[50%] md:before:z-10 md:before:w-[120px] md:before:translate-y-[-50%] md:before:border-[2px] md:before:border-solid md:before:border-[#d0bfff] md:after:absolute md:after:right-[-120px] md:after:top-[50%] md:after:z-10 md:after:w-[120px] md:after:translate-y-[-50%] md:after:border-[2px] md:after:border-[#d0bfff]">
            Testimonials
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-center font-[Raleway] text-lg font-semibold uppercase tracking-widest text-[#3bc9db]">
            Check out our Reviews
          </h2>
        </div>

        {/* Slider */}
        <div className="violet-chevron slider1:w-[750px] nlg:w-[900px] xs:w-[250px] mobile:w-[250px] slider600:w-[400px] sm:w-[440px] md:w-[590px] slider900:w-[700px] slider1020:w-[750px] slider1060:w-[870px] xl:w-[1090px]">
          <Slider {...settings}>
            {featuredReviews.map((review, index) => (
              <TestimonialCard
                review={review}
                key={`${review.reviewersName}-${index}`}
                customKey={`${review.reviewersName}-${index}`}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonialsSection;
