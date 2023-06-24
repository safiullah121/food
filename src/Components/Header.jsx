import React from 'react';
import Logo from './img/logo.png';
import Avatar from './img/avatar.png';
import {MdShoppingBasket} from 'react-icons/md'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {getAuth , GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {app} from '../firebase.config'

const Header = () => {
  const firebaseAuth=getAuth(app)
  const provider =new GoogleAuthProvider()
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth,provider)
  }
  return (
    <header className='fixed z-50 flex w-screen p-[40px] justify-between'>
      <Link to={'/'} className='flex items-center'>
          <img src={Logo} alt="logo " className='w-8 object-cover' />
          <p className='text-xl font-bold text-slate-900 pl-1.5'>City</p>
      </Link>
      <div className='flex items-center justify-center'>
        <ul className='flex items-center justify-center pt-0.5 gap-8'>
          {/* <li className=' text-gray-500 hover:text-slate-900 cursor-pointer duration-100 transition-all ease-in-out'>Home</li>
          <li className=' text-gray-500 hover:text-slate-900 cursor-pointer duration-100 transition-all ease-in-out'>Menu</li>
          <li className=' text-gray-500 hover:text-slate-900 cursor-pointer duration-100 transition-all ease-in-out'>About Us</li>
          <li className=' text-gray-500 hover:text-slate-900 cursor-pointer duration-100 transition-all ease-in-out'>Service</li> */}
        </ul>
        <div className='flex items-center justify-center'>
        <MdShoppingBasket
         className='text-gray-600 text-2xl ml-8 cursor-pointer '/>
        <div className='bg-red-600 flex justify-center items-center rounded-full w-5 h-5 absolute top-10 right-24'>
          <p className='text-xs text-white '>2</p>
        </div>
        <motion.img whileTap={{scale:0.6}}
         src={Avatar} alt="User Profile" className='w-10 ml-6 min-w-[40px] drop-shadow-xl cursor-pointer'
         onClick={login} />
        </div>
        
        
      </div>
    </header>
  )
}

export default Header
