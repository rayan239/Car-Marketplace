import Category from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/infoSection";
import MostSearchedCar from "./components/MostSearchedCar";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Category */}
      <Category />
      {/* Most Searched Cars */}
      <MostSearchedCar />
      {/* Info Section */}
      <InfoSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
