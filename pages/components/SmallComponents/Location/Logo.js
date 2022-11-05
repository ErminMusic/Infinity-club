import LocationImg from "../../../../public/images/Find.png"
import Image from "next/image";

function Logo() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className=" w-1/3 h-100%
    max90:pl-0 max90:h-80% max90:ml-0 max55:h-100% max45:w-1/2
    flex flex-col relative " >

      <Image 
      src={LocationImg} 
      alt="" 
      layout="responsive" />

    </div>
  )
}

export default Logo