import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-img"></div>
        <div className="logo-txt">GDSC<span>®</span></div>
      </div>
      <div className="links">
        <button><span class="material-symbols-outlined">dark_mode</span></button>
        <button><span class="material-symbols-outlined">light_mode</span></button>
        <a href="/" className="">Home</a>
        <a href="/" className="">About</a>
        <a href="/" className="">Contact</a>
      </div>
    </div>
  )
}
