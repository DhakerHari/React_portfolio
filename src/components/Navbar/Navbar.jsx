import './Navbar.css'
import React, { useRef, useState } from 'react'
import hari from '../../assets/Hari.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



const Navbar = () => {
  const[menu,setMenu]=useState("home");
  const menuRef = useRef();

  const open=()=>{
    menuRef.current.style.right = "0"
  }
  const close=()=>{
    menuRef.current.style.right = "-350px"
  }
  return (
    <div className='nav'>
      <img src={hari} alt="no logo" />
      <img src={menu_open} onClick={open} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={close} alt="" className="nav-mob-close" />
        <li><AnchorLink className='link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"? <img src={underline} alt=''/>:<></> }</li>
        <li><AnchorLink className='link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me </p></AnchorLink>{menu=="about"? <img src={underline} alt=''/>:<></> }</li>
        {/* <li> <p>Projects</p>{menu=="home"? <img src={underline} alt=''/>:<></> }</li> */}
        <li><AnchorLink className='link' offset={50} href='#contect'><p onClick={()=>setMenu("contect")}>Contect</p></AnchorLink>{menu=="contect"? <img src={underline} alt=''/>:<></> }</li>
      </ul>
      <div className="contect"><AnchorLink className='link' offset={50} href='#contect'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
