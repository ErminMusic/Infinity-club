import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import AboutDivOne from './SmallComponents/About/AboutDivOne';
import AboutDivTwo from './SmallComponents/About/AboutDivTwo';

function About() {
  return (

    <div data-aos="fade-up" data-aos-duration="1000" id='ABOUT'
    className=" text-cus-yellow w-full h-100% font-raleway -z-50">

      <div className="mb-28 p-14 max75:mb-16 max90:pl-3" 
      data-aos="fade-up" data-aos-duration="1000">

        <p>Follow us on</p> 

        <FontAwesomeIcon icon={faSquareFacebook} 
        className=" mr-1 text-xl hover:animate-bounce cursor-pointer" />

        <FontAwesomeIcon icon={faInstagram} 
        className=" text-xl hover:animate-bounce cursor-pointer" />

      </div>

      <div className=" flex justify-between max90:flex-col">
  
        <AboutDivOne />

        <AboutDivTwo />

      </div>

    </div>
  )
}

export default About
