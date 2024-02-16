import HomeWhatAreMacaronsSection from "./Home Components/HomeWhatAreMacaronsSection";
import HomeFeaturedProductsSection from "./Home Components/HomeFeaturedProductsSection";
import HomeTestimonialsSection from "./Home Components/HomeTestimonialsSection";

function Home() {
  return (
    <div>
      <div
        id="home-section"
        className="flex h-screen w-full items-center justify-center bg-[url('/img/macaron-background-5.avif')] bg-cover bg-center bg-no-repeat font-[Raleway] brightness-110"
      >
        <div className="flex flex-col justify-center items-center gap-0 py-16 mt-28 w-full bg-gradient-to-b from-[rgb(250,250,250,0.8)] to-[rgb(229,229,229,0.8)] text-center sm:mt-0 md:mt-[106px]">
          <h1 className="mb-2 font-[Sacramento] xs:text-[42px] sm:text-5xl font-semibold text-stone-500 sm:mb-4">
            Specialty Macarons
          </h1>
          <div className="font-[Raleway] xs:text-[26px] sm:text-3xl font-semibold text-[#3bc9db] w-[350px] sm:w-[500px]">
            Handmade, Homemade, Simply Made just for You.
          </div>
        </div>
      </div>

      <HomeWhatAreMacaronsSection />

      <HomeFeaturedProductsSection />

      <HomeTestimonialsSection />
    </div>
  );
}

export default Home;
