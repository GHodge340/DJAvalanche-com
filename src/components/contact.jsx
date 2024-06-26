
import { useState } from "react";
import emailjs from "emailjs-com";
import Button from 'react-bootstrap/Button';
import React from "react";



export const Contact = (props) => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [{ name, email, message }, setState] = useState(initialState);
  const [show, setShow] = useState(false);

  const serviceID = "service_ippipce"
  const templateID = "template_3mqfueh"
  const public_key = "HswFhGsMEnpZ-s4vo"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState(initialState);

  const Showmessage = () => {
    if(show === false){
      return (
        <></>
      )
    } else if (show === true) {
      return (
        <>  
          <div className="text-center">
            <h1>Thank You!<br/>Your Message Has Been Sent!</h1>
          </div>
        </>
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name: ${name}\nemail: ${email}\nmessage: ${message}`);
    
    emailjs
      .sendForm(serviceID, templateID, e.target, public_key)
      .then(
        (result) => {
          console.log(`Email JS Response`)
          console.log(result.text);
          setShow(true);
          clearState();

        },
        (error) => {
          console.log(error.text);
        }
      );

  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contact Us</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <Button type="submit" className="btn btn-custom btn-lg" onSubmit={handleChange}>
                  Send Message
                </Button>
              </form>
              <Showmessage />
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 DJ Avalanche  Design by{" "}
            <a href="http://devbygreg.com" rel="nofollow">
              devbygreg.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
