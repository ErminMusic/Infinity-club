import tw from "tailwind-styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Fade } from "react-reveal"
import Image from "next/image";
import AboutImg from "../../public/images/About.png"
import Bar1 from "../../public/images/Bar1.png"
import Bar2 from "../../public/images/Bar2.png"


function About() {
  return (
    <Container className="">

        <Fade  triggerOnce={true} >
        
            <Icons>

                <p>Follow us on</p> 

                <FacebookIcon className=" hover:animate-bounce cursor-pointer" />

                <InstagramIcon className=" hover:animate-bounce cursor-pointer" />

            </Icons>

        </Fade>

        <Fade triggerOnce={true} >

            <Info>
                

                <AboutDiv className="" > 

                    <Fade>

                        <div className="ml-10 w-45% h-10%
                        max90:pl-0 max90:h-20% max90:w-35% max90:ml-0 max90:right-32.5% max55:w-45% max55:right-28%
                        flex flex-col relative max30:w-1/2 max30:right-25%  " >
                        
                        <Image src={AboutImg} alt="" layout="intrinsic" />

                        </div>

                    </Fade>
                   
                    <Fade>

                        <p className="text-justify pt-5 pl-10 pr-14 max90:px-0 max110:pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus faucibus mi tortor massa in vestibulum duis lacus. Pellentesque ultrices integer porta augue purus faucibus mus. Diam et volutpat
                        etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem turpis consectetur fringilla. Sodales egestas luctus posuere commodo sit mattis etiam dignissim.
                        Maecenas iaculis arcu praesent est. Vulputate.</p>

                    </Fade>

                    <Fade>

                        <div className="pl-10 w-100% h-60% relative mt-5 max90:mx-0 max90:px-0 max90:mt-5 max110:mt-8">

                            <Image src={Bar2} alt="" layout="fill" />

                        </div>

                    </Fade>

                </AboutDiv>

                <AboutDiv>

                    <div className=" max90:flex max90:flex-col-reverse">
                        
                        <Fade>

                            <div className=" w-100% h-60% relative max90:mx-0 max90:px-0 max90:mt-5">

                                <Image src={Bar1} alt="" layout="responsive" />

                            </div>

                        </Fade>

                        <Fade>

                            <p className="text-justify pt-10 max90:pt-1 pr-14 max110:pr-4 max90:pr-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus faucibus mi tortor massa in vestibulum duis lacus. Pellentesque ultrices integer porta augue purus faucibus mus. Diam et volutpat
                            etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem turpis consectetur fringilla. Sodales egestas luctus posuere commodo sit mattis etiam dignissim.
                            Maecenas iaculis arcu praesent est. Vulputate.</p>

                        </Fade>

                    </div>

                </AboutDiv>

            </Info>

        </Fade>

    </Container>
  )
}

export default About

const Container = tw.div`
    text-cus-yellow 
    font-raleway
    -z-50
    w-full h-100%
`

const Icons = tw.div`
    mb-28
    p-14
    max75:mb-16
    max90:pl-3
    
`

const Info = tw.div`
    flex
    justify-between
    max90:flex-col
    
`

const AboutDiv = tw.div`
    w-1/2 h-auto
    max90:w-full
    max90:flex flex-col justify-center items-center
    p-3
    
    max50:text-sm
    max30:text-xsm
`