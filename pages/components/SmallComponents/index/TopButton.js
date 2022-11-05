import { useState, useEffect } from "react";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
        <div className=" topButton z-100 right-12 bottom-12 border-[3px] 
        border-cus-yellow text-cus-yellow rounded-full p-0.5 cursor-pointer"
        onClick={scrollToTop}>
          <ExpandLessIcon style={{fontSize: 32}}/>
        </div>
      )}
    </>
  )
}

export default TopButton
