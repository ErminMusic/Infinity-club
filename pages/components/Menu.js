import tw from "tailwind-styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle, faWineGlass, faMartiniGlass, faGlassWater, faBowlFood } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";
import MenuImg from "../../public/images/Menu.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { TabGroup } from '@statikly/funk'

function Menu() {

    const Heißgetränke = [
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

    const BioLimonaden = [
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

    const Soda = [
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

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <Container data-aos="fade-up"  data-aos-duration="1500" >


        <div data-aos="fade-up" data-aos-duration="1500" className="w-1/3 max45:w-1/2">

            <Image src={MenuImg} alt="" layout="responsive" />

        </div>


        <div className="">


            <Type className=" overflow-x-auto" data-aos="fade-up" data-aos-duration="1500">

                <TabGroup numTabs={5} direction={TabGroup.direction.HORIZONTAL}>
                    {images.map((item, index) => (
                        
                        <MenuBlock key={index}>

                            <TabGroup.TabList>
                            <TabGroup.Tab
                                index={index}
                                className="     
                                hover:bg-cus-yellow/50 hover:text-black
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
                        
                        </MenuBlock>

                    ))}

                </TabGroup>

            </Type>
        

            <Items>
                    
                <MenuList data-aos="fade-up" data-aos-duration="1500">

                    <Title>Heißgetränke</Title>

                    {Heißgetränke.map((item, index) => (

                        <List key={index}>

                            <p >{item.name}</p>

                            <span >{item.price} €</span>

                        </List>

                    ))}

                </MenuList>

                <MenuList data-aos="fade-up" data-aos-duration="1500">

                    <Title>BioLimonaden</Title>

                    {BioLimonaden.map((item, index) => (

                        <List key={index}>

                            <p>{item.name}</p>

                            <span>{item.price} €</span>

                        </List>

                    ))}

                </MenuList>

                <MenuList data-aos="fade-up" data-aos-duration="1500">

                    <Title>Soda, Mineral</Title>

                    {Soda.map((item, index) => (

                        <List key={index}>

                            <p>{item.name}</p>

                            <span>{item.price} €</span>

                        </List>

                    ))}

                </MenuList>

            </Items>

        </div>

    </Container>
  )
}

export default Menu

const Container = tw.div`
    p-14
    w-full
    max90:p-3
    font-raleway
    -z-50
    min90:-mb-10
    max90:my-5
`

const Type = tw.div`
    flex
    w-full
    my-6
`

const MenuBlock = tw.div`
    transition-all
    w-full
`

const Items = tw.div`
    flex
    flex-wrap
    max75:flex-col
`

const MenuList = tw.div`
    flex
    flex-wrap
    flex-col
    p-1
    w-1/2
    max75:w-full
    py-2
    pr-5
`

const ItemName = tw.div`
    
`

const Title = tw.div`
    text-white
    mb-4
    max45:text-sm
`

const List = tw.div`
    py-1
    flex
    max27:text-xsm
    text-neutral-200
    justify-between
`

