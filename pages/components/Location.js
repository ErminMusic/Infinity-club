import tw from "tailwind-styled-components"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationImg from "../../public/images/Find.png"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Location() {

    const Workday = [
        {
            day: "Monday",
            time: "3:00 PM-12:00 AM"
        },
        {
            day: "Tuesday",
            time: "3:00 PM-12:00 AM"
        },
        {
            day: "Wednesday",
            time: "3:00 PM-12:00 AM"
        },
        {
            day: "Thursday",
            time: "3:00 PM-12:00 AM"
        },
        {
            day: "Friday",
            time: "3:00 PM-05:00 AM"
        },

    ]

    const Weekday = [
        {
            day: "Saturday",
            time: "3:00 PM-05:00 AM"
        },
        {
            day: "Sunday",
            time: "3:00 PM-12:00 AM"
        },
    ]

    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <Container data-aos="fade-up" data-aos-duration="1000" className="font-raleway " >
        

        <div data-aos="fade-up" data-aos-duration="1000" className=" w-1/3 h-100%
        max90:pl-0 max90:h-80%  max90:ml-0 max55:h-100% max45:w-1/2
        flex flex-col relative " >

            <Image src={LocationImg} alt="" layout="responsive" />

        </div>

        <p data-aos="fade-up" data-aos-duration="1000" className=" text-white py-5">In the heart of the Graz</p>


        <Wrap>

            <Time>


                <div data-aos="fade-up" data-aos-duration="1000" className=" m-auto text-cus-yellow my-4 w-full flex content-center items-center ">
                    <p className="text-center w-full text-lg ">WORKING HOURS</p>
                </div>
                

                <Week data-aos="fade-up" data-aos-duration="1000" className=" max30:text-xs">

                    {Workday.map((item, index) => (

                        <Days key={index}>

                            <Day>{item.day}</Day>

                            <WorkTime>{item.time}</WorkTime>

                        </Days>

                    ))}
                    
                    {Weekday.map((item, index) => (

                        <DaysYellow key={index}>

                            <Day className=" text-black" >{item.day}</Day>

                            <WorkTime className=" text-black">{item.time}</WorkTime>

                        </DaysYellow>

                    ))}
                    
                </Week>

                <div data-aos="fade-up" data-aos-duration="1000" className=" m-auto text-cus-yellow my-4 flex flex-col content-center items-center">

                    <h2 className="text-lg" >LOCATION</h2>

                    <div>
                        <LocationOnIcon /> 
                        <span className=" max30:text-smm max45:text-sm text-white">
                            Alte Poststraße 460-462 8055 Graz
                        </span>
                    </div>

                </div>

            </Time>


            <LocationMap data-aos="fade-up" data-aos-duration="1000">

                <Map className=" aspect-auto max75:aspect-square h-full" src="https://maps.google.com/maps?q=west%20palm%20beach&t=&z=15&ie=UTF8&iwloc=&output=embed" ></Map>
                
            </LocationMap>

        </Wrap>

    </Container>
  )
}

export default Location

const Container = tw.div`
    p-14
    flex flex-col
    h-full
    w-full
    max45:p-3
    max110:pt-8
    max90:p-3
    -z-50
`

const Map = tw.iframe`
    w-10/12 max110:w-full
`

const Wrap = tw.div`
    flex
    bg-zinc-700
    max75:flex-col
    h-full
`

const Time = tw.div`
    flex flex-col content-center 
    ml-10
    p-2
    w-1/3
    max110:w-2/3
    max75:w-full
    max110:ml-0
`

const Week = tw.div`
    flex flex-col

`

const Days = tw.div`
    flex 
    p-1
    text-sm
    text-neutral-200
    w-full 
    max30:text-xs
`

const DaysYellow = tw(Days)`
    bg-cus-yellow
`
 
const WorkTime = tw.div`
    w-1/2
`

const Day = tw.div`
    flex flex-col
    w-1/2
`


const LocationMap = tw.div`
    flex justify-end
    p-2 
    w-full
    h-full
`