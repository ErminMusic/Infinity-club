import tw from "tailwind-styled-components"
import Header from "./components/Header"

export default function Home() {
  return (
    <Container>
      <Header />
    </Container>
  )
}

const Container = tw.div`
  w-full
  h-full
  flex
  justify-center
  align-center
  
`