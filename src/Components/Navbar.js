import React from 'react'

const Navbar = ({isTopOfPage}) => {
  const navbarBackground = isTopOfPage
  ? " border-b border-b-secondary "
  : " bg-primary text-black";
  return (
    <nav className={`${navbarBackground} backdrop-blur-strong fixed top-0 left-0 w-full z-10 `}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-white text-lg font-semibold">Logo</div>


        <div className='flex items-center justify-around w-auto gap-8 md:gap-6'>
          <div className="flex justify-center items-center space-x-4">
          <a href="#home" className="text-white hover:text-secondary">Home</a>
          <a href="#about" className="text-white  hover:text-secondary">About</a>
          <a href="#services" className="text-white  hover:text-secondary">Services</a>
          </div>
          <div>
             <a href="#contact" className="flex items-center justify-center bg-secondary w-20 h-[40px] text-[#202630] font-bold px-12 rounded-md">Contact</a>
          </div>
          
        </div>
    </div>
     
    </nav>


  )
}

export default Navbar