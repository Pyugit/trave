import React from 'react'
import './footer.css'
import vid from '../../Assets/video2.mp4'
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={vid} loop autoPlay muted type='video/mp4' /> 
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter email Adress' />
            <button className="btn flex" type='submit'>
            <FiSend className='icon' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
