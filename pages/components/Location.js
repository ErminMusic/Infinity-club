import WorkTime from "./SmallComponents/Location/WorkTime";
import Addres from "./SmallComponents/Location/Addres";
import MapLocation from "./SmallComponents/Location/MapLocation";
import Logo from "./SmallComponents/Location/Logo";

function Location() {

  return (
    <div data-aos="fade-up" data-aos-duration="1000" id="LOCATION"
    className="font-raleway flex flex-col
    h-full w-full -z-50 p-14  
    max45:p-3 max110:pt-8 max90:p-3" >
        
        <Logo />

        <p data-aos="fade-up" data-aos-duration="1000" 
        className=" text-white py-5">
            In the heart of the Graz
        </p>

        <div className="flex max75:flex-col bg-zinc-700 h-full">
    
            <div 
            className="flex flex-col content-center 
            mr-10 max110:mr-4 p-2 w-1/3
            max110:w-1/2 max75:w-full">


                <div data-aos="fade-up" data-aos-duration="1000" className=" m-auto text-cus-yellow my-4 w-full flex content-center items-center ">
                    <p className="text-center w-full text-lg ">WORKING HOURS</p>
                </div>

                <WorkTime />

                <Addres />

            </div>

            <MapLocation />

        </div>

    </div>
  )
}

export default Location
