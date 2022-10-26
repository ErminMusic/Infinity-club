import tw from "tailwind-styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Fade } from "react-awesome-reveal"

function About() {
  return (
    <Container className="">

        <Fade triggerOnce={true} >
        
            <Icons>

                <p>Follow us on</p>

                <FacebookIcon className=" cursor-pointer" />

                <InstagramIcon className=" cursor-pointer" />

            </Icons>

        </Fade>

        <Fade triggerOnce={true} >

            <Info>
                

                <AboutDiv>

                    <div className=" w-full " >

                        <img className=" pl-10 pb-10 w-1/2 2sm:w-1/2 m:pl-0 " 
                        src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2Fabout%20infinity.png?alt=media&token=7bdb17b0-13ae-4466-85ed-306e8974c10a" />

                    </div>

                    <p className="text-justify pl-10 pr-14 m:px-0 lg:pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus faucibus mi tortor massa in vestibulum duis lacus. Pellentesque ultrices integer porta augue purus faucibus mus. Diam et volutpat
                    etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem turpis consectetur fringilla. Sodales egestas luctus posuere commodo sit mattis etiam dignissim.
                    Maecenas iaculis arcu praesent est. Vulputate.</p>
                    
                    <img className=" pl-10 pt-24 w-full m:px-0 m:pt-5 lg:pt-8" 
                    src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2Ftabreez-LN4J1tbUXnM-unsplash%201.png?alt=media&token=ff1748c5-f5ef-4d47-80df-57e459001522" />


                </AboutDiv>

                <AboutDiv>

                    <div className=" m:flex m:flex-col-reverse">

                        <img className="w-full m:mt-5" 
                        src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2Fedouard-percevault-ubpo1fZg154-unsplash%201.png?alt=media&token=a8b2f280-7abb-4df2-8e35-7d06f75b8db6" />


                        <p className="text-justify pt-10 m:pt-1 pr-14 lg:pr-4 m:pr-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus faucibus mi tortor massa in vestibulum duis lacus. Pellentesque ultrices integer porta augue purus faucibus mus. Diam et volutpat
                        etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem turpis consectetur fringilla. Sodales egestas luctus posuere commodo sit mattis etiam dignissim.
                        Maecenas iaculis arcu praesent est. Vulputate.</p>

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
`

const Icons = tw.div`
    mb-28
    p-14
    md:mb-16
    m:pl-3
`

const Info = tw.div`
    flex
    justify-between
    m:flex-col
    
`

const AboutDiv = tw.div`
    w-1/2 h-auto
    m:w-full
    m:flex flex-col justify-center items-center
    p-3
    
    mm:text-sm
    2sm:text-xsm
`