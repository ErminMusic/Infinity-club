import tw from "tailwind-styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";
import { useEffect } from "react";
import LogoImg from "../../public/images/Logo1.png"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        if(window.scrollY >= 90) {
            setBgColor(true)
        } else {
            setBgColor(false)
        }
    }

    // window.addEventListener('scroll', changeColor)

    if (typeof window !== "undefined") {
        // Client-side-only code
        addEventListener('scroll', changeColor)
        AOS.init()
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)

    },[])

  return (
    <Container className={bgColor ? "headerbg" : "header" } >

        <Logo>

            <div className="h-full w-1/3 max85:w-1/2 max70:h-4/5 max75:py-1.5 max70:py-0 max65:h-2/3 
            max50:h-1/2 max45:w-2/3 max30:w-4/5  max30:h-70% max25:w-full cursor-pointer relative" > 

                <Image src={LogoImg} layout="responsive" alt="/" />

            </div>

        </Logo>

        <Navbar>

            {NavbarItems.map((item, index) => (
                <NavbarItem  key={index} style={{color: "#afafaf"}} >
                    
                    <Item>

                        <UnderLine >{item.title}</UnderLine>

                    </Item>

                </NavbarItem>
            ))}
            
        </Navbar>

        <Menu  >
            
            <div onClick={() => setShowMenu(true)}>
                <MenuIcon style={{fontSize: 28, display: showMenu ? `none` : `initial`}}  className=" text-cus-yellow cursor-pointer" />
            </div>
           
        </Menu>

        <MenuList style={{ transform: showMenu ? `translateY(0)`: `translateY(-120%)` }} >

            <CloseIcon onClick={() => setShowMenu(false)} style={{fontSize: 28, marginRight: 28}}  className=" text-cus-yellow cursor-pointer" />

            {NavbarItems.map((item, index) => (
                <NavbarItem key={index} style={{color: "#afafaf"}} >

                    <Item>

                        <UnderLine >{item.title}</UnderLine>
                        
                    </Item>

                </NavbarItem>
            ))}

        </MenuList>

    </Container>
  )
}

export default Header

const Container = tw.div`
    max-h-[20%]
    w-full
    flex content-center 
    z-100 font-raleway
    max90:px-3
    relative
    fixed
    shadow-md
`

const Logo = tw.div`
    w-1/2 m-auto
    flex items-center 
`


const Navbar = tw.div`
    w-1/2
    my-10
    max95:my-8
    flex justify-evenly items-center content-center
    h-full
    max70:hidden
`

const Item = tw.div`
    uppercase
    relative
    max70:mr-8
`

const UnderLine = tw.div`
    relative 
    uppercase tracking-wide
    hover:after:opacity-100 
    hover:after:scale-100

    after:absolute after:content-['']
    after:bg-cus-yellow after:h-0.5 
    after:right-0 after:left-0 after:-bottom-0.5 
    after:opacity-0 after:transform 
    after:scale-x-0 after:transition-all 
    after:duration-300
`

const Menu = tw.div`
    w-1/2 
    py-7
    flex justify-end items-center 
    h-full
    min70:hidden
`

const MenuList = tw.div`
    absolute top-3 right-3 left-3
    bg-cus-gray
    rounded
    w-auto
    py-4
    flex flex-col gap-3 justify-center items-end 
    min70:hidden
    transition-all
    z-20
`

const NavbarItem = tw.div`
    my-auto
    min70:h-full
    flex justify-start justify-content-start items-start
    px-1
    max65:px-0
    max70:py-1
    text-xl
    z-100
    cursor-pointer
    max110:text-xxs  max30:text-smm max50:text-xs
`