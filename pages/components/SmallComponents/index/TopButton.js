import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function TopButton() {

  const [ show, setShow ] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {show && (
        <div defer className=" w-[45px] h-[45px] topButton z-100 right-8 bottom-12 border-[3px] text-[32px]
        border-cus-yellow text-cus-yellow rounded-full p-[3px] px-1.5 cursor-pointer"
        onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} style={{fontSize: 32}}/>
        </div>
      )}
    </>
  )
}

export default TopButton
