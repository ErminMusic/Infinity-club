function BottomInfo() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000"
    className=" flex justify-between max90:items-center 
    w-2/3 my-1 max90:flex-col gap-5 ">

        <div>                   
            <p 
            className=" text-white mb-2 max90:text-center
             max35:text-xs max45:text-sm max30:text-xsm">
                The best clubbing experience <br/> in Graz</p>

            <p 
            className="text-cus-yellow underline cursor-pointer 
            max90:text-center max30:text-smm max45:text-sm">
                infinity@email.com</p>

        </div>

        <div className="flex justify-evenly max90:items-center text-white 
        mb-2 max90:flex-col whitespace-nowrap">

            <div className="flex flex-col pr-12 max90:hidden " >

                <p>About</p>

                <p>Menu</p>

                <p>Find Us</p>

            </div>

            <div className="flex flex-col underline max90:flex-row max90:hidden  
            max90:justify-center max30:text-smm max45:text-sm " >

                <p>Privacy Policy</p>

                <p>Imprint</p>

            </div>


            <div className=" h-1 w-1 mb-3 bg-cus-yellow rounded-full min90:hidden text-cus-yellow" />


            <div className="min90:hidden flex flex-col  max90:flex-row max90:justify-center max30:text-smm max45:text-sm ">
                <p className=" text-gray-600">Designed and developed by 
                <span className="m:underline max90:text-cus-yellow ml-1">Blueduck</span></p>
            </div>


        </div>

        <div className=" h-1 w-1 mb-3 bg-cus-yellow rounded-full min90:hidden text-cus-yellow" />

    </div>
  )
}

export default BottomInfo