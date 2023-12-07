import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  footer_logo,
  facebook,
  linkedln,
  x,
  youtube,
  instagram,
  apple_store,
  play_store,
  mobile,
} from "../../assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="container pt-5 mb-5">
        <div className="bg-apps">
          <div className="row justify-content-center align-items-center pt-5">
            <div className="col-lg-5">
              <div className="p-3">
                <h5 className="apps-title pb-3">Join the WeMove Community</h5>
                <p className="apps-subtitle pb-4">
                  Download the WEMOVE app and experience <br /> convenient and
                  secure transportation.
                </p>
                <div className="d-flex gap-3 pb-3">
                  <Link to={"#"}>
                    <img src={apple_store} alt="apple_store" />
                  </Link>
                  <Link to={"#"}>
                    <img src={play_store} alt="play_store" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src={mobile}
                alt="mobile"
                className="d-none d-md-none d-lg-flex"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="footer mt-5">
        <div className="container-fluid">
          <div className="row justify-content-center gap-3">
            <div className="col-lg-5">
              <img src={footer_logo} alt="" />
              <p className="footer-text pt-4">
                Stay up to date on the latest features and releases by joining
                our <br /> newsletter.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 pt-2 mx-auto">
                <input type="text" className="form-control input-form" />
                <button className="input-btn bg-transparent btn">
                  Subscribe
                </button>
              </div>
              <p className="terms pt-3">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our <br /> company.
              </p>
            </div>
            <div className="col-lg-2">
              <h5 className="link-head pb-3">Wemove</h5>
              <Link className="footer-links d-block pb-3" to={"#"}>
                Book Rides
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                Airport Pickups
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                Delivery
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                Business
              </Link>
            </div>
            <div className="col-lg-2">
              <h5 className="link-head pb-3">Partner with WeMove</h5>
              <Link className="footer-links d-block pb-3" to={"#"}>
                Signup as Driver
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                Signup as Company
              </Link>
            </div>
            <div className="col-lg-2">
              <h5 className="link-head pb-3">Follow us</h5>
              <Link className="footer-links d-block pb-3" to={"#"}>
                <img src={facebook} className="me-1" alt="facebook" /> Facebook
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                <img src={instagram} className="me-1" alt="instagram" />{" "}
                Instagram
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                <img src={x} className="me-1" alt="x" /> X
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                <img src={linkedln} className="me-1" alt="linkedln" /> LinkedIn
              </Link>
              <Link className="footer-links d-block pb-3" to={"#"}>
                <img src={youtube} className="me-1" alt="youtube" /> Youtube
              </Link>
            </div>

            <hr className="border bg-white dropdown-divider divider mt-5" />

            <div className="d-flex flex-column flex-sm-row justify-content-between pt-4">
              <p className="copyright">© 2023 WEMOVE. All rights reserved.</p>
              <div className="d-flex flex-column flex-sm-row gap-4">
                <Link className="footer-links copy-links" to={"#"}>
                  Privacy Policy
                </Link>
                <Link className="footer-links copy-links" to={"#"}>
                  Terms of Service
                </Link>
                <Link className="footer-links copy-links" to={"#"}>
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
