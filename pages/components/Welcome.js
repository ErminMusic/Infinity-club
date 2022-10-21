import tw from "tailwind-styled-components"


function Welcome() {
  return (
    <Container className="flex justify-center items-center z-10">

      <div className=" flex flex-col justify-center items-center">

        <img src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FInfinity%20Logo%202.png?alt=media&token=ed69617c-9719-4b50-8cc2-9363bc387b41' 
          className="w-1/4" alt="/" />

        <img src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2F_Bar%20%26%20Restaurant.png?alt=media&token=586c8055-7b58-4372-b718-a3b92ac924b3' 
          className="w-2/3 mt-5" alt="/" />

        <p style={{color: "#E5E5E5"}} className='my-4 text-center' >Welcome to the best clubbing expirience in Graz</p>

      </div>
      
      <ButtonHolder>

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
  flex flex-col justify-evenly content-center
  md:pt-16
  md:pb-12
  sm:pt-5
`

const ButtonLight = tw.div`
  border border-yellow-300
  text-yellow-300
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

  lg:w-2/3

  md:flex-col-reverse
  
`