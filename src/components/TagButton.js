import React, { useState } from 'react'
import WinBox from "winbox/src/js/winbox.js";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import Button from 'react-bootstrap/Button';
import { useHistory, BrowserRouter as Router, Link } from "react-router-dom";
import { Github } from 'react-bootstrap-icons';

//      <li><Button variant="outline-light" onClick={() => handleClick({pdf})}>Resume</Button>{' '}</li>


const NavBoxes = () => {

  const history = useHistory();
  console.log(history)
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
    mount: document.querySelector('#TagFlix-About'),
    onfocus: function () {
      this.setBackground(
    `linear-gradient(90deg, #8b0000 
      0%, #ffcccb 100%)`)
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
}

const createContact = () => {

  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '600px',
    class: "modern",
    height: '200px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 265,
    mount: document.querySelector('#contact-content'),
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
  <Router>

<nav className = "header tFlix">
  <ul>
  <li><Button variant="outline-dark" onClick={createAbt}>About</Button>{' '}</li>
  <li> <a className="btn btn-outline-dark"  target="_blank" href="https://github.com/osu-cs290-sp21/final-project-tagflix"> <Github size={25} /></a></li>
  <li> <a className="btn btn-outline-dark"  target="_blank" href="https://tagflix1.herokuapp.com/">Visit</a>
</li>  
</ul>
</nav>
</Router>
);

}
export default NavBoxes;