import { TabGroup } from '@statikly/funk'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle, faWineGlass, faMartiniGlass, faGlassWater, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import MenuList from './MenuList'

function Type() {

    const images = [
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faWineBottle} />,
            name: "Champaign",
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faWineGlass} />,
            name: "Wine"
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faMartiniGlass} />,
            name: "Coctails"
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faGlassWater} />,
            name: "Non-alcoholic"
        },
        {
            image: <FontAwesomeIcon className=" text-3xl" icon={faBowlFood} />,
            name: "Food"
        },
    ]

    const Heißgetränke = {
        title: "Heißgetränke",
        collection: [
            {
                name: "Verlängerter",
                price: '2.90'
            },
            {
                name: "Cappuccino",
                price: '3.20'
            },
            {
                name: "Caffe Latte",
                price: '3.50'
            },
            {
                name: "Kleiner Brauner",
                price: '2.60'
            },
            {
                name: "Großer Brauner",
                price: '3.90'
            },
            {
                name: "Espresso",
                price: '2.60'
            },
            {
                name: "Tee div, Sorten",
                price: '2.60'
            },
        ]
    }

    const BioLimonaden = {
        title: "BioLimonaden",
        collection: [
            {
                name: "Lemon Prickelnd",
                price: '4.20'
            },
            {
                name: "Lemon Still",
                price: '3.90'
            },
            {
                name: "Kirsche Prickelnd",
                price: '4.20'
            },
            {
                name: "Kirsche Stillr",
                price: '3.90'
            },
            {
                name: "Gruntee-Kaktusfeige Prickelnd",
                price: '4.20'
            },
            {
                name: "Gruntee-Kaktusfeige Still",
                price: '3.90'
            }
        ]
    }

    const Soda = {
        title: "Soda, Mineral",
        collection: [
            {
                name: "Römerquelle Prickelnd",
                price: '2.90'
            },
            {
                name: "Römerquelle Still",
                price: '2.90'
            },
            {
                name: "Soda Zitrone",
                price: '2.90'
            },
        ]
    }

    const RedWine = {
        title: "Red Wine",
        collection: [
            {
                name: "Brunello Di Montalcino",
                price: '12.60'
            },
            {
                name: "Petradonice Super",
                price: '9.50'
            },
            {
                name: "Primitivo Di Manduria",
                price: '13.00'
            },
            {
                name: "Barbaresco",
                price: '15.00'
            },
            {
                name: "Mazzei - Zisola",
                price: '15.00'
            },
        ]
    }

    const WhiteWine = {
        title: "White Wine",
        collection: [
            {
                name: "Gewurztraminer",
                price: '12.60'
            },
            {
                name: "Pinot Grigio",
                price: '9.50'
            },
            {
                name: "Terlaner Classico",
                price: '13.00'
            },
            {
                name: "Jermann - Pinot Grigio",
                price: '15.00'
            },
            {
                name: "Edda Binaco Salento",
                price: '15.00'
            },
        ]
    }

    const DryMartini = {
        title: "Dry Martini",
        collection: [
            {
                name: "Classic Dry Martini",
                price: '5.60'
            },
            {
                name: "Dirty Martini",
                price: '6.50'
            },
            {
                name: "French Martini",
                price: '4.00'
            },
            {
                name: "Bikini Martini",
                price: '5.00'
            },
            {
                name: "Chocolate Martini",
                price: '6.00'
            },
            {
                name: "Lemon Drop Martini",
                price: '4.00'
            },
            {
                name: "Pomegranate Martini",
                price: '7.00'
            },
            {
                name: "Espresso Martini",
                price: '6.00'
            },
        ]
    }

    const MoscowMule = {
        title: "Moscow Mule",
        collection: [
            {
                name: "Mexican Mule",
                price: '5.60'
            },
            {
                name: "Kentucky Mule",
                price: '5.50'
            },
            {
                name: "Gin Buck",
                price: '6.00'
            },
            {
                name: "Dark 'n Stormy",
                price: '4.00'
            },
            {
                name: "Irish Mule",
                price: '4.00'
            },
        ]
    }

    const NonAlchocolic = {
        title: "Non-Alchocolic",
        collection: [
            {
                name: "Redbull",
                price: '5.60'
            },
            {
                name: "Fanta",
                price: '5.50'
            },
            {
                name: "Pepsi",
                price: '6.00'
            },
            {
                name: "Tea",
                price: '4.00'
            },
            {
                name: "Mineral",
                price: '4.00'
            },
        ]
    }

    const Burgers = {
        title: "Burgers",
        collection: [
            {
                name: "Big",
                price: '9.60'
            },
            {
                name: "Medium",
                price: '7.50'
            },
            {
                name: "Small",
                price: '6.00'
            },
        ]
    }

    const Pizza = {
        title: "Pizza",
        collection: [
            {
                name: "Magherita",
                price: '5.60'
            },
            {
                name: "Pepperoni",
                price: '5.50'
            },
            {
                name: "Cappriciosa",
                price: '6.00'
            },
        ]
    }

    const Extra = {
        title: "Extra",
        collection:[ {
            name: "Fries",
            price: '4.00'
            },
            {
                name: "Salad",
                price: '4.00'
            },
        ]
    }

  return (
    <div className='flex flex-col' >

        <TabGroup numTabs={5} direction={TabGroup.direction.HORIZONTAL}>

            <div 
            className=" flex w-full my-6 overflow-x-auto"
            data-aos="fade-up" data-aos-duration="1500">
            
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

            </div>

            


            <TabGroup.TabPanel 
            index={0} 
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
            >

                <div className=" flex flex-wrap max75:flex-col w-full">

                    <MenuList drinkName={Heißgetränke.title} drinkList={Heißgetränke.collection} />
                    
                    <MenuList drinkName={BioLimonaden.title} drinkList={BioLimonaden.collection} />

                    <MenuList drinkName={Soda.title} drinkList={Soda.collection} />

                </div>

            </TabGroup.TabPanel>

            <TabGroup.TabPanel 
            index={1} 
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
            >
                
                <div className=" flex flex-wrap max75:flex-col w-full">

                    <MenuList drinkName={RedWine.title} drinkList={RedWine.collection} />
                    
                    <MenuList drinkName={WhiteWine.title} drinkList={WhiteWine.collection} />

                </div>

            </TabGroup.TabPanel>

            <TabGroup.TabPanel 
            index={2} 
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
            >
                
                <div className=" flex flex-wrap max75:flex-col w-full">

                    <MenuList drinkName={DryMartini.title} drinkList={DryMartini.collection} />
                    
                    <MenuList drinkName={MoscowMule.title} drinkList={MoscowMule.collection} />

                </div>

            </TabGroup.TabPanel>

            <TabGroup.TabPanel 
            index={3} 
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
            >
                
                <div className=" flex flex-wrap max75:flex-col w-full">

                    <MenuList drinkName={NonAlchocolic.title} drinkList={NonAlchocolic.collection} />

                </div>

            </TabGroup.TabPanel>

            <TabGroup.TabPanel 
            index={4} 
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
            >
                
                <div className=" flex flex-wrap max75:flex-col w-full">

                    <MenuList drinkName={Burgers.title} drinkList={Burgers.collection} />
                    
                    <MenuList drinkName={Pizza.title} drinkList={Pizza.collection} />

                    <MenuList drinkName={Extra.title} drinkList={Extra.collection} />

                </div>

            </TabGroup.TabPanel>    
        </TabGroup>
    </div>

  )
}

export default Type