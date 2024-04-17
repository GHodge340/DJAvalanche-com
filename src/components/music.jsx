import React from "react";

export const Music = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
        <img src="/logowht.png" width={300}></img>
          <h2>Music Productions</h2>
          <p>
            Here are some of the chart topping Caribbean hit songs produced by Dj Avalanche.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                {" "}
                {/*<i className={d.icon}></i>*/}
                <div className="service-desc">
                  <a href={d.link} target="_blank">
                    <img src={d.image} width={300} />
                    <h3>{d.name}</h3>
                  </a>
                  {/*<p>{d.text}</p>*/}
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
