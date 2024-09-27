import React from "react";


export const Navigationnew = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a href="#header">
          <img src="../logo22.png" alt="Dj Avalanche Logo" width={150}></img>
          </a>
          {/*<a className="navbar-brand page-scroll" href="#page-top">
            Dj Avalanche
            </a>{" "}*/}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Biography
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Music
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Ticket Giveaway
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/**
 * <li>
              <a href="#team" className="page-scroll">
                Booking
              </a>
            </li>
 */