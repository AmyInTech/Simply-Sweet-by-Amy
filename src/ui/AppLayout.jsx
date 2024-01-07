import Header from "./Header";
import Footer from "./Home Components/Footer";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className=" h-screen  ">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-hidden">
        <main className="w-full">
          <Outlet />
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
