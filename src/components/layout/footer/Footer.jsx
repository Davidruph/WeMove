import { logo, facebook, twitter, linkedln } from "../../../assets";
import { Link } from "react-router-dom";
import Container from "../container/Container";

function Footer() {
  return (
    <>
      <section className="footer pt-5">
        <Container>
          <div className="grid grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-12 justify-center pt-10 pb-6 gap-y-4">
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <img
                src={logo}
                alt="logo"
                className="pb-2 mx-auto block md:mx-0 md:inline"
              />
              <p className="footer-header pb-8 mb-5">Escrow-Tech</p>
              <a href="#" className="footer-quote mb-5">
                Get a quote
              </a>
            </div>
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <p className="footer-head pb-2">Company</p>
              <Link to="#" className="footer-links pb-1">
                About Us
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Terms of Service
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Privacy Policy
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Careers
              </Link>
            </div>
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <p className="footer-head pb-2">Quick Links</p>
              <Link to="#" className="footer-links pb-1">
                Home
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Services
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Contact
              </Link>
              <br />
              <br />
              <p className="footer-head pb-2">Partners</p>
              <Link to="#" className="footer-links pb-2">
                See partners
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Become a partner
              </Link>
            </div>
            <div className="text-center py-2 col-span-12 md:col-span-3 md:text-left">
              <p className="footer-head pb-2">Specialization</p>
              <Link to="#" className="footer-links pb-1">
                Artificial Intelligence
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Deep Learning
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Natural Language processing
              </Link>
              <br />
              <Link to="#" className="footer-links pb-1">
                Image Recognition
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center pt-5 pb-5">
            <div className="flex items-center">
              <img src={facebook} alt="facebook link" className="px-3" />
              <img src={twitter} alt="twitter link" className="py-3 px-3" />
              <img src={linkedln} alt="linkedln link" className="px-3" />
            </div>
            <div className="copyright">©2023 Escrow-Tech Limited</div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer;
