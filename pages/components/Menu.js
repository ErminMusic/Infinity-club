import { Fade } from "react-awesome-reveal"
import tw from "tailwind-styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineBottle, faWineGlass, faMartiniGlass, faGlassWater, faBowlFood } from '@fortawesome/free-solid-svg-icons'
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
            name: "Champaign"    
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

  return (
    <Container>

        <img className="w-1/3 2sm:w-1/2" 
        src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FOUR%20MENU.png?alt=media&token=1757651d-655d-41be-818a-f83e3b6d3c77" />

<FontAwesomeIcon icon="fa-solid fa-wine-bottle" />

        <Fade triggerOnce={true} >

        

            <Type className=" overflow-x-auto  ">

                {images.map((item, index) => (

                    <MenuBlock tabindex="1" 
                    className="text-center text-cus-yellow
                    hover:text-black hover:bg-cus-yellow/50 focus:text-black focus:bg-cus-yellow " key={index}>
                        
                        {item.image}

                        {item.name}

                    </MenuBlock>

                ))}

            </Type>

        </Fade>

        
        <Fade triggerOnce={true} >
            <Items>
                    
                <MenuList>

                    <Title>Heißgetränke</Title>

                    {Heißgetränke.map((item, index) => (

                        <List key={index}>

                            <p >{item.name}</p>

                            <span >{item.price} €</span>

                        </List>

                    ))}

                </MenuList>

                <MenuList>

                <Title>BioLimonaden</Title>

                    {BioLimonaden.map((item, index) => (

                        <List key={index}>

                            <p>{item.name}</p>

                            <span>{item.price} €</span>

                        </List>

                    ))}

                </MenuList>

                <MenuList>

                <Title>Soda, Mineral</Title>

                    {Soda.map((item, index) => (

                        <List key={index}>

                            <p>{item.name}</p>

                            <span>{item.price} €</span>

                        </List>

                    ))}

                </MenuList>

            </Items>
        </Fade>
        


    </Container>
  )
}

export default Menu

const Container = tw.div`
    p-14
    w-full
    m:p-3
    font-raleway
    -z-50
`

const Type = tw.div`
    flex
    w-full
    my-10
`

const MenuBlock = tw.div`
    hover:bg-cus-yellow 
    transition-all
    w-full
    font-bold
    min-w-[130px]
    p-4
    md:p-0
    md:py-4
    mm:px-0
    bg-zinc-900
    flex items-center  justify-center flex-col
`

const Items = tw.div`
    flex
    flex-wrap
    md:flex-col
`

const MenuList = tw.div`
    flex
    flex-wrap
    flex-col
    p-1
    w-1/2
    md:w-full
    py-2
    pr-5
`

const ItemName = tw.div`
    
`

const Title = tw.div`
    text-white
    mb-4
    sm:text-sm
`

const List = tw.div`
    py-1
    flex
    2sm:text-xsm
    text-neutral-200
    justify-between
`

