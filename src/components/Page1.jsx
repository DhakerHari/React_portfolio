import React from 'react'
import './page1.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Page1 = () => {
    return (
        <div id='home' className='page'>
            {/* <img src="" alt="" /> */}
            <h1 className="content-1"><span>Hi, I am Hari Prasad</span> front end developer</h1>
            <div className="content-2">I am a front end developer.i have 6months of experience</div>
            <div className="button">
                <div className="btn1"><AnchorLink className='link' offset={50} href='#contect'>Connect with me</AnchorLink></div>
                <div className="btn2">My Resume</div>
            </div>
        </div>
    )
}

export default Page1
