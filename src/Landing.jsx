// import { useState } from 'react'
import './App.css'
import './assets/all.js'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function Landing() {


  return (
    <div className='bg-app-100 font-sans flex flex-col items-center px-4 h-full'>
      <Header sin={true} sup={true} />
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
      <Footer />
    </div>
  )
}

export default Landing
