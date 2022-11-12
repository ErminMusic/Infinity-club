import Image from "next/image"
import LogoImg from "../../public/images/Infinity.webp"
import Logo from "./SmallComponents/Welcome/Logo"
import Buttons from "./SmallComponents/Welcome/Buttons"

function Welcome() {

  return (
    <div data-aos="fade-up" data-aos-duration="1000"  id="HOME"
    className="
    font-raleway mt-1/2 px-16 pt-40 pb-40 h-auto w-full 
    flex flex-col justify-center items-center -z-50
    max75:pt-22 max75:pb-12 max35:px-0 max45:pt-24">

      <div data-aos="fade-up" data-aos-duration="1000" className=" flex flex-col justify-center items-center w-full">

        <div data-aos="fade-up" data-aos-duration="1000"
        className="relative w-1/4 max110:w-1/3 max90:w-2/5 
        max75:w-1/3 max65:w-2/5 max50:w-1/2 max45:w-80%
        max30:px-8 max50:px-6" >

          <Image 
          src={LogoImg} 
          alt="" 
          layout="responsive" />

        </div>

        <Logo />
              
        <p 
        className='my-4 text-gray-200 mb-24 max60:text-lg max45:text-xl 
        max30:text-lg max75:mb-12 max45:mb-6 text-center ' 
        >Welcome to the best clubbing expirience in Graz</p>
        
      </div>

      <Buttons />

    </div>
  )
}

export default Welcome
