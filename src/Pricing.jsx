// import { useState } from 'react'
import './App.css'
import './assets/all.js'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import { Outlet } from 'react-router-dom'

function Pricing() {


  return ( 
    <div className='bg-app-100 font-sans flex flex-col items-center px-4 h-full'>
      <Header sin={true} sup={true} />
      <main className='grow w-full flex flex-col px-10 py-10 bg-app-400'>
        <div className='flex flex-col px-4 gap-4  w-full sm:items-center justify-center lg:flex-row'  >
          <div className='h-full sm:w-2/3 lg:w-1/3 w-full flex flex-col text-white gap-y-6 justify-center'>
            <div className="flex flex-col overflow-hidden border-gray-800 rounded-2xl bg-app-200 gap-4 border">
              <div className="bg-app-300  text-app-100 p-4 pb-0">
                <div className=" font-bold text-center">Busines Premium</div>
                <div className="text-right text-xs">most popular</div>                
              </div>
              <div className="text-white p-4">
                Get access to all deals under &pound;2M EBITDA. (or &pound;5M ARR for Software)
              </div>
              <div className="items-center justify-center flex gap-4 text-white border-b border-gray-400 p-4">
                <div className="items-center flex gap-1">
                  <div className="font-bold text-4xl">&pound;500</div>
                    <div className="text-xs">
                      <div>Per</div>
                      <div>year</div>
                    </div>
                </div>
                <div className="border-gray-600 font-bold text-sm text-red-500 py-1 px-2 bg-app-300 border rounded-lg  ">Subscribe</div>
              </div>
              <div className="text-white border-b-8 border-b-app-300 p-4">
                <div className='font-bold'>This includes:</div>
                <ul>
                  <li><i className='font-light fas fa-check'></i>Access to deals &lt; &pound;2M EBTIDA</li>
                  <li><i className='font-light fas fa-check'></i>Auto-execute NDAs</li>
                  <li><i className='font-light fas fa-check'></i>Evaluate deal teasers</li>
                  <li><i className='font-light fas fa-check'></i>Access to confidential materials</li>
                  <li><i className='font-light fas fa-check'></i>No fees for deals with investment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='h-full sm:w-2/3 lg:w-1/3 w-full flex flex-col text-white gap-y-6 justify-center'>
            <div className="flex flex-col overflow-hidden border-gray-800 rounded-2xl bg-app-200 gap-4 border">
              <div className="bg-app-300  text-app-100 p-4 pb-0">
                <div className=" font-bold text-center">Premium</div>
                <div className="text-right text-xs"> &nbsp; </div>                
              </div>
              <div className="text-white p-4">
                Get access to all deals under &pound;2M EBITDA. (or &pound;5M ARR for Software)
              </div>
              <div className="items-center justify-center flex gap-4 text-white border-b border-gray-400 p-4">
                <div className="items-center flex gap-1">
                  <div className="font-bold text-4xl">&pound;500</div>
                    <div className="text-xs">
                      <div>Per</div>
                      <div>year</div>
                    </div>
                </div>
                <div className="border-gray-600 font-bold text-sm text-red-500 py-1 px-2 bg-app-300 border rounded-lg  ">Subscribe</div>
              </div>
              <div className="text-white border-b-8 border-b-app-300 p-4">
                <div className='font-bold'>This includes:</div>
                <ul>
                  <li><i className='font-light fas fa-check'></i>Access to deals &lt; &pound;2M EBTIDA</li>
                  <li><i className='font-light fas fa-check'></i>Auto-execute NDAs</li>
                  <li><i className='font-light fas fa-check'></i>Evaluate deal teasers</li>
                  <li><i className='font-light fas fa-check'></i>Access to confidential materials</li>
                  <li><i className='font-light fas fa-check'></i>No fees for deals with investment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='h-full sm:w-2/3 lg:w-1/3 w-full flex flex-col text-white gap-y-6 justify-center'>
            <div className="h-full flex flex-col overflow-hidden border-gray-800 rounded-2xl bg-app-200 gap-4 border">
              <div className="bg-app-300  text-app-100 p-4 pb-0">
                <div className=" font-bold text-center">Basic</div>
                <div className="text-right text-xs"></div>                
              </div>
              <div className="text-white p-4">
                Get access to all deals under &pound;2M EBITDA. (or &pound;5M ARR for Software)
              </div>
              <div className="items-center justify-center flex gap-4 text-white border-b border-gray-400 p-4">
                <div className="items-center flex gap-1">
                  <div className="font-bold text-4xl">&pound;500</div>
                    <div className="text-xs">
                      <div>Per</div>
                      <div>year</div>
                    </div>
                </div>
                <div className="border-gray-600 font-bold text-sm text-red-500 py-1 px-2 bg-app-300 border rounded-lg  ">Subscribe</div>
              </div>
              <div className="text-white border-b-8 border-b-app-300 p-4">
                <div className='font-bold'>This includes:</div>
                <ul>
                  <li><i className='font-light fas fa-check'></i>Access to deals &lt; &pound;2M EBTIDA</li>
                  <li><i className='font-light fas fa-check'></i>Auto-execute NDAs</li>
                  <li><i className='font-light fas fa-check'></i>Evaluate deal teasers</li>
                  <li><i className='font-light fas fa-check'></i>Access to confidential materials</li>
                  <li><i className='font-light fas fa-check'></i>No fees for deals with investment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='h-full sm:w-2/3 lg:w-1/3 w-full flex flex-col text-white gap-y-6 justify-center'>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Pricing
