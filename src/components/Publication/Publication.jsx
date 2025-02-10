import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Publication.css'
import Footer from '../Footer/Footer';
const Publication = () => {
  return (
   <div>
     <div className="publication-container">
     

     {/* Main Publication Info */}
     <Row className="mb-4">
       <Col xs={12} className="text-center">
         <div className="publication-header">
           <h2 className="text-xl font-semibold mb-4">
             Selected Papers after review will be published in the Proceedings/Book Series
           </h2>
           <p className="text-lg mb-4">
             'Research Notes on Computing and Communication Sciences', which is Scopus Indexed
             and published by CRC Press(AAP imprint) under Taylor and Francis Group.
           </p>
           <p className="text-gray-600 mb-4">
             Delegates will get an opportunity to publish their papers in reputed Peer Reviewed indexed Journals,
             with well-known indexes with our publishing partner Labtech Innovations, as per the acceptance and
             policy of the journals.
           </p>
         </div>
       </Col>
     </Row>
      {/* Publisher Logos Section */}
      <Row className="mb-5">
       <Col xs={12} className="text-center">
         <div className="publisher-logos">
           <img src="https://bkbirlaconference.in/wp-content/uploads/2024/06/index7-1.jpg" alt="Scopus" className="mx-3 mb-3" />
           <img src="https://bkbirlaconference.in/wp-content/uploads/2024/06/Web-of-science-1.jpeg" alt="Clarivate Analytics" className="mx-3 mb-3" />
         </div>
       </Col>
     </Row>

     {/* Submission Guidelines */}
     <Row>
       <Col xs={12}>
         <div className="submission-guidelines">
           <h1>Submission Guidelines</h1>

           <div className="section">
             <h3>Paper Categories</h3>
             <p>
               <span className="highlight">Research Papers:</span> Original research in next-gen tech and AI.
             </p>
             <p>
               <span className="highlight">Review Papers:</span> Reviews of current advancements and future trends.
             </p>
             <p>
               <span className="highlight">Case Studies:</span> Real-world applications of sustainable technologies.
             </p>
             <p>
               <span className="highlight">Posters:</span> Visual presentations of innovative ideas and early research.
             </p>
           </div>

           <div className="section">
             <h3>Formatting and Submission</h3>
             <p>
               Submit papers in <span className="highlight">LaTeX</span> or <span className="highlight">PDF</span> format 
               through the conference portal. Follow the official template for formatting.
             </p>
             <p>
               Papers should not exceed <span className="highlight">10 pages</span> (including references). 
               Case studies and posters should be <span className="highlight">5 pages max</span>.
             </p>
           </div>

           <div className="section">
             <h3>Important Dates</h3>
             <p><span className="important">Submission Deadline:</span> 20th February 2025</p>
             <p><span className="important">Notification of Acceptance:</span> 28th February 2025</p>
             <p><span className="important">Camera-Ready Submission:</span> 15th March 2025</p>
             <p><span className="important">Conference Dates:</span> 12th & 13th April 2025</p>
           </div>

           <div className="section">
             <h3>Review and Publication</h3>
             <p>
               All submissions will go through a double-blind peer review. Accepted papers will be published in 
               the conference proceedings, indexed by <span className="highlight">Taylor & Francis</span> and 
               <span className="highlight">Scopus</span>.
             </p>
           </div>

           <div className="section">
             <h3>Ethical Considerations</h3>
             <p>
               Ensure your submission is original and not published elsewhere. Properly cite and acknowledge 
               all references.
             </p>
           </div>

           <div className="section">
             <h3>Contact</h3>
             <p>For any queries, please contact the organizing committee at [research@indiraicem.ac.in].</p>
           </div>
         </div>
       </Col>
     </Row>

     {/* Publisher Logos Bottom */}
     <Row className="mt-5">
       <Col xs={12} className="text-center">
         <div className="publisher-logos-bottom">
           <img src="https://bkbirlaconference.in/wp-content/uploads/2024/08/AAP-ICLLR-1.png" alt="AAP" className="mx-3 mb-3" />
           <img src="https://bkbirlaconference.in/wp-content/uploads/2024/08/AAP-ICLLR-2.png" alt="CRC Press" className="mx-3 mb-3" />
           <img src="https://bkbirlaconference.in/wp-content/uploads/2024/08/AAP-ICLLR-3.png" alt="Routledge" className="mx-3 mb-3" />
           <img src="https://bkbirlaconference.in/wp-content/uploads/2024/08/Taylor-Francis.png" alt="Taylor & Francis" className="mx-3 mb-3" />
         </div>
         <p className="text-center mt-4 text-gray-700">
           We are home to the publishing of all well-known indexes.
         </p>
         <p className="text-center text-red-600">
           Great opportunity to publish your papers in reputed Peer Reviewed indexed Journals.
         </p>
       </Col>
     </Row>
   </div>
   <Footer/>
   </div>
  );
};

export default Publication;