import NavbarItem from "./Navbar"
import CloseIcon from '@material-ui/icons/Close';

function MenuMobile( { setShowMenu, showMenu } ) {
  return (
    <div className="absolute top-3 right-3 left-3
    bg-cus-gray rounded w-auto py-4 transition-all
    flex flex-col gap-3 justify-center items-end z-20
    min70:hidden"
    style={{ transform: showMenu ? `translateY(0)`: `translateY(-120%)` }} >

      <CloseIcon onClick={() => setShowMenu(false)} style={{fontSize: 28, marginRight: 28}}  className=" text-cus-yellow cursor-pointer" />

      <NavbarItem />

    </div>
  )
}

export default MenuMobile