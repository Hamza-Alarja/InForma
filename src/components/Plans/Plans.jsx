import React, { useState } from "react";
import "./Plans.css";
import plan2 from "./../Home/plans-1.jpeg";
import plan1 from "../Home/pricing-section-2.jpeg";
import plan3 from "./../Home/pricing-section-3.jpeg";

function Plans() {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(true);
  const handlePlanChange = (e) => {
    const selectedPlan = e.target.id;
    if (selectedPlan === "plan1") {
      setShowAdditionalInfo(true);
    } else {
      setShowAdditionalInfo(false);
    }
  };

  return (
    <>
      <div className=" text-center PLANS">
        <h6 className="text-muted my-3 fw-bold headlines">PRICING & PLANS</h6>
        <p className="h2 fw-bold">Find The Plan That Best Suits You</p>
        <div className="choices py-4">
          <div className="button-group">
            <span className="mx-3 fw-bold">Choose your Program : </span>
            <div className="button">
              <input
                type="radio"
                id="plan1"
                name="check-plan"
                onChange={handlePlanChange}
              />
              <label className="btn-plan" htmlFor="plan1">
                <i className="fa-solid fa-utensils"></i>
                <i className="fa-solid fa-dumbbell"></i> Nutrition & WorkOut
                Plan
              </label>
            </div>
            <div className="button">
              <input
                type="radio"
                id="plan2"
                name="check-plan"
                onChange={handlePlanChange}
              />
              <label className="btn-plan" htmlFor="plan2">
                <i className="fa-solid fa-dumbbell"></i> Workout only
              </label>
            </div>
            <div className="button">
              <input
                type="radio"
                id="plan3"
                name="check-plan"
                onChange={handlePlanChange}
              />
              <label className="btn-plan" htmlFor="plan3">
                <i className="fa-solid fa-utensils"></i> Nutrition only
              </label>
            </div>
          </div>

          <div className="button-group pt-4">
            <span className="mx-3 fw-bold">Choose Plan Duration : </span>
            <div className="button">
              <input type="radio" id="months1" name="months" />
              <label className="btn-plan" htmlFor="months1">
                1 Months
              </label>
            </div>
            <div className="button">
              <input type="radio" id="months2" name="months" />
              <label className="btn-plan" htmlFor="months2">
                2 Months
              </label>
            </div>
            <div className="button">
              <input type="radio" id="months3" name="months" />
              <label className="btn-plan" htmlFor="months3">
                3 Months
              </label>
            </div>
            <div className="button">
              <input type="radio" id="months4" name="months" />
              <label className="btn-plan" htmlFor="months4">
                4 Months
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-center fw-bold fs-3">
          Choose Follow-Up Package that suits you :
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="img-container position-relative my-5">
              <img src={plan1} alt="plan & pricing" className="img-fluid" />
              <div className="overlay text-center text-light ">
                <h3 className=" fw-bold my-4">Silver Package</h3>
                <p>
                  <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                  24/7 Customer Services
                </p>
                <p>
                  <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                  Monthly email follow-up with captain <br /> <br /> ‘Informa’
                </p>
                <p>
                  <i className="fa-solid fa-xmark mx-2 fs-6 text-danger"></i>
                  Day by day follow-up with certified coach
                </p>
                <p>
                  <i className="fa-solid fa-xmark mx-2 fs-6 text-danger"></i>
                  Daily Follow-Up with Certified Coach
                </p>
                <p>
                  <i className="fa-solid fa-xmark mx-2 fs-6 text-danger"></i>
                  Weekly email Follow-Up with captain ‘Informa’
                </p>
                <p>
                  <i className="fa-solid fa-xmark mx-2 fs-6 text-danger"></i>
                  Weekly WhatsApp Follow-Up with Captain <br /> <br /> ‘Informa’
                </p>
                <div className="btn-plan my-2"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="img-container position-relative my-3 ">
              <img src={plan2} alt="plan & pricing" className="img-fluid" />
              <div className="overlay text-center text-light">
                <h3 className=" fw-bold my-5 text-warning ">Golden Package</h3>
                <p>
                  <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                  24/7 Customer Services
                </p>
                <p>
                  <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                  Monthly email follow-up with captain <br /> <br /> ‘Informa’
                </p>
                <p>
                  <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                  Day by day follow-up with certified coach
                </p>
                <p>
                  <i className="fa-solid fa-xmark mx-2 fs-6 text-danger"></i>
                  Daily Follow-Up with Certified Coach
                </p>
                <p>
                  <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                  Weekly email Follow-Up with captain ‘Informa’
                </p>
                <p>
                  <i className="fa-solid fa-xmark mx-2 fs-6 text-danger"></i>
                  Weekly WhatsApp Follow-Up with Captain <br /> <br /> ‘Informa’
                </p>
                <div className="btn-plan my-4"></div>
              </div>
            </div>
          </div>

          {showAdditionalInfo && (
            <div className="col-lg-4 col-md-6 col-sm-12 ">
              <div className="img-container position-relative my-5">
                <img src={plan3} alt="plan & pricing" className="img-fluid" />
                <div className="overlay text-center text-light">
                  <h3 className=" fw-bold my-4 ">Mega Package</h3>
                  <p>
                    <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                    24/7 Customer Services
                  </p>
                  <p>
                    <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                    Monthly email follow-up with captain <br /> <br /> ‘Informa’
                  </p>
                  <p>
                    <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                    Day by day follow-up with certified coach
                  </p>
                  <p>
                    <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                    Daily Follow-Up with Certified Coach
                  </p>
                  <p>
                    <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                    Weekly email Follow-Up with captain ‘Informa’
                  </p>
                  <p>
                    <i className="fa-solid fa-check mx-2 fs-6 text-success"></i>
                    Weekly WhatsApp Follow-Up with Captain <br /> <br />{" "}
                    ‘Informa’
                  </p>
                  <div className="btn-plan my-2"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Plans;
