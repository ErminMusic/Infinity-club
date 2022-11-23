import NavbarItem from "./Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function MenuMobile( { setShowMenu, showMenu } ) {
  return (
    <div 
    className="absolute top-3 right-3 left-3
    bg-cus-gray rounded w-auto py-4 transition-all
    flex flex-col gap-3 justify-center items-end z-20
    min70:hidden"
    style={{ transform: showMenu ? `translateY(0)`: `translateY(-120%)` }} 
    >

      <div className=" w-[20px] mr-8" >
        <FontAwesomeIcon icon={faXmark} onClick={() => setShowMenu(false)}  
        className=" text-cus-yellow cursor-pointer" />
      </div>

      <NavbarItem />

    </div>
  )
}

export default MenuMobile