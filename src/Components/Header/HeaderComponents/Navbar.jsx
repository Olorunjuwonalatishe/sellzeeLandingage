import React from 'react'
import Logo from '../../../assets/logo.png'
import Button from './../../Button/Button';

const Navbar = () => {
  return (
    <div className=' bg-blue-600 flex items-center justify-between px-80 w_screen h-16'>
      <div className=''>
        <img src={Logo} alt="" />
      </div>
      
        <ul className='flex gap-6 text-white font-medium'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Testimonial</li>
          <li>Pricing</li>
        </ul>
          <div>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default Navbar
