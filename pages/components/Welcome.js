import tw from "tailwind-styled-components"
import Image from "next/image"
import LogoImg from "../../public/images/Infinity.png"
import Bar from "../../public/images/Bar.png"
import BarM from "../../public/images/BarMM.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Welcome() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Container data-aos="fade-up" data-aos-duration="1000" className="">

      <div data-aos="fade-up" data-aos-duration="1000" className=" flex flex-col justify-center items-center w-full">

        <div data-aos="fade-up" data-aos-duration="1000"
        className="relative w-1/4 max110:w-1/3 max90:w-2/5 
        max65:w-2/5 max50:w-1/2 max45:w-2/3 max75:w-1/3 
        max30:w-2/3 max30:px-8 max50:px-6" >

          <Image src={LogoImg} alt="" layout="responsive" />

        </div>

        <div data-aos="fade-up" data-aos-duration="1000" 
          className=" 
          w-full flex my-5 items-center max50:justify-items-start
          justify-center max75:flex-col font-cin
        text-cus-yellow text-6xl max110:text-5xl 
          max100:text-5xl max75:text-5xl max50:text-4xl 
          max50:w-2/3 max45:text-2xl max30:text-3xl  
          whitespace-nowrap max75:whitespace-normal">

          <div className="relative min75:hidden max50:w-full" >

            <Image src={BarM} alt="" layout="responsive" />

          </div>

          <div className="relative max75:hidden ">

            <Image src={Bar} alt="" layout="responsive" />

          </div>

        </div>
                
          <p style={{color: "#E5E5E5"}} className='my-4 mb-24 max75:mb-12 max45:mb-6 text-center ' 
          >Welcome to the best clubbing expirience in Graz</p>
        
        </div>

      
      <ButtonHolder data-aos="fade-up" data-aos-duration="1000">

        <ButtonLight >Find Us</ButtonLight>

        <ButtonDark >Our Menu</ButtonDark>

      </ButtonHolder>


    </Container>
  )
}

export default Welcome


const Container = tw.div`
  mt-1/2 px-16 pt-32 pb-40
  h-auto w-full
  flex flex-col justify-center items-center font-raleway
  max75:pt-22
  max75:pb-12
  max45:pt-16
  max35:px-0
  max45:pt-24
  -z-50
`

const ButtonLight = tw.div`
  border border-cus-yellow
  text-cus-yellow
  hover:bg-cus-yellow/60
  transition-all
  hover:text-black
  py-2 px-10
  w-36
  flex flex-col justify-center items-center
  bg-black/50  
  cursor-pointer
  max45:my-2
  max75:mt-2
  max110:text-xs 
  whitespace-nowrap	
  duration-500
`

const ButtonDark = tw(ButtonLight)`
  bg-black/80   
  transition-all
  max110:text-xs
`

const ButtonHolder = tw.div`
  flex 
  justify-evenly
  items-center
  p-1
  w-1/2
  max30:px-8 max50:px-6
  max110:w-2/3
  max75:flex-col-reverse
  
`