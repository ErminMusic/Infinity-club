import tw from "tailwind-styled-components"
import MenuList from "./SmallComponents/Menu/MenuList";
import Type from "./SmallComponents/Menu/Type";

function Menu() {

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

  return (
    <div data-aos="fade-up"  data-aos-duration="1500" 
    className=" p-14 max90:p-3 min90:-mb-10 max90:my-5
    w-full first-line:-z-50 font-raleway" >
   
        <div >

            <Type />
        
            <div className=" flex flex-wrap max75:flex-col">

                <MenuList drinkName={Heißgetränke.title} drinkList={Heißgetränke.collection} />

                <MenuList drinkName={BioLimonaden.title} drinkList={BioLimonaden.collection} />

                <MenuList drinkName={Soda.title} drinkList={Soda.collection} />
                    
            </div>

        </div>

    </div>
  )
}

export default Menu

const Container = tw.div`

   
   
   
   
   
`
