import React from "react";


export default function ButtonText () {

    return (
        <div class="hidden">
        <div id="about-content">
          <h2 class = "typeC">{'>'}about-me:<span class="cursor">|</span></h2>
          <p>My name is Jonah Biedermann and I am a third year computer science major at Oregon State University</p>
          <p>
            Some of the languages that I am fluent in include C++ / C, Python, C#, R, HTML, CSS, and Javascript 
          </p>
        </div>
    
        <div id="contact-content">
          <h2 class = "typeC">{'>'}contact-me:<span class="cursor">|</span></h2>
          <p>You can contact me at the email below</p>
          <ul>
            <li>Email: jonah0502 [at] gmail [dot] com</li>
          </ul>
        </div>
        
        <div id="TagFlix-About">
          <h2 class = "typeC">About TagFlix</h2>
          <p>TagFlix Is an App</p>
          <ul>
            <li>Email: jonah0502 [at] gmail [dot] com</li>
          </ul>
        </div>
      </div>
    );
  }