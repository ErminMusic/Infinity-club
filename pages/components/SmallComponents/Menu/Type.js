import { TabGroup } from '@statikly/funk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle, faWineGlass, faMartiniGlass, faGlassWater, faBowlFood } from '@fortawesome/free-solid-svg-icons'

function Type() {

    const images = [
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faWineBottle} />,
            bg: true,
            name: "Champaign"
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faWineGlass} />,
            bg: false,
            name: "Wine"
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faMartiniGlass} />,
            bg: false,
            name: "Coctails"
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faGlassWater} />,
            bg: false,
            name: "Non-alcoholic"
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faBowlFood} />,
            bg: false,
            name: "Food"
        },
    ]

  return (
    <div 
    className=" flex w-full my-6 overflow-x-auto"
    data-aos="fade-up" data-aos-duration="1500">

        <TabGroup numTabs={5} direction={TabGroup.direction.HORIZONTAL}>
            {images.map((item, index) => (
                
                <div className="transition-all w-full" key={index}>
                    <TabGroup.TabList>
                        <TabGroup.Tab
                            index={index}
                            className="     
                            hover:bg-cus-yellow/90 hover:text-black
                            font-bold cursor-pointer
                            transition-all
                            w-full min-w-[130px]
                            p-4 max75:p-0 max100:px-2 max75:px-0 max75:py-4 max45:px-0
                            flex items-center justify-center flex-col"
                            activeClassName="bg-cus-yellow text-black"
                            inactiveClassName="bg-zinc-900 text-cus-yellow "
                        >
                            {item.image}

                            {item.name}
                            
                        </TabGroup.Tab>
                    </TabGroup.TabList>
                
                </div>

            ))}

        </TabGroup>

    </div>
  )
}

export default Type

