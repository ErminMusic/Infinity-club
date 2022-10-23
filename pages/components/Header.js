import tw from "tailwind-styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function Header() {

    const NavbarItems = [
        {
            title: "HOME",
        },
        {
            title: "ABOUT",
        },
        {
            title: "LOCATION",
        },
        {
            title: "MENU",
        }
    ]

  return (
    <Container className="z-10 font-raleway">

        <Logo>

            <img src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FInfinity%20Logo%202.png?alt=media&token=ed69617c-9719-4b50-8cc2-9363bc387b41' 
            className="2xl:h-2/3 lg:h-1/2" alt="/" />

        </Logo>

        <Navbar>

            {NavbarItems.map((item, index) => (
                <NavbarItem key={index} style={{color: "#afafaf"}} >{item.title}</NavbarItem>
            ))}


            
        </Navbar>

    </Container>
  )
}

export default Header

const Container = tw.div`
    h-1/7 
    w-full
    flex content-center
`

const Logo = tw.div`
    w-1/2
    flex items-center
`


const Navbar = tw.div`
    w-1/2
    flex justify-evenly items-center
    h-full
    
`

const NavbarItem = tw.div`
    my-auto
    text-xl
    cursor-pointer
    2xl:text- xl:text- lg:text-xs
`