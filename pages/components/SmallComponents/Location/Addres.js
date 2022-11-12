import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Addres() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" 
    className=" m-auto text-cus-yellow my-4 
    flex flex-col content-center items-center">

      <h2 className="text-lg" >LOCATION</h2>

      <div className='flex' >

        <div className="w-[16px] ">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
         

        <span className=" ml-1 max30:text-smm max45:text-sm text-white">
          Alte Poststraße 460-462 8055 Graz
        </span>
      </div>

    </div>
  )
}

export default Addres