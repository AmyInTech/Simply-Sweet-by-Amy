import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsStarFill, BsStar } from "react-icons/bs";

let starRating5 = [
  <BsStarFill key="star1" className="text-yellow-400" />,
  <BsStarFill key="star2" className="text-yellow-400" />,
  <BsStarFill key="star3" className="text-yellow-400" />,
  <BsStarFill key="star4" className="text-yellow-400" />,
  <BsStarFill key="star5" className="text-yellow-400" />,
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
    icon: "testimonial-photo-vickie.jpeg",
    rating: starRating5,
    reviewersName: "Vickie V.",
    comment:
      "These are absolutely perfect! They are crunchy and chewy, and the filling is plentiful.There are so many flavors to choose from. I love Thai milk tea, pistachio and taro the most! Totally worth it to make a great impression for a gift, or for a party!",
    isTruncated: true,
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
    icon: "testimonial-photo-monineath.jpeg",
    rating: starRating5,
    reviewersName: "Monineath S.",
    comment:
      "Crème brûlée was my fave macaron flavor! So good. Perfect amount of sweetness 😍",
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
  {
    icon: "testimonial-photo-joey.jpeg",
    rating: starRating5,
    reviewersName: "Joey P.",
    comment:
      "Having tried the macarons from this store, I must say they exceeded my expectations. The flavors were exquisite, and the texture was spot-on with a delightful balance of crispiness and softness. It was a treat for the taste buds, and I highly recommend trying them for a delightful culinary experience.",
    isTruncated: true,
  },
  {
    icon: "user-avatar.png",
    rating: starRating5,
    reviewersName: "Van T.",
    comment:
      "Excellent taste and variety of flavors!!! Very new flavors that you cant find anywhere.",
    isTruncated: false,
  },
  {
    icon: "user-avatar.png",
    rating: starRating5,
    reviewersName: "Xia V.",
    comment:
      "I don’t usually like sweets but I these are flavorful and I always go back for more. Amy offers flavors for the Asian palate like ube, thai tea, and milk tea (all on my top 5 list). She is also easy to work with and takes new flavor suggestions well.",
    isTruncated: true,
  },
  {
    icon: "testimonial-photo-tina.jpeg",
    rating: starRating5,
    reviewersName: "Tina D.",
    comment:
      "Very delicious macarons that come in a variety of different unique flavors.",
    isTruncated: false,
  },
  {
    icon: "testimonial-photo-stephanie.jpeg",
    rating: starRating5,
    reviewersName: "Stephanie S.",
    comment:
      "I ordered over 100 macarons in five different flavors (lemon crème, chocolate fudge, Vietnamese coffee, white chocolate mocha, and strawberries and crème)! The macarons just melt in your mouth. So fresh and tasty! We will continue to order from Simply Sweet because it never disappoints. Highly recommend!",
    isTruncated: true,
  },
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
      className="flex items-center justify-center bg-[#fff5f5] font-[Raleway] sm:pt-16 md:pt-32"
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
