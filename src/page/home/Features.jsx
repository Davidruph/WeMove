import Header from "./Header";
import Footer from "./Footer";
import * as images from "../../assets";

function Features() {
  const bac = {
    backgroundImage: `url(${images.features})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "562px",
  };

  return (
    <>
      <Header />
      <section className="img-fluid" style={bac}></section>
      <div className="container">
        <div className="row justify-content-center pt-5">
          <p className="features-title text-start pt-3">EFFIECIENT</p>
          <h4 className="features-head pb-3">
            Convenient and Secure <br /> Ride-Booking App
          </h4>
          <p className="features-subtitle">
            WEMOVE is a cutting-edge ride-booking mobile application that
            connects passengers with <br /> nearby drivers. With easy
            ride-booking, real-time tracking, and in-app communication, it
            offers a <br /> convenient and secure transportation experience.
          </p>
        </div>

        <div className="row pt-5 pb-5">
          <div className="col-lg-4">
            <div className="d-flex gap-2">
              <div className="icon">
                <img src={images.car} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Easy Ride Booking</p>
                <p className="features-content-title">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="d-flex gap-2">
              <div className="icon">
                <img src={images.time} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Real-Time Tracking</p>
                <p className="features-content-title">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="d-flex gap-2">
              <div className="icon">
                <img src={images.chat} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">In-App Communication</p>
                <p className="features-content-title">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5 pb-5 gy-3">
          <div className="col-lg-6">
            <img src={images.features_img} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <h4 className="features-head pb-3">
              Request a Ride, Reach <br /> Your Destination
            </h4>
            <p className="features-subtitle">
              With WEMOVE, you can easily request a ride and reach your
              destination hassle-free. Our cutting-edge ride-booking mobile
              application connects you with nearby drivers, offering convenient
              and secure transportation.
            </p>
            <div className="d-flex gap-2 pb-2">
              <div className="icon">
                <img src={images.car} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Ratings and Reviews</p>
                <p className="features-content-title">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep <br /> everyone on the same page and in the loop.
                </p>
              </div>
            </div>

            <div className="d-flex gap-2">
              <div className="icon">
                <img src={images.time} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Ride History</p>
                <p className="features-content-title">
                  An all-in-one customer service platform that helps you balance{" "}
                  <br /> everything your customers need to be happy.
                </p>
              </div>
            </div>

            <div className="d-flex gap-2">
              <div className="icon">
                <img src={images.chat} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Customer Support</p>
                <p className="features-content-title">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, <br /> export, and drilldown on the data in a
                  couple clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Features;
