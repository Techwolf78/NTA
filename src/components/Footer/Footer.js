import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Import react-icons
import homelogo from "../../assets/images/Committee/homelogo.png"; 
import mailIcon from "../../assets/images/mail-2.png"; 
import phoneIcon from "../../assets/images/phone.png"; 
import worldIcon from "../../assets/images/globe.png"; 
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      className="card-footer text-center text-lg-start"
      style={{
        background: "linear-gradient(135deg, #1a1f2e 0%, #2d364d 100%)",
        color: "#ffffff",
      }}
    >
      <section
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        style={{
          borderColor: "rgba(255, 255, 255, 0.1) !important",
        }}
      >
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <div className="icon-footer">
            {/* Social Media Icons */}
            <a
              href="https://www.facebook.com/ICEM.AVIRAT"
              className="me-4 text-white"
            >
              <FaFacebookF className="social-icon" /> 
            </a>
            <a
              href="https://www.instagram.com/icem_pune/#"
              className="me-4 text-white"
            >
              <FaInstagram className="social-icon" /> 
            </a>
            <a
              href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Findira-college-of-engineering-and-management-pune%2Fabout%2F"
              className="me-4 text-white"
            >
              <FaLinkedinIn className="social-icon" /> 
            </a>
          </div>
        </div>
      </section>
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-4">
            <Col
              className="d-flex justify-content-center me-5 mb-4"
              xs={12}
              md={4}
              lg={3}
            >
              <center>
                <Row>
                  <a href="https://indiraicem.ac.in/home">
                    <img
                      src={homelogo}
                      alt="icemLogo"
                      className="img-fluid mx-auto mb-4"
                      style={{
                        maxWidth: "350px",
                        backgroundColor: "#f0f0f0", 
                        padding: "10px", 
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </Row>
              </center>
            </Col>
            <Col
              className="mx-auto mb-4 justify-content-center"
              xs={12}
              md={4}
              lg={3}
            >
              <div className="d-flex flex-column align-items-start">
                <h6 className="text-uppercase fw-bold mb-4 text-white">
                  Useful links
                </h6>
                <div className="d-flex align-items-center mb-3">
                  <img src={mailIcon} alt="Mail" className="footer-icon" />
                  <a
                    href="mailto:research@indiraicem.ac.in"
                    className="me-4 text-white mb-3 text-decoration-none hover:text-opacity-80"
                  >
                    research@indiraicem.ac.in
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img src={worldIcon} alt="Website" className="footer-icon" />
                  <a
                    href="https://indiraicem.ac.in/"
                    className="me-4 text-white mb-3 text-decoration-none hover:text-opacity-80"
                  >
                    Indira College of Engineering and Management
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img src={worldIcon} alt="Website" className="footer-icon" />
                  <a
                    href="https://indiraicem.ac.in/"
                    className="me-4 text-white mb-3 text-decoration-none hover:text-opacity-80"
                  >
                    NTAI25
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img src={worldIcon} alt="Website" className="footer-icon" />
                  <a
                    href="/about#/about#key-note-speaker"
                    className="me-4 text-white mb-3 text-decoration-none hover:text-opacity-80"
                  >
                    ImportantDates
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-white">Contact</h6>
              <div
                className="border rounded-3 p-3 mb-3 contact-box"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="contact-title text-white mb-2">Dr. Poorna Shankar</p>
                <p className="contact-info text-white-50 mb-2">
                  Indira College of Engineering and Management
                </p>
                <p className="contact-info text-white-50 mb-0">
                  <img src={phoneIcon} alt="Phone" className="footer-icon" />
                  +91 8237816742
                </p>
              </div>
              <div
                className="border rounded-3 p-3 mb-3 contact-box"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              >
                <p className="contact-title text-white mb-2">Dr. Soumitra Das</p>
                <p className="contact-info text-white-50 mb-2">
                  Indira College of Engineering and Management
                </p>
                <p className="contact-info text-white-50 mb-0">
                  <img src={phoneIcon} alt="Phone" className="footer-icon" />
                  +91 92703 64627
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div
        className="text-center p-4"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        © 2025 Copyright :
        <a
          className="text-white ms-1 text-decoration-none fw-bold hover:text-opacity-80"
          href="https://indiraicem.ac.in/"
        >
          NTAI25
        </a>
      </div>
    </footer>
  );
}
