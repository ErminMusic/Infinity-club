import Image from "next/image"
import Bar from "../../../../public/images/Bar.webp"
import BarM from "../../../../public/images/BarMM.webp"

function Logo() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" 
      className=" 
      w-full flex my-5 items-center max50:justify-items-start
      justify-center max75:flex-col font-cin
    text-cus-yellow max50:w-2/3 max45:w-80%
      whitespace-nowrap max75:whitespace-normal">

      <div className="relative min75:hidden max50:w-full" >

        <Image 
        src={BarM} 
        priority
        alt="" 
        layout="responsive" />

      </div>

      <div className="relative max75:hidden ">

        <Image 
        src={Bar} 
        priority
        alt="" 
        layout="responsive" />

      </div>

    </div>
  )
}

export default Logo