
import React from "react"
import Menu from "../menu"

const Food=()=>{

return(
    <div className="bg-white">
    




{/* HOME */}
<div className="home grid grid-cols-2 gap-8 bg-orange-100 py-20 ">
      <div>
        <h1 className="text-3xl font-bold mb-4 ml-10 text-red-600 ml-40 text-6xl font-medium">All fast food are<br/>available at Foodle</h1>
        <div>
          <h2 className="ml-40" style={{ fontSize: '25px' }}>We Are Just A Click Away When </h2>
          <h2 className="ml-40" style={{ fontSize: '25px' }}> You Crave For Delicious Food</h2>
        </div>
        <div className="home-buttons grid grid-cols-2 gap-4 ml-40 py-20">
          <button className="py-2 px-6 text-xl font-semibold mt-10 ml-12 bg-red-600 hover:bg-red-700 rounded-full text-white transition duration-400 transform hover:scale-110">Buy Now</button>
          <button className="py-2 px-6 text-xl font-semibold mt-10 ml-12 bg-red-600 hover:bg-red-700 rounded-full text-white transition duration-400 transform hover:scale-110">How To Order</button>
        </div>
      </div>
      <div>
        <img src="burger.png" alt="burger" className="w-100 h-70"/>
      </div>
    </div>

 
    {/* SERVICES */}
   
    <div className="services grid grid-cols-3 gap-8 bg-white mx-10 py-10 ml-40 shadow-md" >
  <div className="service-content flex space-x-4 p-4 bg-white rounded-lg ">
    <div>
      <img src="box.jpeg" alt="burger" className="w-10 h-10" />
    </div>
    <div>
      <h1 className="text-4xl font-semibold">Fast Delivery</h1>
      <p className="text-gray-600 mt-2">The food will be delivered to you within<br/> 1-2 hours of your ordering</p>
    </div>
  </div>
  
  <div className="service-content flex space-x-4 p-4 bg-white rounded-lg ">
    <div>
      <img src="logo2.jpg" alt="burger" className="w-10 h-10" />
    </div>
    <div>
      <h1 className="text-4xl font-semibold">Fresh Food</h1>
      <p className="text-gray-600 mt-2">The food will be delivered to you within<br/> 1-2 hours of your ordering</p>
    </div>
  </div>
  
  <div className="service-content flex space-x-4 p-4 bg-white rounded-lg ">
    <div>
      <img src="rotating.png" alt="burger" className="w-10 h-10" />
    </div>
    <div>
      <h1 className="text-4xl font-semibold">Free Delivery</h1>
      <p className="text-gray-600 mt-2">The food will be delivered to you within<br/> 1-2 hours of your ordering</p>
    </div>
  </div>
</div>













    {/* catego */}

 <div className="catego grid grid-cols-3 gap-8 text-center m-14">
  <div className="category-content">
    <div>
      <img src="chicken_burger.png" alt="burger" className="w-72 h-4/5 mx-auto" />
    </div>
    <div className="mt-2">
      <h1 className="text-xl font-semibold">Chicken Burger</h1>
      <p className="text-gray-600 mt-1 hover:text-orange-500 cursor-pointer transition-colors">Order Now</p>
    </div>
  </div>

  <div className="category-content">
    <div>
      <img src="chicken_pizza.jpg" alt="burger" className="w-72 h-4/5 mx-auto" />
    </div>
    <div className="mt-2">
      <h1 className="text-xl font-semibold">Chicken Pizza</h1>
      <p className="text-gray-600 mt-1 hover:text-orange-500 cursor-pointer transition-colors">Order Now</p>
    </div>
  </div>

  <div className="category-content">
    <div>
      <img src="chips.png" alt="burger" className="w-72 h-4/5 mx-auto" />
    </div>
    <div className="mt-2">
      <h1 className="text-xl font-semibold">French Fries</h1>
      <p className="text-gray-600 mt-1 hover:text-orange-500 cursor-pointer transition-colors">Order Now</p>
    </div>
  </div>
</div>


   {/* MENUUUUUS */}
   <div className="our_menu grid grid-cols-2 ml-10 text-3xl">
  <div>
    <h1 className="text-5xl font-medium ml-20" >Our <span className="text-5xl text-red-600 font-medium">Regular</span> Menu</h1>
    <p className=" py-10 ml-20" >These Are Our Regular Menus. You Can <br />Anything You Like</p>
  </div>
  <div>
    <button className="py-2 px-6 text-xl font-semibold mt-10 ml-12 bg-red-600 hover:bg-red-700 rounded-full text-white transition duration-400 transform hover:scale-110">
      See All
    </button>
  </div>
</div>

<div className="grid grid-cols-3 gap-4 ml-20 mt-10">
  {Menu.map((menu, index) => (
    <div key={index} className="w-3/6 bg-orange-200 h-50vh mt-20 rounded-lg p-4">
      <div>
        <img src={menu.image} alt={menu.title} className="w-70 h-35vh -mt-10 ml-52 rounded-full border-8 border-red-500" />
      </div>
      <div>
        <h1 className="mt-8 ml-10">{menu.title}</h1>
        <p className="ml-10">{menu.ratings}</p>
        <h3 className="mt-2 ml-10">
          {menu.price}<span><button className="py-2 px-4 text-lg font-semibold ml-6 bg-red-600 hover:bg-red-700 rounded-full text-white transition duration-400 transform hover:scale-110">Buy Now</button></span>
        </h3>
      </div>
    </div>
  ))}
</div>



    {/* Discount */}
    <div className="discount grid grid-cols-2 py-20 ">
  <div className="pizza ml-20" >
    <img src="pizza.jpeg" alt="pizza" className="w-11/12 h-4/6 rounded-2xl ml-25 object-cover" />
  </div>

  <div className="promotion">
  <img src="crepe.jpeg" alt="crepe" className="w-3/4 mb-2 h-2/6 rounded-2xl ml-2 object-cover" />
    <img src="tacos.jpeg" alt="tacos" className="w-3/4 h-2/6 rounded-2xl ml-2" />
  </div>
</div>


{/* FOOTER */}


<footer className="footer bg-orange-100  text-black py-20">
  <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
    <div className="footer-logo">
      <a href="/" className="text-5xl font-bold text-red-500 no-underline mr-20">
        Fooodish
      </a>
      <h4>Continue fooodish 2023 all rights reserved</h4>
    </div>
    <div className="footer-navigation mt-8 md:mt-0 md:mr-20">
      <ul className="footer-menu list-none p-0 flex">
        <li className="mr-20">
          <a href="/" className="text-red-500 text-3xl no-underline">MENU</a>
          <p className=" text-2xl text-lg">Home</p>
          <p className=" text-2xl text-lg">Offers</p>
          <p className=" text-2xl text-lg">Services</p>
          <p className=" text-2xl text-lg">About Us</p>
        </li>
        <li className="mr-20">
          <a href="/" className="text-red-500 text-3xl no-underline">INFORMATION</a>
          <p className="text-2xl text-lg">Menu</p>
          <p className=" text-2xl text-lg">Quality</p>
          <p className=" text-2xl text-lg">Make a choice</p>
          <p className=" text-2xl text-lg">Salad with vegetable</p>
          <p className=" text-2xl text-lg">Fast delivery</p>
          <p className=" text-2xl text-lg">Subscribe</p>
        </li>
        <li>
          <a href="/" className="text-red-500 text-3xl no-underline">CONTACT</a>
          <p className=" text-2xl text-lg">+250 785 456 345</p>
          <p className=" text-2xl text-lg">Explore</p>
          <p className=" text-2xl text-lg">Info@foodish.com</p>
          <p className=" text-2xl text-lg">1245, New York, USA</p>
        </li>
      </ul>
    </div>
  </div>
</footer>


</div>
)
}
export default Food