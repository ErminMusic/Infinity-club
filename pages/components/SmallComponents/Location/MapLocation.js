import { useEffect, useState } from "react"

function MapLocation() {

  const [ link, setLink ] = useState("")

  useEffect(() => {
    setLink("https://maps.google.com/maps?q=west%20palm%20beach&t=&z=15&ie=UTF8&iwloc=&output=embed", {passive: true})
  }, [])

  return (
    <div className='
    flex justify-end p-2 
    w-2/3 h-full max75:w-full'>
    
      <iframe passive={true}  className=" max110:w-full aspect-auto max75:aspect-square w-full h-full" title="Location" 
      src={link} />
    
    </div>
  )
}

export default MapLocation