import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Menu( { setShowMenu, showMenu } ) {
  return (
    <div 
    className=" w-1/2 py-7 pr-7 h-full min70:hidden 
    flex justify-end items-center " >
            
      <div className='w-[24px] max30:w-[20px]' onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={faBars} style={{zIndex: showMenu ? 0 : 50}}  
        className=" text-cus-yellow cursor-pointer" />
      </div>
    
    </div>
  )
}

export default Menu