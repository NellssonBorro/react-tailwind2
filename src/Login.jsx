// import { useState } from 'react'
import './App.css'
import './assets/all.js'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function Login() {


  return ( 
    <div className='bg-app-100 font-sans flex flex-col items-center px-4 h-full'>
      <Header />
      <main className='grow w-full flex flex-col px-10 py-10 bg-app-400'>
        <div className='flex flex-col px-4 gap-y-4 sm:gap-x-3 lg:gap-x-4 w-full justify-center sm:flex-row'  >
          <div className=' sm:w-2/4 lg:w-1/3 w-full flex flex-col text-white gap-y-6 justify-center'>
            <div className='font-bold ml-3'>Create an account</div>
            <div className=' border border-gray-600 bg-app-100 rounded-lg text-sm flex flex-col px-4 py-12 gap-y-8'>
              <div className="flex gap-4">
                <i className="fab fa-linkedin"></i>
                <span>Sign-up using Linkedin</span>
              </div>
              <div className="flex gap-4">
                <i className="fab fa-google"></i>
                <span>Sign-up using Google</span>
              </div>
            </div>
          </div>
          <div className=' w-full sm:w-2/3 lg:w-1/3  border-l border-gray-600 px-4 flex flex-col justify-center'>
            <div className="rounded-lg border border-gray-800 bg-app-200 flex flex-col px-4 py-4 gap-y-4">
              <input className=' bg-app-100 rounded-lg py-2 px-2 text-gray-300' type="text" placeholder='Username' id='uname' name='uname' />
              <input className=' bg-app-100 rounded-lg py-2 px-2 text-gray-300' type="text" placeholder='*Password' id='pwd' name='pwd' />
              <input className=' bg-app-100 rounded-lg py-2 px-2 text-gray-300' type="text" placeholder='Retype Password' id='pwd2' name='pwd2' />
              <div className='mt-4 flex justify-center gap-2 mr-4  text-white'>
                <div>
                  <a href="#" className='bg-app-100 font-bold px-4 py-2 rounded-xl text-xs'>Submit</a>
                </div>
                <div>
                  <a href="#" className='bg-app-200 border-gray-700 border font-bold p-2 rounded-xl text-xs'>Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Login
