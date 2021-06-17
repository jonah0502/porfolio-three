import React from "react";
import Form from"./form.js"
import emailjs from "emailjs-com";


export default function ButtonText () {





    return (
        <div className="hidden">
        <div id="about-content">
          <h2 className = "typeC">{'>'}about-me:<span className="cursor">|</span></h2>
          <p>My name is Jonah Biedermann and I am a third year computer science major at Oregon State University</p>
          <p>
            Some of the languages that I am fluent in include C++ / C, Python, C#, R, HTML, CSS, and Javascript 
          </p>
        </div>
    
        <div id="contact-content">
          <Form />
        </div>
        
        <div id="TagFlix-About">
          <h2 className = "typeC">About TagFlix</h2>
          <p>TagFlix Is an App</p>
          <ul>
            <li>Email: jonah0502 [at] gmail [dot] com</li>
          </ul>
        </div>
      </div>
    );
  }