import Image from "next/image"
import tw from "tailwind-styled-components"
import Headerlogo from "../../public/images/Logo1.png"

function Header() {
  return (
    <Container>

        <Image src={Headerlogo} className="h-40" />

        <Navbar>Home</Navbar>

    </Container>
  )
}

export default Header

const Container = tw.div`
    h-50
    w-4/5
    border-4 border-sky-500
`

const Logo = tw.img`

`

const Navbar = tw.div`

`