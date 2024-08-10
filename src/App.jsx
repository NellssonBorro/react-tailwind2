// import { useState } from 'react'
import './App.css'
import './assets/all.js'

function App() {


  return (
    <div className='bg-app-100 font-sans flex flex-col items-center px-4 h-full'>
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
          <div>
            <a href="#" className='bg-app-100 font-bold px-4 py-2 rounded-xl text-xs'>Log in</a>
          </div>
          <div>
            <a href="#" className='bg-app-200 border-green-950 border font-bold p-2 rounded-xl text-xs'>Sign up</a>
          </div>
        </div>
      </header>
      <main className='relative w-full flex flex-col'>
        <div className='bg-fixed'  >
        {/* style={{backgroundImage: 'url("src/assets/images/heroimage.png")'}} */}
          <img className="w-full " src="src/assets/images/heroimage.png" alt="company Logo" />
        </div>
        <div className='flex flex-col text-xl w-96 p-8 rounded-xl overflow-hidden absolute left-48 bottom-24 bg-app-100/65 text-white'>
          <div className="">Welcome to CorpFinHub platform, you are welcome again...and again.
          Come join the revolution. This is CorpFinHub platform.. come join...</div>
          <div className='mt-4 flex justify-around gap-2 mr-4  text-white'>
            <div>
              <a href="#" className='bg-app-100 font-bold px-4 py-2 rounded-xl text-xs'>Buy Side</a>
            </div>
            <div>
              <a href="#" className='bg-app-200 border-white border font-bold p-2 rounded-xl text-xs'>Sell Side</a>
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-app-200 w-full flex flex-col  text-app-300'>
        <div className="flex gap-10 ml-2 mb-1">
          <div>
            The Hub
            <ul className='ml-4'>
              <li>Buy Side</li>
              <li>Sell Side</li>
              <li>Pricing</li>
              <li>Referral</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            Who we cater
            <ul className='ml-4'>
              <li>TBC</li>
            </ul>
          </div>
          <div>
            Company
            <ul className='ml-4'>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            Social
            <ul className='ml-4'>
              <li className='flex gap-2'>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>                
              </li>
            </ul>
            
          </div>
        </div>
        <p className='pl-2 bg-app-100 mb-2 text-xs  font-light'>&copy; 2024 CorpFinHub | All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App
