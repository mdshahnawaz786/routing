import React from 'react'
import "./contact.css"
const Contact = () => {
  return (
    <div className='contact'>
      <div className="leftSide">
        <h2>| Contact Us</h2>
        <div className="infoOne">
          <h5>Enquiry</h5>
          <div className="emailContainer">
            <p><i class="fa-solid fa-envelope"></i> enquiry@urbansciencemep.com</p>
            <p><i class="fa-solid fa-phone"></i> 0509418224</p>
          </div>
        </div>
        <hr style={{marginTop:"30px"}} />
        <div className="infoOne">
          <h5>Procurement Team</h5>
          <div className="emailContainer">
            <p><i class="fa-solid fa-envelope"></i> urbansciencemep@gmail.com</p>
            <p><i class="fa-solid fa-phone"></i> +971 543565450</p>
          </div>
        </div>
        <hr style={{marginTop:"30px"}}  />
        <div className="infoOne">
          <h5>General Enquiry</h5>
          <div className="emailContainer">
            <p><i class="fa-solid fa-phone"></i> 0509418224</p>
          </div>
        </div>
        <hr style={{marginTop:"30px"}} />
      </div>
      <div className="rightSide">
        <div className='data'>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div className='data'>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className='data'>
          <label htmlFor="name">Country</label>
          <select name="country">
            <option value="UAE">UAE</option>
            <option value="India">India</option>
            <option value="etc">etc</option>
          </select>
        </div>
        <div className='data'>
          <label htmlFor="number">Contact number</label>
          <input type="number" />
        </div>
        <div className='data'>
          <label htmlFor="number">Expected date</label>
          <input type="date" />
        </div>
        <div className='data'>
          <label htmlFor="number">Text</label>
          <textarea name="text" cols="30" rows="7"></textarea>
        </div>
      </div>
    </div>
  )
}

export default Contact