import Image from "next/image";
import Bar1 from "../../../../public/images/Bar1.webp"

function AboutDivTwo() {

  const content = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id faucibus faucibus mi tortor massa in vestibulum duis lacus. Pellentesque ultrices integer porta augue purus faucibus mus. Diam et volutpat etiam faucibus neque, aliquet hendrerit. Elementum eget enim lorem turpis consectetur fringilla. Sodales egestas luctus posuere commodo sit mattis etiam dignissim. Maecenas iaculis arcu praesent est. Vulputate."
  }

  return (
    <div data-aos="fade-up" data-aos-duration="1000" 
    className=" w-1/2 max90:w-full h-auto p-3 
    max90:flex flex-col justify-center items-center "  >

      <div className=" max90:flex max90:flex-col-reverse">
        
        <div className=" w-100% h-60% relative max90:mx-0 max90:px-0 max90:mt-5">

          <Image 
          src={Bar1} 
          placeholder="blur" 
          alt="" 
          layout="responsive" />

        </div>

        <p className="text-justify pt-10 max90:pt-1 
        pr-14 max110:pr-4 max90:pr-0">

          {content.text}

        </p>

      </div>

    </div>
  )
}

export default AboutDivTwo