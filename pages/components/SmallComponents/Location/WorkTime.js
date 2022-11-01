function WorkTime( { Workday } ) {
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