import React from 'react';
import logo from '../images/logo.png'

export default function Header(){
  return(
    <header className="header">
      <img src={logo} className="header--image" alt="logo" />
      <h1 className="header--title">The Jasmine Dragon</h1>
      <h2 className="header--subtitle">Tea. Dramatic, Poetic.</h2>
    </header>
  )
}