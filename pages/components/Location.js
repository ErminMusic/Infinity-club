import tw from "tailwind-styled-components"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Fade } from "react-awesome-reveal";

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

  return (
    <Container className="font-raleway " >
        
        <Fade triggerOnce={true} >

            <img className="w-1/4 lg:w-1/3 m:w-1/3" 
            src="https://firebasestorage.googleapis.com/v0/b/animix-play.appspot.com/o/figma%2FFIND%20US.png?alt=media&token=e98838c1-db5c-40db-8eea-b0b972df2a7a" />

            <p className=" text-white py-5">In the heart of the Graz</p>

        </Fade>


        <Wrap>

            <Time>

                <Fade triggerOnce={true} >

                    <div className=" m-auto text-cus-yellow my-4 flex content-center items-center m:text-center ">
                        <p>WORKING HOURS</p>
                    </div>
                    

                    <Week className=" 2sm:text-xs">

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

                    <div className=" m-auto text-cus-yellow my-4 flex flex-col content-center items-center">

                        <h2>LOCATION</h2>

                        <div>
                            <LocationOnIcon /> 
                            <span className=" 2sm:text-smm sm:text-sm text-white">
                                Alte Poststraße 460-462 8055 Graz
                            </span>
                        </div>

                    </div>
                </Fade>
            </Time>

            <Fade className="w-2/3 md:w-full md:h-full" triggerOnce={true} >

                <LocationMap>

                    <Map className=" aspect-auto md:aspect-square h-full" src="https://maps.google.com/maps?q=west%20palm%20beach&t=&z=15&ie=UTF8&iwloc=&output=embed" ></Map>
                    
                </LocationMap>

            </Fade>
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
    sm:p-3
    lg:pt-8
    m:p-3
    -z-50
`

const Map = tw.iframe`
    w-10/12 lg:w-full
`

const Wrap = tw.div`
    flex
    bg-zinc-700
    md:flex-col
    h-full
`

const Time = tw.div`
    flex flex-col content-center 
    ml-10
    p-2
    w-1/3
    lg:w-2/3
    md:w-full
    lg:ml-0
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
    2sm:text-xs
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
    p-2 mr-5
    w-full
    h-full
`