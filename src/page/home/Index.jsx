import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as images from "../../assets";
import { Link } from "react-router-dom";

function Index() {
  const containerStyles = {
    backgroundImage: `url(${images.home})`,
    backgroundRepeat: "no-repeat",
    height: "895px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const buttonStyles = {
    position: "absolute",
    bottom: "350px",
    right: "45%",
  };

  const smallScreenStyles = {
    backgroundImage: `url(${images.home})`,
    backgroundRepeat: "no-repeat",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <>
      <Header />
      <section
        className="img-fluid pt-5 d-none d-md-flex d-lg-flex"
        style={containerStyles}
      >
        <div className="text-center">
          <Link className="btn rider-btn" to="#" style={buttonStyles}>
            Become a Driver
          </Link>
        </div>
      </section>
      <section
        className="img-fluid pt-5 d-block d-sm-inline d-md-inline d-lg-none"
        style={smallScreenStyles}
      >
        <div className="text-center">
          <Link className="btn rider-btn" to="#" style={buttonStyles}>
            Become a Driver
          </Link>
        </div>
      </section>

      <div className="container">
        <div className="row justify-content-center pb-5 pt-5">
          <h4 className="features-head pb-3">
            Experience the Ultimate Convenience with <br /> WEMOVE Ride-Booking
            App
          </h4>
          <p className="features-subtitle pb-4">
            Discover a seamless and secure way to book rides and connect with{" "}
            <br /> nearby drivers.
          </p>
        </div>

        <div className="row py-5 justify-content-center align-items-center gy-3">
          <div className="col-lg-6">
            <div className="d-flex gap-2 pb-2">
              <div className="icon">
                <img src={images.people} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Passengers</p>
                <p className="features-content-title pb-2">
                  Find reliable transportation options and reach your
                  destination hassle-free <br /> with WEMOVE.
                </p>
                <Link className="btn text-primary" to={"#"}>
                  Learn more <i className="fa fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>

            <div className="d-flex gap-2 pb-2">
              <div className="icon">
                <img src={images.car} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Drivers</p>
                <p className="features-content-title pb-2">
                  Join our expansive network and embark on a rewarding journey
                  as you <br /> start earning by offering safe and efficient
                  rides to passengers.
                </p>
                <Link className="btn text-primary pb-5 ms-0" to={"#"}>
                  Learn more <i className="fa fa-arrow-right ms-1"></i>
                </Link>
                <br />
                <Link className="btn rider-btn" to={"#"}>
                  Become a Driver
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={images.index1} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="row justify-content-center py-5 align-items-center">
          <div className="col-lg-6">
            <img src={images.index2} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <h4 className="features-head pb-3">
              Ensuring your Safety <br /> on Every Ride
            </h4>
            <p className="features-subtitle pb-4">
              At WEMOVE, we prioritize your safety above all else. Our app is{" "}
              <br /> equipped with state-of-the-art security features to ensure
              that <br /> every ride you take is secure and worry-free. From
              driver <br /> verification to real-time tracking, we've got you
              covered.
            </p>
            <p className="text-sm">Get the app</p>
            <Link to={"#"}>
              <img src={images.app} className="pb-2" alt="" />
            </Link>
            <br />
            <Link to={"#"}>
              <img src={images.play} alt="" />
            </Link>
          </div>
        </div>

        <div className="row py-5 justify-content-center">
          <h4 className="features-head pb-3 text-center">
            Get a Ride with WEMOVE
          </h4>
          <p className="features-subtitle pb-4 text-center">
            Download the WEMOVE app and unlock a world of convenient and secure
            transportation that <br /> puts you in control of your travel
            experience
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <img src={images.phone} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-lg-4">
            <h6 className="card-head pb-3"> Exceptional Safety Standards</h6>
            <p className="title-card">
              The WEMOVE app prioritizes your safety with stringent driver
              background checks, vehicle inspections, and comprehensive safety
              training for drivers.
            </p>
          </div>
          <div className="col-lg-4">
            <h6 className="card-head pb-3">Versatile Transportation Options</h6>
            <p className="title-card">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and <br /> in the loop.
            </p>
          </div>
          <div className="col-lg-4">
            <h6 className="card-head pb-3">Seamless User Experience</h6>
            <p className="title-card">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and <br /> in the loop.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
