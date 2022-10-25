import { Fade } from "react-awesome-reveal"
import tw from "tailwind-styled-components"

function Footer() {
  return (
    <Container >

        <Fade triggerOnce={true}>
            <Info>

                <img className=" w-1/5 -ml-2 lg:w-1/4 m:w-1/3 mm:w-1/2 sm:w-1/2" 
                src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FInfinity%20Logo%202.png?alt=media&token=ed69617c-9719-4b50-8cc2-9363bc387b41' />

                <div className=" flex justify-between m:items-center w-2/3 my-1 m:flex-col gap-5">

                    <div>

                        <p className=" text-white mb-2 m:text-center /sm:text-xs sm:text-sm 2sm:text-xsm">
                            The best clubbing experience <br/> in Graz</p>

                        <p className="text-cus-yellow underline cursor-pointer m:text-center 2sm:text-smm sm:text-sm">
                            infinity@email.com</p>

                    </div>

                    <div className="flex justify-evenly m:items-center text-white mb-2 m:flex-col whitespace-nowrap">

                        <div className="flex flex-col pr-12 m:hidden " >

                            <p>About</p>

                            <p>Menu</p>

                            <p>Find Us</p>

                        </div>

                        <div className="flex flex-col underline m:flex-row m:hidden  m:justify-center 2sm:text-smm sm:text-sm " >

                            <p>Privacy Policy</p>

                            <p>Imprint</p>

                        </div>

                        <div className=" h-1 w-1 mb-3 bg-cus-yellow rounded-full minm:hidden text-cus-yellow">
                            
                        </div>


                        <div  className="minm:hidden flex flex-col  m:flex-row m:justify-center 2sm:text-smm sm:text-sm ">
                            <p className=" text-gray-600">Designed and developed by 
                            <span className="m:underline m:text-cus-yellow ml-1">Blueduck</span></p>
                        </div>


                    </div>

                    <div className=" h-1 w-1 mb-3 bg-cus-yellow rounded-full minm:hidden text-cus-yellow">
                            
                    </div>

                </div>
                
            </Info>

        </Fade>
        
        <Fade triggerOnce={true}>
            <div className="mt-8 m:mt-1 flex justify-between items-center m:flex-col m:gap-5 m:justify-center m:text-center 2sm:text-xsm sm:text-sm">

                <div className="flex flex-col underline m:flex-row minm:hidden text-gray-600 m:gap-3 m:justify-center 2sm:text-smm sm:text-sm " >

                    <p>Privacy Policy</p>

                    <p>Imprint</p>

                </div>

                <div className=" h-1 w-1 bg-cus-yellow rounded-full minm:hidden text-cus-yellow">
                    
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
    sm:p-4
    flex flex-col 
    m:items-center
    font-raleway
    w-full
    h-full
`

const Info = tw.div`
    w-full
    m:flex m:flex-col m:items-center

`