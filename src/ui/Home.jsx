import HomeWhatAreMacaronsSection from "./Home Components/HomeWhatAreMacaronsSection";
import HomeFeaturedProductsSection from "./Home Components/HomeFeaturedProductsSection";
import HomeTestimonialsSection from "./Home Components/HomeTestimonialsSection";

function Home() {
  return (
    <div>
      <div
        id="home-section"
        className="flex h-screen w-full items-center justify-center bg-[url('src/img/macaron-background-5.avif')] bg-cover bg-center bg-no-repeat font-[Raleway] brightness-110"
      >
        <div className="w-full bg-gradient-to-b from-[rgb(250,250,250,0.8)] to-[rgb(229,229,229,0.8)] text-center xs:flex xs:flex-col xs:gap-4 xs:py-20 sm:gap-0 sm:px-2 sm:py-8">
          <h1 className="mb-4 font-[Sacramento] text-5xl font-semibold text-stone-500">
            Specialty Macarons
          </h1>
          <div className="font-[Raleway] text-3xl font-semibold text-[#3bc9db] xs:p-2">
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
