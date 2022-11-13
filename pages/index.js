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
      </Head>

      <div alt="" className="image absolute right-0 left-0  z-5 "  />

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
