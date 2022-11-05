import Logo from "./SmallComponents/Menu/Logo";
import Type from "./SmallComponents/Menu/Type";

function Menu() {

  return (
    <div data-aos="fade-up"  data-aos-duration="1500" 
    className=" p-14 max90:p-3 min90:-mb-10 max90:my-5
    w-full first-line:-z-50 font-raleway" >

        <Logo />
   
        <div >

            <Type />

        </div>

    </div>
  )
}

export default Menu
