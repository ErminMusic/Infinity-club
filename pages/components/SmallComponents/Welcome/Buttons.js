function Buttons() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000"
    className=" flex justify-evenly items-center max75:flex-col-reverse
    w-1/2 max110:w-2/3 max30:px-8 max50:px-6 p-1" >

      <div 
      className="border border-cus-yellow text-cus-yellow hover:bg-cus-yellow/60
      transition-all hover:text-black bg-black/50 py-2 px-10 w-36 cursor-pointer
      flex flex-col justify-center items-center max45:my-2 max75:mt-2 whitespace-nowrap	
      duration-500 text-lg font-medium " 
      > Find Us</div>

      <div 
      className="border border-cus-yellow text-cus-yellow hover:bg-cus-yellow/60
      transition-all hover:text-black bg-black/80 py-2 px-10 w-36 cursor-pointer
      flex flex-col justify-center items-center max45:my-2 max75:mt-2 whitespace-nowrap	
      duration-500 text-lg font-medium " 
      > Our Menu</div>

    </div>
  )
}

export default Buttons