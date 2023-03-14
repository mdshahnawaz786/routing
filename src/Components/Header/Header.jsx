import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <div className='headerContainer'>
        <div className="headerDiv">
            <div className="imgDiv">
                <Link to='./home'>
                    <img style={{height:"100%", width:"80%"}} src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="logo" />
                </Link>
            </div>
            <div className="navbarDiv">
                <ul>
                    <Link to='/home'>
                    <li>Home</li>
                    </Link>

                    <Link to='/about'>
                    <li>About</li>
                    </Link>

                    <Link to='/project'>
                    <li>Project</li>
                    </Link>
                    
                    <Link to='/service'>
                    <li>Service</li>
                    </Link>

                    <Link to='/blog'>
                    <li>Blog</li>
                    </Link>
                    
                    <Link to='/contact'>
                    <li>Contacts</li>
                    </Link>
                </ul>
            </div>
            <div className="buttonDiv">
                    <Link to='/contact'>
                    <button className='EnquireButton'>Enquire Now</button>
                    </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header
