import MenuIcon from '@material-ui/icons/Menu';

function Menu( { setShowMenu, showMenu } ) {
  return (
    <div className=" w-1/2 py-7 pr-7 h-full min70:hidden
    flex justify-end items-center " >
            
      <div onClick={() => setShowMenu(true)}>
        <MenuIcon style={{fontSize: 28, zIndex: showMenu ? 0 : 50}}  
        className=" text-cus-yellow cursor-pointer" />
      </div>
    
    </div>
  )
}

export default Menu