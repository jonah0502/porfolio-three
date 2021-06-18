import React from "react";
import emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function ButtonText () {

    const sendEmail = (e) => {
        console.log("I Ran")
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          emailjs.sendForm('service_hb50fge', 'template_h0mbbce', e.target, 'user_zzIyuzdSAf9bTEG16KMp1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        }




    return (
        <div className="hidden">
        <div id="about-content">
          <h2 className = "typeC">{'>'}about-me:<span className="cursor">|</span></h2>
          <p>My name is Jonah Biedermann and I am a third year computer science major at Oregon State University</p>
          <p>
            Some of the languages that I am fluent in include C++ / C, Python, C#, R, HTML, CSS, and Javascript 
          </p>
        </div>
    
        <div >
        <Form onSubmit={sendEmail} id="contact-content">
<Form.Group controlId="formBasicSubject">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="Subject" name="subject" />
  </Form.Group>
    <Form.Group controlId="formBasicName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control placeholder="Name" name="name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} name="message" />
  </Form.Group>
  <Button onClick={sendEmail} variant="primary" type="submit">Submit form</Button>

  </Form>
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