import React, { useState } from 'react'; 
import Footer from './Footer/Footer';

const SubmissionPage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const faqs = [
    {
      question: "How do I submit my abstract?",
      answer: "Submit your abstract via Microsoft CMT portal with full author details, including names, email IDs, and mobile numbers."
    },
    {
      question: "What are the poster specifications?",
      answer: "Posters should be 36 × 48 inches (91 × 122 cm) in portrait orientation, with clear title, authors, methodology, results, and legible text."
    },
    {
      question: "What file format should I use?",
      answer: "Submit digital posters in PDF format, with file size not exceeding 10 MB. Name the file as 'LastName_FirstName_Poster.pdf'."
    },
    {
      question: "How to submit through CMT?",
      answer: "Access the Conference Management Toolkit (CMT) portal, create an account, and follow the submission guidelines for your paper."
    }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="submission-container">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .submission-container {
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #ffffff;
          min-height: 100vh;
          color: #000000; /* Set default text color to black */
          line-height: 1.6;
        }
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .track-card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          padding: 30px;
          margin-bottom: 20px;
          border: 2px solid #36a4a4; /* Secondary color */
          text-align: left; /* Align text to the left */
        }
        .track-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .section-title {
          color: #36a4a4; /* Secondary color */
          border-bottom: 2px solid rgba(255,255,255,0.2);
          padding-bottom: 10px;
          margin-bottom: 20px;
          font-size: 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .list-style {
          list-style-type: none;
          padding-left: 0;
        }
        .list-style li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          color: #000000; /* Set text color to black */
        }
        .list-style li:before {
          content: '•';
          color: #36a4a4; /* Secondary color */
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        .cta-button {
          display: inline-block;
          background: #36a4a4; /* Secondary color */
          color: #ffffff;
          padding: 12px 25px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: transform 0.3s ease;
        }
        .cta-button-container {
          display: flex;
          justify-content: flex-start; /* Align buttons to the left */
          margin-top: 20px;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(255,255,255,0.3);
        }
        .faq-container {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 30px;
        }
        .faq-item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          margin-bottom: 15px;
          overflow: hidden;
        }
        .faq-question {
          background: rgba(255,255,255,0.1);
          color:rgb(2, 5, 5); /* Secondary color */
          padding: 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .faq-answer {
          padding: 15px;
          background: rgba(255,255,255,0.05);
          display: none;
          color: #000000; /* Set text color to black */
        }
        .faq-answer.active {
          display: block;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="content-wrapper">
        <div className="track-card">
          <h2 className="section-title">Poster Presentation Submission</h2>
          <div className="grid">
            <div>
              <h2 style={{ color: '#36a4a4', textAlign: 'left',}}>Poster Specifications</h2> {/* Secondary color */}
              <ul className="list-style">
                <li>Dimensions: 36 × 48 inches (91 × 122 cm), portrait orientation</li>
                <li>Include title, authors, affiliations, abstract</li>
                <li>Methodology, results, conclusion details</li>
                <li>Legible text from 3 feet away</li>
                <li>High-contrast, clean layout</li>
              </ul>
            </div>

            <div>
              <h2 style={{ color: '#36a4a4', textAlign: 'left' }}>Digital Poster Submission</h2> {/* Secondary color */}
              <ul className="list-style">
                <li>PDF format only</li>
                <li>Max file size: 10 MB</li>
                <li>Filename: 'LastName_FirstName_Poster.pdf'</li>
                <li>Contact: research@indiraicem.ac.in</li>
                <li>Deadline: 28<sup>th</sup> February 2025</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="track-card">
          <h2 className="section-title">Submission Guidelines</h2>
          <div className="grid">
            <div>
              <h3 style={{ color: '#36a4a4' }}>Abstract Submission</h3> {/* Secondary color */}
              <ul className="list-style">
                <li>Email: research@indiraicem.ac.in</li>
                <li>Full author and co-author details</li>
                <li>Provide email IDs and mobile numbers</li>
                <li>Match registration form names</li>
                <li>Acknowledgement within 7 days</li>
              </ul>
              <div className="cta-button-container">
                <a 
                  href="https://docs.google.com/uc?export=download&id=1ykMUkpWrwfS1Gx6Ld1rLScFrgCGGAInx" 
                  className="cta-button" 
                  download="AbstractTemplate.docx"
                >
                  Download Sample Abstract
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#36a4a4' }}>Full Paper Submission</h3> {/* Secondary color */}
              <ul className="list-style">
                <li>Submit after abstract acceptance</li>
                <li>Follow website template</li>
                <li>No multiple submissions</li>
                <li>Plagiarism check required</li>
                <li>Registration fee: Visit Registration Page-</li>
              </ul>
              <div className="cta-button-container">
                <a 
                  href="https://docs.google.com/uc?export=download&id=1Sx1Qm_R1r-XeJXQPRCQ0BhPguf65mbjq" 
                  className="cta-button" 
                  download="SamplePaper.docx"
                >
                  Download Sample Paper
                </a>
              </div>
            </div>
          </div>

          <div className="grid mt-4">
            <div>
              <h3 style={{ color: '#36a4a4' }}>Paper Categories</h3> {/* Secondary color */}
              <ul className="list-style">
                <li>Research Papers: Original research in next-gen tech and AI</li>
                <li>Review Papers: Reviews of current advancements and future trends</li>
                <li>Case Studies: Real-world applications of sustainable technologies</li>
                <li>Posters: Visual presentations of innovative ideas and early research</li>
              </ul>
              <div  className="cta-button-container">
                <a href="https://cmt3.research.microsoft.com/" className="cta-button">
                  Submit via CMT Portal
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="track-card">
          <h1 className="section-title">Submission of Full Paper</h1>
          <p>Prospective authors will submit their research paper through Microsoft CMT portal: <a style={{ color: "#36a4a4" }} href="https://cmt3.research.microsoft.com/docs/help/index.html">Click Here for CMT portal </a></p>
        </div>
        <div className="track-card">
          <h3 style={{ color: '#36a4a4' }}>FAQs</h3> {/* Secondary color */}
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div 
                  className="faq-question" 
                  onClick={() => toggleDropdown(index)}
                >
                  {faq.question}
                  <span>{activeDropdown === index ? "-" : "+"}</span>
                </div>
                <div 
                  className={`faq-answer ${activeDropdown === index ? 'active' : ''}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SubmissionPage;
