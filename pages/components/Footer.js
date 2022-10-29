import { Fade } from "react-reveal"
import tw from "tailwind-styled-components"
import Image from "next/image"
import LogoImg from "../../public/images/Infinity.png"

function Footer() {
  return (
    <Container >

        <Fade triggerOnce={true}>

            <Info>

                <div className=" relative w-1/5 -ml-2 max110:w-1/4 max90:w-1/2 max90:mt-4 max45:mt-0 min90:-mt-3 mb-2 ">

                    <Image src={LogoImg} alt="" layout="responsive" />

                </div>

                <div 
                className=" flex justify-between max90:items-center 
                w-2/3 my-1 max90:flex-col gap-5 ">

                    <div>                   
                        <p className=" text-white mb-2 max90:text-center max35:text-xs max45:text-sm max30:text-xsm">
                            The best clubbing experience <br/> in Graz</p>

                        <p className="text-cus-yellow underline cursor-pointer max90:text-center max30:text-smm max45:text-sm">
                            infinity@email.com</p>

                    </div>

                    <div className="flex justify-evenly max90:items-center text-white mb-2 max90:flex-col whitespace-nowrap">

                        <div className="flex flex-col pr-12 max90:hidden " >

                            <p>About</p>

                            <p>Menu</p>

                            <p>Find Us</p>

                        </div>

                        <div className="flex flex-col underline max90:flex-row max90:hidden  max90:justify-center max30:text-smm max45:text-sm " >

                            <p>Privacy Policy</p>

                            <p>Imprint</p>

                        </div>

                        <div className=" h-1 w-1 mb-3 bg-cus-yellow rounded-full min90:hidden text-cus-yellow">
                            
                        </div>


                        <div  className="min90:hidden flex flex-col  max90:flex-row max90:justify-center max30:text-smm max45:text-sm ">
                            <p className=" text-gray-600">Designed and developed by 
                            <span className="m:underline max90:text-cus-yellow ml-1">Blueduck</span></p>
                        </div>


                    </div>

                    <div className=" h-1 w-1 mb-3 bg-cus-yellow rounded-full min90:hidden text-cus-yellow">
                            
                    </div>

                </div>
                
            </Info>

        </Fade>
        
        <Fade triggerOnce={true}>
            <div className="mt-8 max90:mt-1 flex justify-between items-center max90:flex-col max90:gap-5 max90:justify-center max90:text-center max30:text-xsm max45:text-sm">

                <div className="flex flex-col underline max90:flex-row min90:hidden text-gray-600 max90:gap-3 max90:justify-center max30:text-smm max45:text-sm " >

                    <p>Privacy Policy</p>

                    <p>Imprint</p>

                </div>

                <div className=" h-1 w-1 bg-cus-yellow rounded-full min90:hidden text-cus-yellow">
                    
                    </div>

                <div>
                    <p className=" text-gray-600">Copyright © 2021 Infinity All Rights Reserved</p>
                </div>



                <div className="m:hidden">
                    <p className=" text-gray-600">Designed and developed by Blueduck</p>
                </div>
            
            </div>
        </Fade>
        


    </Container>
  )
}

export default Footer

const Container = tw.div`
    px-14 pb-2
    max45:p-4
    flex flex-col 
    max90:items-center
    font-raleway
    w-full
    h-full
    -z-50
`

const Info = tw.div`
    w-full
    max90:flex max90:flex-col max90:items-center

`