import { useState } from "react";
import Button from "../Button";

function HomeWhatAreMacaronsSection() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div
      id="home-what-are-macarons-section"
      className="m-auto flex items-center justify-center bg-[#fff5f5] xs:pt-16 md:pt-32 "
    >
      <div
        className={`flex xs:flex-col lg:h-auto lg:max-w-6xl lg:flex-row lg:items-stretch lg:justify-center ${
          showFullText ? "transition-height" : ""
        }`}
      >
        <div className="md:basis-2/6">
          <img
            src="/img/macaron-background-2.avif"
            className="rounded-l-xl xs:h-[300px] xs:w-full xs:object-cover xs:object-center lg:h-full lg:bg-no-repeat lg:object-center"
            alt="Stack of green, purple, and pink macarons with yellow and pink macarons around the stack."
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 rounded-r-xl bg-white text-center font-[Raleway] xs:p-12 md:basis-4/6 md:gap-4 md:p-14">
          <div className="font-[Sacramento] text-5xl tracking-wide text-[#3bc9db]">
            What are Macarons?
          </div>
          <div className="text-left font-[Raleway] text-[16px] leading-loose text-stone-500">
            {showFullText ? (
              <>
                {/* Full text */}
                Macarons are beautifully delicate and excuisite French
                confections that consist of two almond meringue cookies
                sandwiched together with a flavorful filling. These special
                cookies are known for their smooth, glossy tops, distinctive
                "feet" (slightly raised rim at the base), and a wide range of
                vibrant colors that make them visually stunning.
                <br></br>
                <br></br>
                Almond flour and powdered sugar are carefully folded into
                whipped egg-whites to create a batter that is baked and turned
                what we know as macaron shells. These shells are thin and crisp
                on the outside while the inside remains soft, slightly chewy,
                and pleasantly flavorful.
                <br></br>
                <br></br>
                {/* Rest of the content */}
                The filling between the two cookie halves can vary widely,
                offering an array of tastes that range from classic flavors like
                chocolate, vanilla, pistachio, and raspberry, to more innovative
                combinations. Here at Simply Sweet by Amy, we offer classic
                flavors as well as unique Southeast-Asian inpired options like
                pandan, mango, matcha, milk tea, Vietnamese coffee,
                passionfruit, lychee, and plenty more!
                <br></br>
                <br></br>
                Macarons have become popular worldwide because of their elegant
                appearances, delicate texture, and endless creative
                possibilities they offer in terms of flavors and designs.
                Perfect as treats for loved ones, gifts, or elegant additions to
                special occasions and celebrations.
              </>
            ) : (
              <>
                {/* Shortened text */}
                Macarons are beautifully delicate and excuisite French
                confections that consist of two almond meringue cookies
                sandwiched together with a flavorful filling. These special
                cookies are known for their smooth, glossy tops, distinctive
                "feet" (slightly raised rim at the base), and a wide range of
                vibrant colors that make them visually stunning.
                <br></br>
                <br></br>
                Almond flour and powdered sugar are carefully folded into
                whipped egg-whites to create a batter that is baked and turned
                what we know as macaron shells. These shells are thin and crisp
                on the outside while the inside remains soft, slightly chewy,
                and pleasantly flavorful.
              </>
            )}
            <br />
            <br />
            {/* Toggle "Read More" button */}
            <div className="flex items-center xs:justify-center lg:justify-start">
              <Button
                onClick={toggleShowFullText}
                type="small"
                className="flex w-full items-center justify-center rounded-md bg-[#3bc9db] text-sm font-semibold text-white shadow-sm hover:bg-[#15aabf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15aabf]"
              >
                {showFullText ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWhatAreMacaronsSection;
