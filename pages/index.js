import tw from "tailwind-styled-components"
import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Location from "./components/Location"
import Menu from "./components/Menu"
import Welcome from "./components/Welcome"

export default function Home() {
  return (
    <Container className="relative overflow-hidden">

      <img className="absolute right-0 left-0 top-0 -z-5 w-full" src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2Famir-toossi-w9WO8txR7Uk-unsplash%201.png?alt=media&token=174282bb-62f5-404b-9a77-a4e1d0c4f3a2" />

      <img className="absolute right-0 left-0 top-0 -z-5 w-full opacity-70" src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FRectangle%201.png?alt=media&token=0bc76ac5-6672-42ac-8bd3-b1d224a70818" />

      <img className="absolute 2xl:mt-60 lg:mt-24 md:-mt-20 sm:-mt-60 right-0 left-0 bottom-0 h-full top-96 -z-5 w-full " src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FRectangle%204.png?alt=media&token=2944e65e-8dcc-46ac-a6ef-d7b434d0f003" />

      
      <Wrap className=" z-10">

        <Header />
        
        <Welcome />

        <About />

        <Menu />

        <Location />

        <Footer />

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
`