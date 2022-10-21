import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar font flex">
      <a href='/'>
        <div className="logo flex">
            <span className="material-symbols-outlined logo-img">code</span>
            <div className="logo-txt">GDSC</div>
        </div>
      </a>
    <span className="material-symbols-outlined darkM">dark_mode</span>
    <span className="material-symbols-outlined lightM">light_mode</span>
      <div className="links flex">
        <a href="/" className="link">Home</a>
        <a href="/" className="link">About</a>
        <a href="/" className="link">Contact</a>
      </div>
    </div>
  )
}
