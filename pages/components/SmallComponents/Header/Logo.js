import LogoImg from "../../../../public/images/Logo1.webp"
import Image from "next/image";

function Logo() {
  return (
    <div 
    className="w-1/2 p-auto flex items-center ">
    
      <div className="h-full w-1/3 max85:w-1/2 max70:h-4/5 max75:py-1.5 max70:py-0 max65:h-2/3 
      max50:h-1/2 max45:w-2/3 max30:w-4/5 max30:h-70% max25:w-full cursor-pointer " > 

        <Image 
        src={LogoImg} 
        layout="responsive" 
        alt="/"
        priority={true}
        />

      </div>

    </div>
  )
}

export default Logo