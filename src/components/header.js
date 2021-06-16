import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>JONAH.</div>
        <nav>
          <ul>
            <li>
              <a href='#Home'>Home</a>
            </li>
            <li>
              <a href='#AbtMe'>About</a>
            </li>
            <li>
              <a href='#TagFlix'>TagFlix</a>
            </li>
            <li>
              <a href='/'>Restaurant-Reviews</a>
            </li>
            <li className='btn'>
              <a href='/'>order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
