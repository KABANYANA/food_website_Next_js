
import React from "react"


const Food=()=>{

return(
    <div className="bg-white">
    
    
    <div className="bg-orange-100">
      <div className="navbar flex justify-center items-center bg-orange-100 text-black p-4 gap-60">
        <h1 id="foodle" className="text-3xl font-bold">Foodle</h1>
        <div className="nav-links flex justify-center items-center gap-10" >
          <h3 className="nav-link hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">Home</h3>
          <h3 className="nav-link hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">Offer</h3>
          <h3 className="nav-link hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">Services</h3>
          <h3 className="nav-link hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">Menu</h3>
          <h3 className="nav-link hover:border-b hover:border-red-500 hover:text-red-500 cursor-pointer">About us</h3>
        </div>
        <div className="gap-60">
          <button className="btn btn-outline hover:border-red-500 hover:bg-transparent">Login</button>
          <button className="btn btn-outline hover:border-red-500 hover:bg-transparent">Sign Up</button>
        </div>
      </div>
    </div>



{/* HOME */}
<div className="home grid grid-cols-2 gap-8 bg-orange-100 py-20">
      <div>
        <h1 className="text-3xl font-bold mb-4 ml-10 text-red-600">All fast food are<br/>available at Foodle</h1>
        <div>
          <h2 className="ml-10" style={{ fontSize: '25px', padding: '10px' }}>We Are Just A Click Away When You Crave For Delicious Food</h2>
        </div>
        <div className="home-buttons grid grid-cols-2 gap-4 ml-10">
          <button className="btn btn-outline btn-primary btn-lg hover:bg-red-600 w-39 rounded-full text-5xl" style={{ fontSize: '20px', borderRadius: '20px', padding: '10px', transition: 'background-color 0.4s' }}>Buy Now</button>
          <button className="btn btn-outline btn-primary btn-lg hover:bg-red-600 w-39 rounded-full text-5xl" style={{ fontSize: '20px', borderRadius: '20px', padding: '10px', transition: 'background-color 0.4s' }}>How To Order</button>
        </div>
      </div>
      <div>
        <img src="burger.png" alt="burger" className="w-100 h-70"/>
      </div>
    </div>

 
    {/* SERVICES */}
   
    <div className="services grid grid-cols-3 gap-8 bg-white mx-10">
  <div className="service-content flex space-x-4 p-4 bg-white rounded-lg shadow-md">
    <div>
      <img src="box.jpeg" alt="burger" className="w-10 h-10" />
    </div>
    <div>
      <h1 className="text-2xl font-semibold">Fast Delivery</h1>
      <p className="text-gray-600 mt-2">The food will be delivered to you within<br/> 1-2 hours of your ordering</p>
    </div>
  </div>
  
  <div className="service-content flex space-x-4 p-4 bg-white rounded-lg shadow-md">
    <div>
      <img src="logo2.jpg" alt="burger" className="w-10 h-10" />
    </div>
    <div>
      <h1 className="text-2xl font-semibold">Fresh Food</h1>
      <p className="text-gray-600 mt-2">The food will be delivered to you within<br/> 1-2 hours of your ordering</p>
    </div>
  </div>
  
  <div className="service-content flex space-x-4 p-4 bg-white rounded-lg shadow-md">
    <div>
      <img src="rotating.png" alt="burger" className="w-10 h-10" />
    </div>
    <div>
      <h1 className="text-2xl font-semibold">Free Delivery</h1>
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




    {/* Discount */}
    <div className="discount">
        <div className="pizza">
            <img src="pizza.jpeg" alt="pizza"/>
            </div>

            <div className="promotion">
            <img src="crepe.jpeg" alt="crepe"/>
            <img src="tacos.jpeg" alt="tacos"/>  
            </div>
        
    </div>
{/* FOOTER */}


<footer className="footer">
    <div className="footer-content">
        <div className="footer-logo">
            <a href="/">Fooodish</a>
            <h4>Continue fooodish 2023 all rights reserved</h4>
        </div>
        <div className="footer-navigation">
            <ul className="footer-menu">
                <li>
                    <a href="/">MENU</a>
                    <p>Home</p>
                    <p>Offers</p>
                    <p>Services</p>
                    <p>About Us</p>
                </li>
                <li>
                    <a href="/">INFORMATION</a>
                    <p>Menu</p>
                    <p>Quality</p>
                    <p>Make a choice</p>
                    <p>Salad with vegetable</p>
                    <p>Fast delivery</p>
                    <p>Subscribe</p>
                </li>
                <li>
                    <a href="/">CONTACT</a>
                    <p>+250 785 456 345</p>
                    <p>Explore</p>
                    <p>Info@foodish.com</p>
                    <p>1245, New York, USA</p>
                </li>
                
            </ul>
        </div>
      
    </div>
   
</footer>

</div>
)
}
export default Food