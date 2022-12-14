import Logo from "./SmallComponents/Menu/Logo";
import Type from "./SmallComponents/Menu/Type";
import { useState, useEffect } from "react";

function Menu() {

  const [ mount, setMount ] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  return (
    <div data-aos="fade-up"  data-aos-duration="1500" id="MENU"
    className=" p-14 max90:p-3 min90:-mb-10 max90:my-5
    w-full first-line:-z-50 font-raleway" >

      {mount ? (
        <div>
          <Logo />
          <div >
            <Type />
          </div>
        </div>
      ) 
      : 
      
        <div></div> 
      }
    </div>
  )
}

export default Menu
