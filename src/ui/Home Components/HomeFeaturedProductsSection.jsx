import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedProductsCard from "./FeaturedProductsCard";

let featuredProducts = [
  {
    img: "products-card-stock-photo-1.avif",
    title: "Strawberries & Creme",
  },
  {
    img: "products-card-stock-photo-2.avif",
    title: "Lemon, Pistachio, Passionfruit",
  },
  {
    img: "products-card-stock-photo-3.avif",
    title: "Milk Tea, Thai Tea, Lychee, Pandan",
  },
  {
    img: "products-card-stock-photo-4.avif",
    title: "Raspberry Creme",
  },
  {
    img: "products-card-stock-photo-5.avif",
    title: "Ube",
  },
  {
    img: "products-card-stock-photo-6.avif",
    title: "Matcha",
  },
  {
    img: "products-card-stock-photo-7.avif",
    title: "Vietnamese Coffee",
  },
  {
    img: "products-card-stock-photo-8.avif",
    title: "Salted Caramel",
  },
  {
    img: "products-card-stock-photo-9.avif",
    title: "Chocolate Fudge",
  },
  {
    img: "products-card-stock-photo-10.avif",
    title: "Fruity Pebbles",
  },
  {
    img: "products-card-stock-photo-11.avif",
    title: "Cookies & Creme",
  },
  {
    img: "products-card-stock-photo-12.avif",
    title: "Mocha",
  },
];

function HomeFeaturedProductsSection() {
  const settings = {
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 5,
          centerMode: false,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          centerMode: false,
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
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
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
      id="home-featured-products-section"
      className="flex items-center justify-center bg-[#fff5f5] font-[Raleway] sm:pt-16 md:pt-32"
    >
      <div className="flex flex-col justify-evenly gap-5 rounded-lg bg-[#e3fafc] px-20 py-10 mobile:w-[100%] mobile:px-14 slider600:w-[500px] sm:w-[550px] md:w-[700px] slider900:w-[800px] slider1020:w-[900px] slider1060:w-[980px] xl:w-[1200px]">
        <div className="relative flex justify-center">
          <h1 className="relative px-8 py-4 text-center text-xl font-semibold uppercase tracking-[0.2em] text-stone-500 after:border-solid md:before:absolute md:before:left-[-120px] md:before:top-[50%] md:before:z-10 md:before:w-[120px] md:before:translate-y-[-50%] md:before:border-[2px] md:before:border-solid md:before:border-[#3bc9db] md:after:absolute md:after:right-[-120px] md:after:top-[50%] md:after:z-10 md:after:w-[120px] md:after:translate-y-[-50%] md:after:border-[2px] md:after:border-[#3bc9db]">
            Featured Products
          </h1>
        </div>

        {/* Slider */}
        <div className="cyan-chevron slider1:w-[750px] lgmobile:w-[250px] text-center xs:w-[250px] mobile:w-auto slider600:w-[400px] sm:w-[450px] md:w-[590px] slider900:w-[700px] slider1020:w-[750px] slider1060:w-[870px] xl:w-[1090px]">
          <Slider {...settings} className="flex items-center justify-center">
            {featuredProducts.map((product) => (
              <FeaturedProductsCard product={product} key={product.title} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default HomeFeaturedProductsSection;

// {featuredProducts.map((product) => (
//   <FeaturedProductsCard product={product} key={product.title} />
// ))}
