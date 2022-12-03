import { useState } from "react";
import Cookies from 'js-cookie'

function FooterCookies() {

  const [ show, setShow ] = useState(true)

  const content = {
    text : 'This site uses services that uses cookies to deliver better experience and analyze traffic. You can learn more about the services we use at our ',
    policy : 'Privacy Policy.'
  }

  const setCookies = () => {
    Cookies.set('cookie', 'true', { expires: 2 })
  }

  return (

    <>

      {show ?
      
        (
          <div 
          className=" h-auto bg-black/30 fixed 
          bottom-0 text-cus-yellow rounded
          py-4 px-8 flex justify-evenly items-center z-[100]
          max75:flex-col max75:px-5 max75:py-3 max30:py-1 max30:px-1.5 max75:items-start">

            <div className=" w-85%  max70:text-sm flex items-center max75:w-100% max75:items-start max75:mb-3 " >
              
              <p className=" text-[13px] pt-1">
                {content.text} 
                
                <span className=" text-[16px] underline cursor-pointer ">
                  {content.policy}
                </span>

              </p>
              
            </div>

            <div className=" flex " onClick={() => setCookies()} >

              <div onClick={() => setShow(false)}
              className="border border-cus-yellow text-cus-yellow hover:bg-cus-yellow/60
              transition-all hover:text-black w-28 h-80% bg-black/40 cursor-pointer
              flex flex-col justify-center items-center whitespace-nowrap	
              duration-500 text-lg max75:text-base  font-medium mx-2 px-1 py-2 max75:mx-0 max75:py-1 max75:px-0.5 " 
              >Accept All</div>

              <div onClick={() => setShow(false)}
              className="border border-cus-yellow text-cus-yellow hover:bg-cus-yellow/60
              transition-all hover:text-black w-36 h-80% bg-black/40 cursor-pointer
              flex flex-col justify-center items-center whitespace-nowrap
              duration-500 text-lg max75:text-base font-medium mx-2 px-1 py-2 max75:mx-0 max75:ml-3 max75:px-0.5 max75:py-1 " 
              >Only Nessesary</div>

            </div>


          </div>
        )

      :

      <></>

    }

  </>
  )
}

export default FooterCookies