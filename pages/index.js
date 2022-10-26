import tw from "tailwind-styled-components"
import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Location from "./components/Location"
import Menu from "./components/Menu"
import Welcome from "./components/Welcome"
import BackToTop from "react-back-to-top-button"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ReactPlayer from "react-player"
import dynamic from "next/dynamic"

export default function Home() {

  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  const link = "https://player.vimeo.com/video/681571070?h=c8ce8eb88a&title=0&byline=0&portrait=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"

  return (

    <Container className="relative overflow-hidden">

      <div  className="image absolute right-0 left-0  z-5 "  />

      <div className="background absolute "  /> 
     
      <Wrap >

        <Header />
        
        <Welcome />

        <About />

        <Menu />

        <Location />

        <Footer />

        <BackToTop showAt={10} easing="easeInOutQuint" className=" transition-all right-4 bottom-4" >
          <Arrow style={{fontSize: 40}} />
        </BackToTop>

      </Wrap>

    </Container>
  )
}

const Container = tw.div`
  h-auto
  flex
  justify-center
  align-center
  bg-zinc-800
  
`

const Wrap = tw.div`
  w-4/5
  flex
  flex-col
  items-center
  md:w-full
  z-10
`

const Arrow = tw(ExpandLessIcon)`
  rounded-full text-cus-yellow
  border-2 border-cus-yellow
  hover:bg-cus-yellow/50 
  transition-all 
  hover:animate-bounce
  z-100
`