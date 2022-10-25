import tw from "tailwind-styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import styled from "styled-components";

function Header() {

    const [ showMenu, setShowMenu ] = useState(false)

   const [ bgColor, setBgColor ] = useState(false)

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

    const changeColor = () => {
        if(window.scrollY <= 90) {
            setBgColor(true)
        } else {
            setBgColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <Container className={bgColor ? "header" : "headerbg" } >

        <Logo>

            <img className="2xl:h-2/3 lg:h-1/2"
            src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FInfinity%20Logo%202.png?alt=media&token=ed69617c-9719-4b50-8cc2-9363bc387b41'  />

        </Logo>

        <Navbar>

            {NavbarItems.map((item, index) => (
                <NavbarItem  key={index} style={{color: "#afafaf"}} >
                    
                    <Item>
                        <span>{item.title}</span>
                    </Item>
                    

                </NavbarItem>
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
    z-100 font-raleway
    m:px-3
    relative
    fixed
`

const Logo = tw.div`
    w-1/2
    flex items-center
`


const Navbar = tw.div`
    w-1/2
    mt-11
    flex justify-evenly items-center content-center
    h-full
    mmd:hidden
`

const Item = styled.div`
    text-transform: uppercase;
    position: relative;

    span {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        position: relative;

        &::after {
            position: absolute;
            content: "";
            background: white;
            height: 2px;
            left: 0px;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform: left center ;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transform: scaleX(0);
            }
        }

    &:hover {
        span:after {
            opacity: 1;
            transform: scaleX(1);
        }
    }
    
`

const Menu = tw.div`
    w-1/2 
    py-4
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