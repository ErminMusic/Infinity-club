function MenuList( { drinkName, drinkList } ) {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" 
    className=" flex flex-wrap flex-col
    p-1 py-2 pr-5 w-1/2 max75:w-full">

      <div className="text-white max45:text-sm mb-4" >
        {drinkName}
      </div>
  
      {drinkList.map((item, index) => (

        <div className=" 
        flex justify-between py-1
        max27:text-xsm text-white"
      
        key={index}>

          <p >{item.name}</p>

          <span >{item.price} €</span>

        </div>

      ))}

    </div>
  )
}

export default MenuList