
import { useState } from "react";
import emailjs from "emailjs-com";
import Button from 'react-bootstrap/Button';
import React from "react";
import axios from "axios";



export const Contact = (props) => {
  const initialState = {
    name: "",
    email: "",
    igname: "",
  };

  const [{ name, email, igname}, setState] = useState(initialState);
  const [show, setShow] = useState(false);

  const serviceID = "service_ippipce"
  const templateID = "template_3mqfueh"
  const public_key = "teP6eGO0Qzkrt3D4I"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState(initialState);

  const Showmessage = () => {
    if (show === false) {
      return (
        <></>
      )
    } else if (show === true) {
      return (
        <>
          <div className="text-center">
            <h1>Thank You!<br />Your Message Has Been Sent!</h1>
          </div>
        </>
      )
    }
  }

  //Enter Axios Info here...
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name: ${name}\nemail: ${email}\nigname: ${igname}`);
    const pass_message = `Name: ${name}\nEmail: ${email}\nIgName: ${igname}`
    axios.get("http://localhost:3000", {
      params: {
        message: pass_message
      }
    }).then(()=>{
      console.log("success");
      setShow(true);
      Showmessage();
      clearState();
    }).catch((e)=>{
      console.log("error");
      console.log(e);
      setShow(true);
      Showmessage();
      clearState();
      
    })
    /**
     * emailjs
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

     */
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>No Borders Ticket Giveaway</h2>
                <p>
                  Please fill out the form below to enter the "No Borders" ticket giveaway contest. To be eligible to win you must be over 18 and follow @thedjavalanche and @radiance.productions on Instagram then complete the form below.  Winners will be announced and contacted on Wednesday October 9th, 2024. 
                </p>
                <img
                  src="../img/NoBorders.jpeg"
                  width="75%"
                  top="50"
                  letf="50"
                  
                  alt="No Borders Image"
                />
                <p>Listen To: {" "}
                <a href="https://www.youtube.com/watch?v=nKRwD76iVR8" rel="nofollow">
                 "No Borders" Soca Mix by Dj Avalanche
            </a>
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
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
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="igname"
                        name="igname"
                        className="form-control"
                        placeholder="Instagram Username"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-4">
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
                <div id="success"></div>
                <Button type="submit" className="btn btn-custom btn-lg" onSubmit={handleChange}>
                  Submit
                </Button>
              </form>
              <Showmessage />
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Booking Info</h3>
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

/**
 *  <div className="form-group">
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
 */
