import React from "react";
import { Switch, Route, Link } from "react-router-dom"; 
import pdf from '../assets/myRes.pdf'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>JONAH.</div>
        <nav>
          <ul id="testNavbar">
              <li>
              <Link to={"/"} className="nav-link"> 
                Home 
              </Link> 
            </li>
            <li>
            <Link to={"/projects"} className="nav-link"> 
              Projects 
            </Link> 
            </li>
            <li>
              <a href='#TagFlix'>Experience</a>
            </li>
            <li>
              <a href='#TagFlix'>Misc</a>
            </li>
            <li className='btn'>
            <a target="_blank" href={pdf}>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
