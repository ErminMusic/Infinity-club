import { Link } from "react-scroll"

function NavbarItem() {

    const NavbarItems = [
        {
            title: "HOME",
            link: "HOME"
        },
        {
            title: "ABOUT",
            link: "ABOUT"
        },
        {
            title: "MENU",
            link: "MENU"
        },
        {
            title: "LOCATION",
            link: "LOCATION"
        }
    ]

  return (

    <>
        {NavbarItems.map((item, index) => (
            <div 
            className='my-auto min70:h-full cursor-pointer
            flex justify-start justify-content-start items-start
            px-1 max65:px-0 max70:py-1 text-xl z-100 
            max110:text-xxs max30:text-smm max50:text-xs'
     
               key={index} style={{color: "#afafaf"}} >
                <Link smooth={true} to={item.link} href={item.link}>
                    <div className=" relative uppercase max70:mr-8">

                        <div 
                        className='    
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
                        >
                            
                            {item.title}
                            
                        </div>

                    </div>
                </Link>

            </div>
        ))}
    </> 
  )
}

export default NavbarItem