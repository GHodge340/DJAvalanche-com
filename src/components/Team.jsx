import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Booking Agents</h2>
          <p>
            Interested in booking Dj Avalanche for your next event.  Contact a booking agent to begin the process of having the "Caribbean's Baddest" rock your event.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                <div className="thumbnail">
                  {" "}
                  <a href={d.social} target="_blank" rel="noreferrer">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <p>{d.contact}</p>
                    </div>
                  </a>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
