import tw from "tailwind-styled-components"


function Welcome() {
  return (
    <Container className="">

      <div className=" flex flex-col justify-center items-center w-full">

        <img src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FInfinity%20Logo%202.png?alt=media&token=ed69617c-9719-4b50-8cc2-9363bc387b41' 
          className="w-1/4 lg:w-1/3 m:w-2/5 smd:w-2/5 mm:w-1/2 md:w-1/3 2sm:w-2/3 2sm:px-8 mm:px-6" alt="/" />


        <div className=" w-full flex my-5 items-center mm:justify-items-start justify-center md:flex-col font-cin
         text-cus-yellow text-6xl lg:text-5xl l:text-5xl md:text-5xl mm:text-4xl mm:w-2/3 sm:text-2xl 
         2sm:text-3xl  whitespace-nowrap smd:whitespace-normal">

          <img className=" minmd:hidden md:w-2/3 mm:w-full" 
          src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FBar%20%26%20Restaurant.png?alt=media&token=c63c3791-5a50-46f0-8d3c-ebc3e4f38f22" />

          <img className=" md:hidden" 
          src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2F_Bar%20%26%20Restaurant.png?alt=media&token=586c8055-7b58-4372-b718-a3b92ac924b3" />

        </div>
              
        <p style={{color: "#E5E5E5"}} className='my-4 mb-24 md:mb-12 sm:mb-6 text-center 2sm:text-xsm 2sm:px-8 mm:px-6 mm:text-sm' 
        >Welcome to the best clubbing expirience in Graz</p>

      </div>
      
      <ButtonHolder >

        <ButtonLight >Find Us</ButtonLight>

        <ButtonDark >Our Menu</ButtonDark>

      </ButtonHolder>


    </Container>
  )
}

export default Welcome


const Container = tw.div`
  mt-1/2 px-16 pt-32 pb-40
  h-auto w-full
  flex flex-col justify-center items-center font-raleway
  md:pt-16
  md:pb-12
  sm:pt-5
  /sm:px-0
`

const ButtonLight = tw.div`
  border border-cus-yellow
  text-cus-yellow
  py-2 px-10
  w-36
  flex flex-col justify-center items-center
  bg-black/50  
  cursor-pointer
  sm:my-2
  md:mt-2
  2xl:text- xl:text- lg:text-xs
  whitespace-nowrap	
`

const ButtonDark = tw(ButtonLight)`
  opacity-90 
  
  2xl:text- xl:text- lg:text-xs
`

const ButtonHolder = tw.div`
  flex 
  justify-evenly
  items-center
  p-1
  w-1/2
  2sm:px-8 mm:px-6
  lg:w-2/3

  md:flex-col-reverse
  
`