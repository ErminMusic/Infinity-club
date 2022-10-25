import tw from "tailwind-styled-components"
import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Location from "./components/Location"
import Menu from "./components/Menu"
import Welcome from "./components/Welcome"
import BackToTop from "react-back-to-top-button"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Home() {
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
`