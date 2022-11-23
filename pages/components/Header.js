import { useState, useEffect } from "react";
import NavbarItem from "./SmallComponents/Header/Navbar";
import Menu from "./SmallComponents/Header/Menu";
import MenuMobile from "./SmallComponents/Header/MenuMobile";
import Logo from "./SmallComponents/Header/Logo";

function Header() {

    const [ showMenu, setShowMenu ] = useState(false)

    const [ bgColor, setBgColor ] = useState(false)

    const changeColor = () => {
        if(window.scrollY >= 90) {
            setBgColor(true)
        } else {
            setBgColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor, {passive: true})
    },[])

  return (
    <div className={bgColor ? "headerbg" : "header" } >

        <Logo />

        <div className="    
        h-full w-1/2 my-10 max95:my-8 max70:hidden 
        flex justify-evenly items-center content-center">

            <NavbarItem />
            
        </div>

        <Menu defer setShowMenu={setShowMenu} showMenu={showMenu} />
        <MenuMobile defer setShowMenu={setShowMenu} showMenu={showMenu} />

    </div>
  )
}

export default Header
