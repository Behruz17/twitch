import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className='about'>
<div className="transparent">
<div id='about' className="transparent-block"></div>
<img className='phone-img' src="assets/phone.png" alt="" />
</div>
      <div className="about-content">
        <h2 className="about-title">About <span>Stream Viewers</span></h2>
        <p className="about-desc">
          If you're a streamer, you know how important it is to have an active and engaged audience. <span className="bold-text">But what do you do if the number of viewers on your streams is not large enough?</span> Our service can help you solve this problem! We offer <span className='blue-text'>unique and effective tools for increasing the number of viewers</span> on your stream. <span className="bold-text">We guarantee real viewers, not bots that can harm your stream.</span> Our team of professionals can help you improve the quality of your content and achieve greater popularity on Twitch. <span className="bold-text">Together we can increase the number of viewers on your streams</span> and achieve greater success!
        </p>
        <div className="text-with-dot">
          <div className="blue-dot"></div>
          <p className='about-desc2'>
            Streamers on Twitch are becoming increasingly popular, and advertisers are taking notice. <span className="bold-text">When you start to attract more viewers, you also attract the attention of brands that want to promote their products and services.</span> Advertisers may reach out to you to place ads on your channel and gain access to your audience. The more viewers you have, the more revenue you can generate from promoting ads
          </p>
        </div>
      </div>
    </div>
  )
}
