import React from 'react'
import CopyButton from '../utils/CopyButton'

const Navbar = () => {
    const email = "prakharsaxena3416@gmail.com"
    
  return (
    <div className="navbar_Container flex flex-col sm:flex-row justify-between">
      <section className="navbar_Left p-4 sm:p-10 flex gap-2.5 items-center justify-center sm:justify-start">
        <span className="email_Text text-gray-500 select-none border-gray-400 bg-gray-100 border-1 p-2 rounded-3xl flex gap-2 text-xs sm:text-sm items-center">
          {window.innerWidth <= 640 ? "Email" : email}
          <CopyButton textToCopy={email}></CopyButton>
        </span>
        <span className="email_Text text-gray-500 select-none border-1 p-2 border-gray-400 bg-gray-100 rounded-3xl flex gap-2 items-center">
          <button className='cv_Btn bg-white h-8 sm:h-10 w-16 sm:w-20 text-xs sm:text-sm font-semibold text-center rounded-4xl cursor-pointer text-black'>CV</button>
        </span>
      </section>

      <section className="navbar_Right p-4 sm:p-10 flex gap-2.5 items-center justify-center sm:justify-start">
        <ul className="social_Tab flex gap-2 text-xs sm:text-sm font-semibold">
          <li><a href="/">Linkedln /</a></li>
          <li><a href="/">Github</a></li>
        </ul>
      </section>
    </div>
  )
}

export default Navbar
