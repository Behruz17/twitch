import React from 'react'
import './Request.css'

export default function Request() {
  return (
    <>
    <div className='request'>
<div className="transparent">
  <div id='request' className="transparent-block"></div>
<img className='request-img' src="assets/request.png" alt="" />
</div>
<div className="request-form">
    <form> 
    <p className="form-title">Leave <span>a request</span></p>
<div className="inputs">
    <input className='input-name' type="text" placeholder='Enter your name'/>
    <input className='input-email' type="email" placeholder='Enter your e-mail'/>
    <input className='input-comment' type="text" placeholder='Enter your comment'/>
    <button className='send-btn'>Send</button>
</div>
    </form>

</div>
    </div>
    <div className="footer-bg">
      <img src="assets/footer-wave2.png" alt="pic" />
    </div>
    </>
  )
}
