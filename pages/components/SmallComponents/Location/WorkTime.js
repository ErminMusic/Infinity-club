function WorkTime() {

    const Workday = [
        {
            day: "Monday",
            time: "3:00 PM-12:00 AM",
            bg: true
        },
        {
            day: "Tuesday",
            time: "3:00 PM-12:00 AM",
            bg: true
        },
        {
            day: "Wednesday",
            time: "3:00 PM-12:00 AM",
            bg: true
        },
        {
            day: "Thursday",
            time: "3:00 PM-12:00 AM",
            bg: true
        },
        {
            day: "Friday",
            time: "3:00 PM-05:00 AM",
            bg: true
        },
        {
            day: "Saturday",
            time: "3:00 PM-05:00 AM",
            bg: false
        },
        {
            day: "Sunday",
            time: "3:00 PM-12:00 AM",
            bg: false
        },
    ]
  return (
    <div data-aos="fade-up" data-aos-duration="1000" 
    className=" flex flex-col w-full max30:text-xs">
    
        {Workday.map((item, index) => (

            <div style={{background: item.bg ? "transparent" : "#EAD185", color: item.bg ? "white" : "black"}}
            className="flex justify-between text-sm p-2 max95:px-1 w-full max30:text-xs"
            key={index}>

                <div className='flex flex-col w-1/3 max75:w-1/2'>
                    {item.day}
                </div>

                <div className='w-1/2'>
                    {item.time}
                </div>

            </div>

        ))}
        
    </div>
  )
}

export default WorkTime