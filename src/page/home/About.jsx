import Header from "./Header";
import Footer from "./Footer";
import * as images from "../../assets";
import { Link } from "react-router-dom";

function About() {
  const bac = {
    backgroundImage: `url(${images.about})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "562px",
  };

  return (
    <>
      <Header />
      <section className="img-fluid" style={bac}></section>
      <div className="container">
        <div className="row justify-content-center pb-5 pt-5">
          <p className="features-title text-start pt-3">ABOUT US</p>
          <h4 className="features-head pb-3">
            Connecting People, <br /> Everywhere
          </h4>
          <p className="features-subtitle pb-4">
            Welcome to WEMOVE, your trusted partner in modern, convenient, and
            secure <br /> transportation. At WEMOVE, we're not just a
            ride-hailing service; we're a commitment <br /> to making your
            journeys as seamless and enjoyable as possible. Let us share our
            story, <br /> our values, and our vision with you.
          </p>
          <div className="d-flex gap-3">
            <Link className="btn rider-btn" to={"#"}>
              Become a Driver
            </Link>
            <Link className="btn create-btn" to={"#"}>
              Sign Up
            </Link>
          </div>
        </div>

        <div className="row pt-5 pb-4 justify-content-center">
          <div className="col-lg-12">
            <div className="img">
              <img src={images.about_img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

        <div className="row pt-5 pb-5">
          <div className="col-lg-6">
            <h4 className="features-head pb-3">
              Our Journey: Creating <br /> the Future of Transportation
            </h4>
          </div>
          <div className="col-lg-6">
            <p className="features-subtitle pb-4">
              WEMOVE was born out of a simple but powerful idea: to create a
              transportation platform that would transform the way people move.
              Our journey started with a team of passionate individuals who
              believed that safe, reliable, and efficient transportation should
              be accessible to everyone. Over time, we've grown to become a
              leading name in the industry, connecting millions of riders to
              professional drivers every day.
            </p>
            <Link className="btn create-btn" to={"#"}>
              Learn More
            </Link>
          </div>
        </div>

        <div className="row pt-5 pb-5 justify-content-center align-items-center">
          <div className="col-lg-6">
            <h4 className="features-head pb-3">
              Discover the Convenience and Security of WEMOVE Ride-Booking App
            </h4>
            <p className="features-subtitle pb-4">
              Our vision is to redefine the future of transportation by
              embracing innovation and sustainability. We aim to create a world
              where mobility is not just a means of getting from point A to B
              but a delightful and eco-conscious experience. With a commitment
              to minimizing our environmental footprint and constantly improving
              our services, we aspire to be the first choice for transportation
              needs, not just for today but for the generations to come.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={images.img1} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="row pt-5 pb-5">
          <div className="col-lg-8">
            <h4 className="features-head pb-3">
              Our Core Values: Guiding Principles for <br /> Excellence
            </h4>
            <p className="features-subtitle pb-5">
              At WEMOVE, our core values are the compass that directs every
              aspect of our service. <br /> We hold ourselves to the highest
              standards, ensuring your experience with us is <br /> defined by
              safety, convenience, reliability, and your unique preferences.
              Explore our <br />
              values to understand the heart of our commitment to you.
            </p>
          </div>
        </div>

        <div className="row pt-5 pb-5 justify-content-center align-items-center gy-4">
          <div className="col-lg-6">
            <img src={images.img2} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex gap-2 pb-2">
              <div className="icon">
                <img src={images.people} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Safety First</p>
                <p className="features-content-title">
                  Your safety is paramount to us. We uphold rigorous safety
                  standards by <br /> carefully screening our drivers,
                  inspecting vehicles, and providing <br /> comprehensive
                  training to ensure that every ride with WEMOVE is <br />{" "}
                  secure.
                </p>
              </div>
            </div>
            <div className="d-flex gap-2 pb-2">
              <div className="icon">
                <img src={images.car} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">Convenience Redefined</p>
                <p className="features-content-title">
                  We understand the importance of convenience in your daily
                  life. That's <br /> why we've designed our app to be
                  user-friendly, offering a smooth and <br /> straightforward
                  experience from booking to payment.
                </p>
              </div>
            </div>
            <div className="d-flex gap-2 pb-2">
              <div className="icon">
                <img src={images.car} alt="" />
              </div>
              <div className="content pt-3">
                <p className="features-content-head">
                  Reliability and Efficiency
                </p>
                <p className="features-content-title">
                  We take pride in providing reliable transportation services.
                  Whether <br /> you're heading to work, an important meeting,
                  or a night out, you can <br /> count on WEMOVE to get you
                  there on time
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

export default About;
