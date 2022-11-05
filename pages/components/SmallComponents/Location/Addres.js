import LocationOnIcon from '@material-ui/icons/LocationOn';

function Addres() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" 
    className=" m-auto text-cus-yellow my-4 
    flex flex-col content-center items-center">

      <h2 className="text-lg" >LOCATION</h2>

      <div>
        <LocationOnIcon /> 
        <span className=" max30:text-smm max45:text-sm text-white">
          Alte Poststraße 460-462 8055 Graz
        </span>
      </div>

    </div>
  )
}

export default Addres