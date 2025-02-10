import homelogo from "../../assets/images/Committee/homelogo.png"
import headerImg from "../../assets/images/NavHeading.svg";
import abtBtm from "../../assets/images/NavBtm.svg"
import ShapeMY from "../../assets/images/abt1.png";
import Shape2 from "../../assets/images/shape2.png";
import Shape3 from "../../assets/images/shape4.png";
import Shape4 from "../../assets/images/shape3.png";
import mainguest1 from '../../assets/images/Committee/mainguest.jpeg';
import mainguest2 from '../../assets/images/Committee/mainguest2.jpeg';
import rajiv from '../../assets/images/Committee/rajiv.jpeg';
import chetan from "../../assets/images/Committee/chetan-sir.jpg";
import Pandit from "../../assets/images/Committee/Pandit.jpg";
import sahil from "../../assets/images/Committee/sahil.jpg";
import shaan from "../../assets/images/Committee/shaan.png";
import chairperson from "../../assets/images/Committee/ChairpersonsPhoto.jpg";
import Soumitra_Das from "../../assets/images/Committee/Soumitra_Das.jpg";
import Poorna_Shankar from "../../assets/images/Committee/Poorna_Shankar.jpg";
import drnileshuke from "../../assets/images/Committee/drnileshuke.jpg";
import ConferenceTracks from "../../assets/images/ConferenceTracks.png";
import ImportantDates from "../../assets/images/ImportantDates.png";


import './About.css';
import Committee from "./Committee";
import Footer from "../Footer/Footer";
import React from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';

export default function About() {
  return (
    <div className="About bg-white overflow-hidden w-100" >
      <Container fluid className="p-0">
        <div className="absolute overflow-hidden">
          <div className="absolute inset-0 justify-center mt-5">
            <div className="bg-shape1 bg-1 opacity-c bg-blur mx-3 mt-5"></div>
            <div className="bg-shape2 bg-2 opacity-c bg-blur mt-5"></div>
            <div className="bg-shape1 bg-3 opacity-c bg-blur mt-5"></div>
          </div>
        </div>
      </Container>
      <div>
        <img src={headerImg} className="w-100" />
      </div>
      <img className="shape1" style={{ width: 300 }} src={ShapeMY} alt="Shape1" />
      <img className="shape2 w-25" src={Shape2} alt="Shape2" />
      <img className="shape3 w-25" src={Shape4} alt="Shape3" />
      <img className="shape4 w-25" src={Shape3} alt="Shape4" />
      <img className="ConferenceTracks w-25" src={ConferenceTracks} alt="ConferenceTracksImg" />

      <section id="ICLVE-2023" className="relative py-24 bg-gray-100">

        {/* Content */}
        <div className="container mx-auto px-8 relative z-10">


          <div className="row">
            <div className="col"></div>
            <div className="col">
              <img className="w-100 h-100 rounded-5" src={homelogo} alt="NTAI Logo" />
            </div>
            <div className="col"></div>
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About The Conference
          </h2>

          {/* Conference Description */}
          <div className="ICLVE text-center">
            <div className="max-w-3xl mx-auto">
              <p className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-gray-700 text-lg leading-relaxed">
              Indira College of Engineering and Management, Pune, is proud to host the International Conference on "Next-Gen Technology and AI for a Sustainable Future," a global forum that brings together researchers, academicians, industry professionals, and technology leaders to explore cutting-edge advancements shaping the future. This conference aims to address the rapid evolution of Artificial Intelligence, Cybersecurity, Advanced Computing, and Sustainable Technologies, fostering discussions on their transformative impact across industries. By bridging academia and industry, the event will highlight innovative solutions, emerging research, and practical applications that drive sustainable growth and technological progress.<br/>

With a strong emphasis on next-generation intelligence, security, and sustainability, the conference will serve as a catalyst for thought leadership, collaboration, and interdisciplinary innovation. Experts from diverse domains will present pioneering research, discuss challenges, and explore forward-looking strategies in AI, digital transformation, green engineering, and business innovation. The conference also provides a unique opportunity to network with industry experts, researchers, and academicians, fostering collaborations and knowledge exchange on cutting-edge technological advancements. Attendees will have the opportunity to engage in dynamic discussions, exchange groundbreaking ideas, and contribute to shaping a technology-driven future that is intelligent, secure, and sustainable.              </p>
            </div>

            {/* Host Institute Section */}
            <div className="mt-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                About The Host Institute
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md text-gray-700 text-lg leading-relaxed">
                Indira College of Engineering and Management (ICEM), Pune, is distinguished by its expansive 40-acre campus and state-of-the-art infrastructure. The institution, which holds NAAC accreditation and autonomous status granted by UGC, offers undergraduate and postgraduate programs in various engineering disciplines, including Computer Engineering, Mechanical Engineering, Civil Engineering, Electronics and Telecommunication Engineering, Information Technology, and Artificial Intelligence & Data Science Engineering. Additionally, ICEM provides robust management programs, including regular MBA and MCA, as well as integrated MBA and MCA programs12. The faculty at ICEM comprises experienced and highly qualified professionals dedicated to imparting quality education and fostering a research-oriented mindset among students. The college emphasizes continuous professional development for its faculty members, encouraging them to engage in research, attend conferences, and collaborate with industry experts.The college boasts state-of-the-art facilities, industry collaborations, and a commitment to shaping future leaders and innovators. Join us at ICEM for the "Next-Gen Technology and AI for a Sustainable Future" conference to explore cutting-edge advancements and sustainable solutions.
                </p>
              </div>

              {/* Host Institute Image */}
              <div className="image-container">
                <img className="host-institute-image" src="https://www.yuvamind.com/colleges/images/college/indira-college-of-engineering-and-management-pune-campus.png" alt="Host Institute" />
              </div>

            </div>
          </div>
        </div>

      </section>




      <section id="CONFERENCE_TRACKS">
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h3 className="text-uppercase mt-5">Conference Tracks</h3>
            <div className="p-tracks  text-center">
              <p className="p-text">Artificial Intelligence and Machine Learning</p>
              <p className="p-text">Information Technology and Cybersecurity</p>
              <p className="p-text">Advanced Computing and Emerging Technologies </p>
              <p className="p-text">Management and Business Innovation</p>
              <p className="p-text">Sustainable Engineering and Technology</p>
              <p className="p-text">Interdisciplinary Tracks</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ImportantDates">
        <div className="mt-5">
          <h3 className="text-center text-uppercase mb-4">Important Dates</h3>
          <center>
            <div className="row date-box">
              <div className="col">
                <p >20th February 2025</p>
              </div>
              <div className="col">
                <p>Deadline of the Submission</p>
              </div>
            </div>

            <div className="row date-box">
              <div className="col">
                <p>28th February 2025</p>
              </div>
              <div className="col">
                <p>Notification of Acceptance</p>
              </div>
            </div>

            <div className="row date-box">
              <div className="col">
                <p>15th March 2025</p>
              </div>
              <div className="col">
                <p>Camera-Ready Submission</p>
              </div>
            </div>


            <div className="row date-box" style={{ backgroundColor: '#e6d39d' }}>
              <div className="col">
                <p>12th and 13th April 2025 </p>
              </div>
              <div className="col">
                <p>Conference dates</p>
              </div>
            </div>
          </center>
        </div>
      </section>

      <section id="key-note-speaker" className="keynote-section">
        <div className="container">
          <h2 className="keynote-title">Keynote Speakers</h2>

          {/* Speaker 1 */}
          <div className="speaker-flex">
            <div className="speaker-img-wrapper-down">
              <img src={mainguest1} className="speaker-img" alt="Keynote Speaker 1"  ></img>
            </div>
            <div className="speaker-info-flex">
              <div className="speaker-info">
                <h5 className="speaker-name">Prof. Dato Shamala Subramaniam</h5>
                <p className="speaker-title">Professor and Dean</p>
                <p className="speaker-department">Faculty of Computer Science and Information Technology, Universiti Putra Malaysia</p>
              </div>
              <div className="speaker-description">
                <p>
                  She serves as the Chairman for Ph.D. and Master’s Thesis Supervisory Committee (17 graduated and 9 currently pursuing).
                  She has a high number of cited publications in reputed high-impact and indexed journals.
                  She has authored Chapter(s) in books and lecture series. She has been recognized as a Member of the Editorial Advisory Board in national and international journals.
                  She has addressed keynote speeches at several national and international conferences.
                </p>
                <p>
                  She specializes in the area of wireless networks and distributed systems.
                  She has secured a wide spectrum of research grants encompassing fundamental to applied research.
                  Her research grants in the area of wireless networks and distributed systems amount to approximately RM 4.1 Million.
                  Prof Shamala’s research in integrating wireless and distributed technologies into sports has resulted in the first Games Management System, developed in partnership with the National Sports Council.
                </p>
                <p>
                  <a href="https://www.researchgate.net/profile/Shamala-Subramaniam" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </p>

              </div>
            </div>
          </div>

          {/* Speaker 2 */}
          <div className="speaker-flex">
            <div className="speaker-img-wrapper-down">
              <img src={mainguest2} className="speaker-img" alt="Keynote Speaker 2" />
            </div>
            <div className="speaker-info-flex">
              <div className="speaker-info">
                <h5 className="speaker-name">Mr. Krishnakumar Sundaram</h5>
                <p className="speaker-title">Vice President Corporate Strategy</p>
                <p className="speaker-department">Keisoku Engineering System Co.Ltd, Tokyo, Japan</p>
              </div>
              <div className="speaker-description">
                <p>
                  Krishnakumar is a multilingual business and project development expert specializing in the IT and
                  industrial sectors. He currently serves as the Vice President, overseeing Corporate Strategy and
                  New Business Development at Keisoku Engineering System Co., Ltd. (KESCO), based in Tokyo,
                  Japan.
                </p>
                <p>
                  With over 38 years of experience, Krishnakumar has established himself as a leader in the
                  Japanese IT industry. He has spearheaded globalization efforts for both traditional Japanese firms
                  and startups, leveraging his expertise in designing international market entry strategies, with a
                  strong focus on technology.In addition to his corporate roles, Krishnakumar has led various Japanese business groups and
                  investor delegations to ASEAN, the Middle East, and India for business investment exploration
                  and conventions, particularly in emerging technologies such as AI, IoT, Agritech, RetailTech,
                  Logitech, Infratech, and Healthtech.


                </p>
                <p>
                  As a guest speaker and panelist at Marwadi University in Gujarat, India, Krishnakumar presented
                  on smart computing applications and innovative management for smart cities.
                  In addition, he frequently speaks at various Japanese business forums, including JETRO, JICA,
                  STARC, AOTS, and the Project Management Institute Council Group, as well as other trade
                  organizations.
                  He holds an MBA from Anaheim University, California, and is a permanent resident of Japan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/*key note speaker*/}
      <section id="key-note-speaker" className="my-5">
        <div className="container text-center">
          <h2 className="mb-4 mt-4">Chief Patron</h2>
          <div className="row justify-content-center">

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img src={chairperson} className="card-img-top w-50 mx-auto border border-dark border-2"
                  alt="Prof. Indralal De Silva" />
                <div className="card-body">
                  <h5 className="card-title">Dr. TARITA SHANKAR</h5>
                  <h5 className="card-title">CHAIRPERSON & CHIEF MENTOR</h5>
                  <h5 className="card-title">INDIRA GROUP OF INSTITUTES, PUNE</h5>
                  <p className="card-text">
                    The name Indira Group of Institutes (IGI) is synonymous with its driving force- Chairperson & Chief Mentor, Dr Tarita Shankar, a dynamic, passionate and caring leader who has shaped IGI from scratch. Dr.Tarita Shankar holds a Degree in Arts and Law and is an alumnus of the prestigious Harvard Business School, USA having completed the ‘Owner/President Management’ program (OPM).
                  </p>
                  <p className="card-text">
                    Realizing during the early 1990’s that Liberalization and Privatization of the Indian economy and consequently the education sector would open the door to innumerable opportunities, inspired by the wisdom of Chanakya, the legendary statesman, our iron-willed Prime Minister, late Mrs Indira Gandhi and backed by the encouragement and blessings of her parents and well-wishers, Dr Tarita Shankar sowed the seeds of the parent trust, Shree Chanakya Education Society, Pune. Unwavering vision, meticulous planning, over two decades of countless hours at work, unflinching support from her family and a well-groomed leadership team comprising of seasoned academicians has seen the IGI group blossom to over 16 Institutions delivering cutting edge learning, to more than 18000 students from KG to PG level.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="patrons" className="my-5">
        <div className="container text-center">
          <h2 className="mb-4 mt-4">Patrons</h2>
          <div className="row justify-content-center">

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src={chetan}
                  className="card-img-top w-50  mx-auto border border-dark border-2"
                  alt="Prof. Chetan Wakalkar"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Prof. Chetan Wakalkar</h5>
                  <h6>Academic Advisor- Indira Group of Institutes</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src={Pandit}
                  className="card-img-top w-50 mx-auto border border-dark border-2"
                  alt="Dr. Pandit Mali"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Dr. Pandit Mali</h5>
                  <h6>Chief Executive Officer - Indira Group of Institutes</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src={rajiv}
                  className="card-img-top w-50 mx-auto border border-dark border-2"
                  alt="Mr. Rajiv Bansal"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Mr. Rajiv Bansal</h5>
                  <h6>Chief Operating Officer - Indira Group of Institutes</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src={sahil}
                  className="card-img-top w-50 mx-auto border border-dark border-2"
                  alt="Sahil Tarita Shankar Aditya Mehendale"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Sahil Tarita Shankar Aditya Mehendale</h5>
                  <h6>Trustee -Shree Chanakya Education Society</h6>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src={shaan}
                  className="card-img-top w-50 mx-auto border border-dark border-2"
                  alt="Shaan Tarita Shankar Aditya Mehendale"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Shaan Tarita Shankar Aditya Mehendale</h5>
                  <h6>Trustee - Shree Chanakya Education Society</h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="conference-roles" className="my-5">
        <div className="container text-center">
          <h2 className="mb-4 mt-4">Conference Chair</h2>
          <div className="row justify-content-center">

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src="http://irins.org/assets/profile_images/116374.JPG"
                  className="card-img-top w-50  mx-auto border border-dark border-2"
                  alt="Dr. Nilesh Uke"
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Dr. Nilesh Uke</h5>
                  <p className="card-text">Principal, ICEM</p>
                  <p className="card-text">Dr. Nilesh Uke has more than 28 years of teaching experience. He received B.E. degree in Computer Science and Engineering from Amaravati University, in 1995; M.E. from Bharathi Vidyapeeth, Pune, Maharashtra, in 2005; and Ph.D. degree in Computer Science from SRTM University, Nanded, 2014.
                    He is currently the Director of Indira College of Engineering and Management, Pune.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="conference-roles" className="my-5">
        <div className="container text-center">
          <h2 className="mb-4 mt-4"></h2>
          <div className="row justify-content-center">

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src={Poorna_Shankar}
                  className="card-img-top w-50 mx-auto border border-dark border-2"
                  alt="Dr. Poorna Shankar"
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">Dr. Poorna Shankar</h4>
                  <p className="card-text">Professsor and Dean R&D, ICEM</p>
                  <h5 className="card-text">Convener</h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3 m-2">
                <img
                  src={Soumitra_Das}
                  className="card-img-top w-50 mx-auto border border-dark border-2"
                  alt="Dr. Soumitra Das"
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'fill',
                  }}
                />
                <div className="card-body">
                  <h4 className="card-title">Dr. Soumitra Das</h4>
                  <p className="card-text">Vice Principal, ICEM</p>
                  <h5 className="card-text ">Co-Convener</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="conference-venue">
        <Container className="venue-text-center mt-5">
          <h2 className="mb-5">Conference Venue</h2>


         <Card className="mb-4  d-flex flex-column">
            <Card.Body className="flex-grow-1">
              <Card.Title><h2 className="y-text">Conference</h2></Card.Title>
              <Card.Subtitle className="mb-2 text-muted"><h3
                className="lead">12<sup>th</sup> & 13<sup>th</sup>April 2025</h3></Card.Subtitle>
              <Card.Text><p className="text-secondary">Indira College Of Engineering and Management, Parandwadi, Pune</p>
              <p className="text-secondary">Hybrid Mode</p>
              </Card.Text>
            </Card.Body>
            <div className=" lg:flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.045575992502!2d73.6582349!3d18.706777599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1d71d126f9d%3A0xe21f7d1ed3c51505!2sIndira%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1735750044246!5m2!1sen!2sin"
                width="100%"
                height="400"
                className="rounded-lg shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Card>



        </Container>
      </section>


      <section id="committee">
        <div id="committee">
          <Committee />
        </div>
      </section>

      <div className="mt-5">
        <img src={abtBtm} className="w-100" />
      </div>
      <Footer />
    </div>
  );
}
