import Link from "next/link";
import styles from "./page.module.css";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import HeroSection from "./components/HeroSection/HeroSection";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import PremiumFood from "./components/PremiumFood/PremiumFood";
import EverythingPetNeed from "./components/EverythingPetNeed/EverythingPetNeed";
import BestProduct from "./components/BestProduct/BestProduct";
import Services from "./components/Services/Services";
import Explore from "./components/Explore/Explore";
import ConnectUs from "./components/ConnectUs/ConnectUs";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeaderMenu />
      <HeroSection />
      <ProductGallery />
      <PremiumFood />
      <EverythingPetNeed />
      <BestProduct />
      <Services />
      <Explore />
      <ConnectUs />
      <Footer />
    </div>
  );
}
