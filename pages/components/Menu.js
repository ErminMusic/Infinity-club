import tw from "tailwind-styled-components"

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
            link: "https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FVector.png?alt=media&token=13148449-9767-428f-9451-0e7a8078a2f2",
            name: "Champaign"    
        },
        {
            link: "https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FVector%20(1).png?alt=media&token=45268cac-c9d0-4564-bf25-1d97614a318b",
            name: "Wine"
        },
        {
            link: "https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FVector%20(2).png?alt=media&token=193c5c2c-3a14-4668-a0ad-1a1223344938",
            name: "Coctails"
        },
        {
            link: "https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FVector%20(3).png?alt=media&token=e08161a7-4762-4f80-8ff5-fe6375de916b",
            name: "Coctails"
        },
        {
            link: "https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FVector%20(4).png?alt=media&token=d98c84a7-b7a5-4b9e-be98-86538680eee1",
            name: "Food"
        },
    ]

  return (
    <Container className="z-10 font-raleway">

        <img className="w-1/3 2sm:w-1/2" src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FOUR%20MENU.png?alt=media&token=1757651d-655d-41be-818a-f83e3b6d3c77" />

        <Type>

            {images.map((item, index) => (

                <MenuBlock key={index}>

                    <img className="h-2/3 2sm:h-1/2" src={item.link} />

                    <p className=" md:text-sm sm:text-xsm 2sm:text-xxsm" >{item.name}</p>

                </MenuBlock>

            ))}

        </Type>

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


    </Container>
  )
}

export default Menu

const Container = tw.div`
    p-14
    w-full
    m:p-3
`

const Type = tw.div`
    flex
    w-full
    justify-evenly
    my-10
    md:p-14
    md:-my-2
    sm:-my-5
`

const MenuBlock = tw.div`
    hover:bg-cus-yellow transition-all
    w-full
    md:min-w-[27%]
    mm:min-w-[29%]
    sm:min-w-[32%]
    /sm:min-w-[35%]
    2sm:min-w-[40%]
    /2sm:min-w-[42%]
    3sm:min-w-[47%]
    p-4
    md:p-0
    md:py-4
    mm:px:0
    bg-zinc-900
    flex content-center items-center justify-center  flex-col
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

