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
import BgTransparent from "../public/images/BgTransparent.webp"
import Head from "next/head"

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (

    <div 
    className="relative overflow-hidden h-auto 
    flex justify-center align-center bg-zinc-800">

      <Head>
        <title>Infinity Club</title>

        <meta 
          name="description"
          content="Welcome to the best clubbing expirience in Graz, the Infinity Club "
        />

      </Head>

      <Image 
      src={BgImage} 
      loading="lazy" 
      alt="" 
      className="image bg-center bg-no-repeat bg-cover 
      w-full h-1/3 max90:h-25% max75:h-15%
      absolute right-0 left-0 z-5 "  />

      <div className="background absolute "  />
     
      <div className=" w-4/5 max75:w-full flex flex-col items-center  z-10" >

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
