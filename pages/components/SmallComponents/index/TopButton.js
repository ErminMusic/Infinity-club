import React from 'react'
import BackToTop from "react-back-to-top-button"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function TopButton() {
  return (

    <BackToTop showAt={10} easing="easeInOutQuint" 
    className="w-auto relative h-auto transition-all right-4 bottom-4" >

      <ExpandLessIcon 
        className=" rounded-full text-cus-yellow border-2 border-cus-yellow
        hover:bg-cus-yellow/50 transition-all anime duration-500 z-100"
        style={{fontSize: 35}} />

    </BackToTop>
  )
}

export default TopButton
