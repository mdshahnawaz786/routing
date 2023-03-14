import React from 'react'
import './home.css'
// import HomeImg from '../../../images/homeImg.png'
const Home = () => {
  return (
    <div className='home'>

        <div className="leftDiv">
            <div className="divOne">
                <h1>Leading MEP & Facility</h1>
                <h1>management company in</h1>
                <h1>Dubai</h1>
            </div>
            <div className="paraDiv">
                <p>Urban Science is always ready to accept your challenges</p>
                <p>Meeting your goals is our main objective. Professional services</p>
                <p>for facility management & MEP works</p>
            </div>
            <div className="buttonDivContainer">
                <button className='companyProfileButton'>Company Profile</button>
                <button className='videoButton'>
                <i class="fa-sharp fa-solid fa-circle-play"></i>
                    Watch Video</button>
            </div>
        </div>
        <div className="rightDiv">
            <img style={{height:"100%",width:"90%"}} src='https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png' alt="" />
        </div>
      
    </div>
  )
}

export default Home
