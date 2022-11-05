import Image from "next/image"
import LogoImg from "../../../../public/images/Infinity.png"

function Logo() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" 
    className=" relative w-1/5 -ml-2 max110:w-1/4 
    max90:w-1/2 max90:mt-4 max45:mt-0 min90:-mt-3 mb-2 ">

        <Image 
        src={LogoImg} 
        alt="" l
        ayout="responsive" />

    </div>
  )
}

export default Logo