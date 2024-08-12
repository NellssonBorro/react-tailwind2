// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import './assets/all.js'

function Landing() {


  return (
      <footer className='bg-app-200 w-full flex flex-col  text-app-300 '>
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
          <div>
            Test Links
            <ul className='ml-4'>
              <li><Link to={`/`}>Landing Page</Link></li>
              <li><Link to={`/pricing`}>Pricing Page</Link></li>
              <li><Link to={`/login`}>Login Page</Link></li>
              <li><Link to={`/pricing/app1`}>App1 Page</Link></li>
              <li><Link to={`/pricing/app2`}>App2 Page</Link></li>
              <li><Link to={`/pricing/app3`}>App3 Page</Link></li>
            </ul>
          </div>
        </div>
        <p className='pl-2 bg-app-100 mb-2 text-xs  font-light'>&copy; 2024 CorpFinHub | All Rights Reserved</p>
      </footer>

  )
}

export default Landing
