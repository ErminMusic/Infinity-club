import tw from "tailwind-styled-components"
import About from "./components/About"
import Header from "./components/Header"
import Welcome from "./components/Welcome"

export default function Home() {
  return (
    <Container className=" bg">

      <Wrap>

        <Header />
        
        <Welcome />

        <About />

      </Wrap>

    </Container>
  )
}

const Container = tw.div`
  h-auto
  flex
  justify-center
  align-center
  bg-[url('https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2Famir-toossi-w9WO8txR7Uk-unsplash%201.png?alt=media&token=174282bb-62f5-404b-9a77-a4e1d0c4f3a2')]
  bg-auto bg-no-repeat
  bg-zinc-800
  
`

const Wrap = tw.div`
  w-4/5
  flex
  flex-col
`