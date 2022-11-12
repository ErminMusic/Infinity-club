import Image from "next/image";
import MenuImg from "../../../../public/images/Menu.webp"

function Logo() {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" 
    className="w-1/3 max45:w-1/2">

      <Image 
      src={MenuImg} 
      alt="" 
      layout="responsive" />

    </div>
  )
}

export default Logo