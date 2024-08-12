// import { useState } from 'react'
import './App.css'
import './assets/all.js'

function Header({sin, sup}) {



  return (
    <header className='bg-app-200 w-full flex justify-between items-center py-4 text-app-300'>
        <div className='flex '>
          <div className="flex flex-col" >
          <img className="w-16 h-16 " src="src/assets/images/favicon.png" alt="company Logo" />
          </div>
          <div className='sm:flex flex-col justify-center hidden '>
            <div className="font-mono text-sm">
              C O R P F I N  &nbsp; H U E
            </div>
            <div className="text-xs">
              Transforming Lower Mid-Market
            </div>
          </div>
        </div>
        <div className='flex justify-around gap-4 '>
          <div>About</div>
          <div>The Hub<i className="fas fa-caret-down"></i></div>
          <div>Pricing</div>
        </div>
        <div className='flex justify-between gap-2 mr-4  text-white'>
          {sin && ( 
          <div>
            <a href="#" className='bg-app-100 font-bold px-4 py-2 rounded-xl text-xs'>Log in</a>
          </div>
          )}
           {sup && ( 
          <div>
            <a href="#" className='bg-app-200 border-green-950 border font-bold p-2 rounded-xl text-xs'>Sign up</a>
          </div>
          )}
        </div>
      </header>
  )
}

export default Header
