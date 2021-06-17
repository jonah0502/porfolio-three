import emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactUs() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_hb50fge', 'template_h0mbbce', e.target, 'user_zzIyuzdSAf9bTEG16KMp1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  //      <form className="contact-form" >

    return (
<Form onSubmit={sendEmail}>
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
  <Button variant="primary" type="submit">Submit form</Button>

  </Form>
    );
  }