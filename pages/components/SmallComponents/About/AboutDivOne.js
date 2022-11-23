import Image from 'next/image';
import Bar2 from "../../../../public/images/Bar2.webp"
import AboutImg from "../../../../public/images/About.webp"

function AboutDivOne() {

  const content = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus faucibus mi tortor massa in vestibulum duis lacus. Pellentesque ultrices integer porta augue purus faucibus mus. Diam et volutpat etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem turpis consectetur fringilla. Sodales egestas luctus posuere commodo sit mattis etiam dignissim. Maecenas iaculis arcu praesent est. Vulputate."
  }

  return (
    <div 
    data-aos="fade-up" data-aos-duration="1000"
    className=" w-1/2 max90:w-full h-auto p-3 
    max90:flex flex-col justify-center items-center"
    >   
      <div className="ml-10 w-45% h-10%
      max90:pl-0 max90:h-20% max90:w-35% max90:ml-0 
      max90:right-32.5% max55:w-45% max55:right-28%
      flex flex-col relative max30:w-1/2 max30:right-25%  " >
        
        <Image 
        src={AboutImg} 
        alt="" 
        ayout="intrinsic"
        />

      </div>

      <p className="text-justify pt-5
      pl-10 pr-14 max90:px-0 max110:pr-4">

        {content.text}

      </p>
      
      <div className="pl-10 w-100% h-60% relative mt-5 
      max90:mx-0 max90:px-0 max90:mt-5 max110:mt-8">

        <Image 
        src={Bar2} 
        placeholder="blur" 
        blurDataURL="../../../../public/images/Bar2.webp"
        alt="" 
        layout="fill" />

      </div>

    </div>
  )
}

export default AboutDivOne