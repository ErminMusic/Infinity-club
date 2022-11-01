import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import AboutDivOne from './SmallComponents/About/AboutDivOne';
import AboutDivTwo from './SmallComponents/About/AboutDivTwo';

function About() {
  return (

    <div data-aos="fade-up" data-aos-duration="1000" 
    className=" text-cus-yellow w-full h-100% font-raleway -z-50">

      <div className="mb-28 p-14 max75:mb-16 max90:pl-3" 
      data-aos="fade-up" data-aos-duration="1000">

        <p>Follow us on</p> 

        <FacebookIcon className=" hover:animate-bounce cursor-pointer" />

        <InstagramIcon className=" hover:animate-bounce cursor-pointer" />

      </div>

      <div className=" flex justify-between max90:flex-col">
  
        <AboutDivOne />

        <AboutDivTwo />

      </div>

    </div>
  )
}

export default About
