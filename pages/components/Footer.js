import Copyrights from "./SmallComponents/Footer/Copyrights";
import BottomInfo from "./SmallComponents/Footer/BottomInfo";
import Logo from "./SmallComponents/Footer/Logo";

function Footer() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000"
    className="px-14 max45:p-4
    flex flex-col max90:items-center
    font-raleway w-full h-full -z-50">
   
      <div className="w-full max90:flex max90:flex-col max90:items-center"
      data-aos="fade-up" data-aos-duration="1000">

        <Logo />

        <BottomInfo />
          
      </div>

      <Copyrights />

    </div>
  )
}

export default Footer

