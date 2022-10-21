import React from 'react'



export default function Navbar() {

  const [menuState, setMenuState] = React.useState('menu-close');

  function toggleMenu() {
    menuState==='menu-open' ? setMenuState('menu-close') : setMenuState('menu-open')
  }

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
      <span className={`material-symbols-outlined hamburger`} onClick={toggleMenu}>drag_handle</span>
      <span className={`material-symbols-outlined hamburger ${menuState}-ham`} onClick={toggleMenu}>close</span>
      <div className={`links flex ${menuState}`}>
        <a href="/" className="link">Home</a>
        <a href="/" className="link">About</a>
        <a href="/" className="link">Contact</a>
      </div>
    </div>
  )
}
