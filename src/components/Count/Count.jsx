import React from "react";
import CountUp from "react-countup";
import "./Count.css";

function Count() {
  return (
    <div className="py-5 count">
      <div className="text">
        <h2 className="h1 text-center">
          We Got No Fans We Got
          <span className="text-warning fw-bold"> Family</span>
        </h2>
      </div>
      <div className="social d-flex justify-content-around align-items-center mt-5">
        <div className="fb text-center">
          <i className="fa-brands fa-facebook fs-3 my-2 text-primary"></i>
          <h6>
            <CountUp
              start={0}
              end={866}
              duration={5}
              separator=","
              formattingFn={(value) => `${value}k`}
            />
          </h6>
        </div>
        <div className="insta text-center">
          <i className="fa-brands fa-instagram fs-3 my-2 text-danger"></i>
          <h6>
            <CountUp
              start={0}
              end={866}
              duration={5}
              separator=","
              formattingFn={(value) => `${value}k`}
            />
          </h6>
        </div>
        <div className="youtube text-center">
          <i className="fa-brands fa-youtube fs-3 my-2 text-danger"></i>
          <h6>
            <CountUp
              start={0}
              end={866}
              duration={5}
              separator=","
              formattingFn={(value) => `${value}k`}
            />
          </h6>
        </div>
        <div className="tiktok text-center">
          <i className="fa-brands fa-tiktok fs-3 my-2"></i>
          <h6>
            <CountUp
              start={0}
              end={866}
              duration={5}
              separator=","
              formattingFn={(value) => `${value}k`}
            />
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Count;
