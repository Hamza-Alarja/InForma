import React from "react";
import "./PlansPricing.css";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import Plans from "../Plans/Plans";
import AnimatedPages from "./../../AnimatedPages";

export default function PlansPricing() {
  return (
    <AnimatedPages>
      <div className="PlansPricing">
        <div className="PlansPricing-text ms-5 ps-5">
          <h2 className="direction text-light fw-bold ">PLANS & PRICING</h2>
          <h3 className="h1 text-warning my-4 fw-bold">
            Know your package Details
          </h3>
          <p className=" direction-p">
            What you are waiting for.. start your journey now!
          </p>
        </div>
      </div>
      <div className="container my-5">
        <span className="direction fw-bold text-muted">GUIDE</span>
        <h4 className="h1 my-3">Plans & Pricings Guide</h4>
      </div>
      <Container className="my-4 ">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Explanation of the system After registering and paying the
              subscription fee
            </Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Customer Service will contact you to activate the subscription
                  and respond to all your questions and inquiries throughout
                  your transformation journey with Informa and send your
                  information to Coach Hussein (Informa) to design a detailed
                  program for you based on
                </p>

                <div className="m-4">
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>Your
                    body details
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>Your
                    purpose in the program
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    your lifestyle
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    your preferred food
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    Any injuries
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    And any other details
                  </p>
                </div>

                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  The program is modified minimum one month according to your
                  body changes and your commitment to the program and
                  development based on your choices for the new program and the
                  vision of Coach Hussein (informa)
                </p>

                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Your program is designed by Coach Hussein (informa) from 7 to
                  10 working days and the program is sent from Coach Hussein's
                  email to your email.
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Subscription date starts one day after the date of sending the
                  first program after it is finished and ends after the end of
                  the chosen subscription period (one month), (3 months), (6
                  months) or (12 months)
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If you got any injury, or corona virus you can freeze the
                  subscription and the freezing period is as follows
                </p>
                <div className="m-4">
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>month
                    (none)
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>3
                    months (2 weeks)
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>6
                    months (1 month)
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    12 months (2 months)
                  </p>
                </div>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If you got any injury, or corona virus you can freeze the
                  subscription and the freezing period is as follows
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Nutrition plan</Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Coach Ahmed (informa) will customize your program based on a
                  scientific basis and will be based on
                </p>
                <div className="m-4">
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>Body
                    weight and height
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>Your
                    goal in the program
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>Fat and
                    muscle ratios
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    Your body type
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    The number of training days
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    Your favorite meal timings
                  </p>
                </div>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  The program is designed by Coach Ahmed (Informa) based on the
                  number of your favorite meals per day and trying to avoid any
                  un preferred food in the program.
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  The program is calculated in terms of calories and your body’s
                  need for protein, carbohydrates, and fats. The program
                  contains all the nutrients required for the body.
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  There are alternatives for each meal in the program for the
                  freedom to choose daily the desired food for today and not to
                  feel bored or forced to a specific meal.
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Each meal has its own calories (protein, carbohydrates, fats)
                  for easy inclusion of any meal outside the program with the
                  required calories
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  The food is mentioned by weight in grams for each item, with
                  recommendations, instructions and alternatives for each meal
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  There are videos from (Informa's Kitchen) to help you in
                  cooking
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  In the subscription for more than a month, after the third
                  week, the customer service contacts you to send the data to
                  Coach Hussein informa containing the results and explain to
                  him the upcoming goal for designing the new month's program
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header> workout plan</Accordion.Header>
            <Accordion.Body>
              <div className="container ">
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  The program is designed to raise your physical strength and
                  achieve your goal.
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  The program is designed according to the number of days you
                  are able to exercise, whether it is in the gym or at home
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  The program is detailed from the beginning of the exercise to
                  its end
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Mentioned in the exercise
                </p>
                <div className="m-4">
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>Warm up
                    before exercise by (video)
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    Training days per week
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    Names of exercises and target muscles
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>A video
                    for every exercise or movement you will do
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    The number sets for each exercise
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    The number of reps to be performed
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    Rest time between sets
                  </p>
                </div>

                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Coach Ahmed will customize your program according to the
                  available equipment, and also video for each exercise or
                  movement you will do with detailed explanation. the right way
                  and the wrong way, and what is the mistake that you can fall
                  into, how to avoid it, and what is the alternative to the
                  exercise if the machine is not available.. He will teach you
                  everything about the exercises and how to do it in the right
                  way.
                </p>

                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Online Schedule recording reps, sets, and weights for each
                  exercise to follow development and continue in progress
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Mega Follow-up Package</Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Directly after payment, you will be contacted from Informa
                  customer service to send Form that have all the sufficient
                  information about you and your goal and accordingly Coach
                  Ahmed (Informa) will create a program dedicated to you on the
                  details and information of your body
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Informa customer service will be available with you throughout
                  the subscription period for any inquiry about your
                  subscription details and to help you for resolving any
                  complaint
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Weekly follow-up with Coach Ahmed (informa), every week
                  photos, body measurements and weight are sent to Coach Hussein
                  (informa) via Whatsapp himself for evaluation and also if you
                  want to ask any further questions , he will be there to answer
                  any inquiry
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Mega follow-up will be with a certified Coach from Informa
                  team throughout the week, except for Friday, on an agreed
                  time, which will be scheduled with the customer service team
                  in proportion to your needs
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  In the follow-up days, a certified Coach from Informa team
                  will contact you at a specific time scheduled via WhatsApp to
                  follow up with you step by step and encourage you to comply
                  and answer all your inquiries during your journey and can help
                  you if you need any alternative to your current exercise or
                  any meal with a another meal, his main task is to make sure
                  that there are no obstacles facing you and to follow your
                  progress that are taking place and to be always behind you to
                  encourage and motivate you so that you can reach your main
                  goal
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If you are a subscriber for more than a month, you will be
                  contacted by the Informa customer service a week before the
                  end of the month to send new Form to update the data for the
                  new month so that Coach Hussein (Informa) will know enough
                  information about the month and about the changes and start
                  working on the new month program
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If possible we need Inbody, body measurements, body pictures
                  (monthly) to better evaluate the results of the past month and
                  send them to Coach Hussein (informa) via his email and this is
                  optional
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Golden Follow-up Package</Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Directly after payment, you will be contacted from the Informa
                  customer service to send Form that have all the sufficient
                  information about you and your goal and accordingly Coach
                  Hussein (Informa) will create a program dedicated to you on
                  the details and information of your body
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Informa customer service will be available with you throughout
                  the whole subscription period for any inquiry about your
                  subscription details and to help you for resolving any
                  complaint
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Golden follow-up will be 3 days a week on an agreed date,
                  which will be determined with the customer service team in
                  proportion to your needs
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  In the follow-up days, a certified coach from Informa team
                  will contact you at a specific time agreed via WhatsApp to
                  follow up with you step by step and encourage you to comply
                  and answer all your inquiries during your trip and can help
                  you if you need to replace any exercise with another exercise
                  or any meal with a another meal, his main task is to make sure
                  that there are no obstacles facing you and to follow all the
                  developments that are taking place and to be always behind you
                  to encourage and motivate you so that you can reach your main
                  goal
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Weekly follow-up with Coach Ahmed (informa), every week
                  photos, body measurements and weight are sent to Captain
                  Hussein (informa) via his e-mail for evaluation and also if
                  you want to ask any further questions , he will be with you to
                  answer any inquiry
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If you are a subscriber for more than a month, you will be
                  contacted by Informa customer service a week before the end of
                  the month to send new Form to update your information for the
                  new month so that Coach Hussein (Informa) will know enough
                  information about the month and about the changes and start
                  working on the new month’s program
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If possible we need Inbody, body measurements, body pictures
                  (monthly) to better evaluate the results of the past month and
                  send them to Coach Ahmed (informa) via his email and this is
                  optional
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Silver Follow-up Package</Accordion.Header>
            <Accordion.Body>
              <div className="container">
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Directly after payment, you will be contacted from the Informa
                  customer service to send Form that have all the sufficient
                  information about you and your goal and accordingly Coach
                  Ahmed (Informa) will create a program dedicated to you on the
                  details and information of your body
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Informa customer service will be available with you throughout
                  the subscription period for any inquiry about your
                  subscription details and to help you for resolving any
                  complaint
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If you are a subscriber for more than a month, you will be
                  contacted by Informa’s customer service a week before the end
                  of the month to send new Form to update your information for
                  the new month so that Coach Ahmed (Informa) will know enough
                  information about the month and the changes and start working
                  on the new month program
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  If possible we need Inbody, body measurements, body pictures
                  (monthly) to better evaluate the results of the past month and
                  send them to Coach Ahmed (informa) via his email and this is
                  optional
                </p>
                <p className="d-flex align-items-center justify-content-start">
                  <i className="fa-solid fa-circle-exclamation fs-5 text-warning m-3"></i>
                  Silver Follow-up is a monthly follow-up system in which the
                  communication with Coach Ahmed (informa) will be with a
                  specific number of e-mails (monthly)
                </p>
                <div className="m-4">
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>One to
                    send information and data about the body
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>
                    The other is for inquiries after sending the program
                  </p>
                  <p>
                    <i className="fa-solid fa-share mx-2 text-muted"></i>A video
                    After the month ends, photos and results will be sent for
                    evaluation
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Plans />
    </AnimatedPages>
  );
}
