import React from 'react'


export default function NavBar() {
  return (
    <>
   
    <link rel="stylesheet" href="navBar.css" />
    <div>
      <nav>
        <div className='logo'>
        <img src="/img/pngwing.com.png" alt="" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
     <button id='login'>Login</button>
      </nav>
    </div>
    </>
  )
}
