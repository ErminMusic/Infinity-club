function NavbarItem() {

    const NavbarItems = [
        {
            title: "HOME",
        },
        {
            title: "ABOUT",
        },
        {
            title: "LOCATION",
        },
        {
            title: "MENU",
        }
    ]

  return (

    <>
        {NavbarItems.map((item, index) => (
            <div className='my-auto min70:h-full
            flex justify-start justify-content-start items-start
            px-1 max65:px-0 max70:py-1 text-xl z-100 cursor-pointer
            max110:text-xxs  max30:text-smm max50:text-xs'
     
               key={index} style={{color: "#afafaf"}} >
                
                <div className=" relative uppercase max70:mr-8">
    
                    <div className='    
                    relative 
                    uppercase tracking-wide
                    hover:after:opacity-100 
                    hover:after:scale-100

                    after:absolute after:content-[""]
                    after:bg-cus-yellow after:h-0.5 
                    after:right-0 after:left-0 after:-bottom-0.5 
                    after:opacity-0 after:transform 
                    after:scale-x-0 after:transition-all 
                    after:duration-300' 
                    >{item.title}</div>

                </div>

            </div>
        ))}
    </> 
  )
}

export default NavbarItem