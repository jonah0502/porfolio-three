import React, { useState } from 'react'
import WinBox from "winbox/src/js/winbox.js";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import pdf from '../assets/myRes.pdf'
import Button from 'react-bootstrap/Button';
import { useHistory, BrowserRouter as Router, Link } from "react-router-dom";

//      <li><Button variant="outline-light" onClick={() => handleClick({pdf})}>Resume</Button>{' '}</li>


const NavBoxes = () => {

  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
// const SubFuntion = ()=>{
//   const history = useHistory();
//   console.log(history)
//   function handleClick(path) {
//     history.push(path);
//   }
  // return(
  //   <li><Button variant="outline-light" onClick={() => handleClick({pdf})}>Resume</Button>{' '}</li>
  // );

//}

const createAbt = () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    class: "modern",
    width: '600px',
    height: '300px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: document.querySelector('#about-content'),
    onfocus: function () {
      this.setBackground(
    `linear-gradient(90deg, rgba(49,36,239,1) 
      0%, rgba(67,0,168,1) 100%)`)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
}

const createContact = () => {

  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '900px',
    class: "modern",
    height: '475px',
    top: 90,
    right: 50,
    bottom: 50,
    left: 265,
    url: "/page1",
    onfocus: function () {
        this.setBackground(
            `linear-gradient(90deg, rgba(49,36,239,1) 
              0%, rgba(67,0,168,1) 100%)`)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
}
return(

<nav className = "header abtMe">
  <ul>
  <li><Button variant="outline-light" onClick={createAbt}>About</Button>{' '}</li>
  <li><Button variant="outline-light" onClick={createContact}>Contact</Button>{' '}</li>
  <li> <a className="btn btn-outline-light"  target="_blank" href={pdf}>Resume</a></li>


</ul>
</nav>
);

}
export default NavBoxes;