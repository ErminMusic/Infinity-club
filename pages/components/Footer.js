import tw from "tailwind-styled-components"

function Footer() {
  return (
    <Container>

        <Info>

            <img className=" w-1/5 -ml-2" src='https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FInfinity%20Logo%202.png?alt=media&token=ed69617c-9719-4b50-8cc2-9363bc387b41' />

            <div className=" flex justify-between w-2/3 my-1">

                <div>

                    <p className=" text-white mb-2">The best clubbing experience <br/> in Graz</p>

                    <p className="text-yellow-300 underline cursor-pointer">infinity@email.com</p>

                </div>

                <div className="flex justify-evenly text-white mb-2">

                    <div className="flex flex-col pr-12" >

                        <p>About</p>

                        <p>Menu</p>

                        <p>Find Us</p>

                    </div>

                    <div className="flex flex-col" >

                        <p>Privacy Policy</p>

                        <p>Imprint</p>

                    </div>

                </div>

            </div>
            
        </Info>

        <div className="mt-8 flex justify-between">

            <div>
                <p className=" text-gray-600">Copyright © 2021 Infinity All Rights Reserved</p>
            </div>

            <div>
                <p className=" text-gray-600">Designed and developed by Blueduck</p>
            </div>
           
        </div>


    </Container>
  )
}

export default Footer

const Container = tw.div`
    px-14 pz-14 pb-2
    flex flex-col 
    w-full
    h-full
`

const Info = tw.div`
    w-full
`