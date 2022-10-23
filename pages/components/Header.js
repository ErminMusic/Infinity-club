import tw from "tailwind-styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";

function Header() {

    const [ showMenu, setShowMenu ] = useState(false)

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
    <Container >

        <Logo>

            <img className="2xl:h-2/3 lg:h-1/2"
            src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FInfinity%20Logo%202.png?alt=media&token=ed69617c-9719-4b50-8cc2-9363bc387b41'  />

        </Logo>

        <Navbar>

            {NavbarItems.map((item, index) => (
                <NavbarItem key={index} style={{color: "#afafaf"}} >{item.title}</NavbarItem>
            ))}
            
        </Navbar>

        <Menu  >
            
            <div onClick={() => setShowMenu(true)}>
                <MenuIcon style={{fontSize: 28,display: showMenu ? `none` : `initial`}}  className=" text-cus-yellow cursor-pointer" />
            </div>
           

        </Menu>

        <MenuList style={{ transform: showMenu ? `translateX(0)`: `translateX(100%)` }} >

            <CloseIcon onClick={() => setShowMenu(false)} style={{fontSize: 28}}  className=" text-cus-yellow cursor-pointer" />

            {NavbarItems.map((item, index) => (
                <NavbarItem key={index} style={{color: "#afafaf"}} >{item.title}</NavbarItem>
            ))}

        </MenuList>

    </Container>
  )
}

export default Header

const Container = tw.div`
    h-1/7 
    w-full
    flex content-center
    z-10 font-raleway
    m:px-3
    relative
`

const Logo = tw.div`
    w-1/2
    flex items-center
`


const Navbar = tw.div`
    w-1/2
    flex justify-evenly items-center
    h-full
    mmd:hidden
`

const Menu = tw.div`
    w-1/2
    p-4
    flex justify-end items-center
    h-full
    minmmd:hidden
`

const MenuList = tw.div`
    absolute top-0 right-0
    bg-transparent
    w-1/4
    py-4
    flex flex-col gap-3  justify-center items-center
    minmmd:hidden
    transition-all
    z-20
`

const NavbarItem = tw.div`
    my-auto
    sm:flex justify-center 
    px-1
    smd:px-0
    text-xl
    z-100
    cursor-pointer
    lg:text-xxs  2sm:text-smm mm:text-xs
`