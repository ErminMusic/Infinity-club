import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Location from "./components/Location"
import Menu from "./components/Menu"
import TopButton from "./components/SmallComponents/index/TopButton"
import Welcome from "./components/Welcome"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import BgImage from "../public/images/BgImage.webp"
import BgImagePhone from "../public/images/BgImagePhone.webp"
import PageHead from "./components/PageHead"

export default function Home() {

  useEffect(() => {
    AOS.init();
    document.addEventListener('touchstart', {passive: true});
  }, [])

  return (
    <div 
    className="relative overflow-hidden h-auto 
    flex justify-center align-center bg-zinc-800">

      <PageHead />

      <Image 
      src={BgImage}  
      alt="" 
      className=" bg-center bg-no-repeat bg-cover 
      w-full h-auto max90:h-25% max75:h-15%
      absolute right-0 left-0 -top-3 min150:-top-8 z-5 max370px:hidden "  />

      <Image 
      src={BgImagePhone}  
      alt=""
      className=" bg-center bg-no-repeat bg-cover 
      w-full h-auto max90:h-25% max75:h-15% 
      absolute right-0 left-0 -top-3 min150:-top-8 z-5 min370px:hidden "  />

      <div className="background absolute "  />
     
      <div className=" w-4/5 max75:w-full flex flex-col items-center z-10" >

        <Header />
        <Welcome />
        <About />
        <Menu />
        <Location />
        <Footer />
        <TopButton />

      </div>

    </div>
  )
}
