import React from 'react';
import './ConferanceTracks.css';
import Footer from '../Footer/Footer';

const ConferenceTracks = () => {
  const trackData = [
  {
    title: "1. Artificial Intelligence and Machine Learning",
    topics: [
      "Generative AI for Creative Applications",
      "Large Language Models and Their Applications",
      "AI Ethics and Responsible AI",
      "AI in Healthcare and Precision Medicine",
      "Reinforcement Learning and Autonomous Systems",
      "Artificial General Intelligence"
    ]
  },
  {
    title: "2. Information Technology and Cybersecurity",
    topics: [
      "Cloud Computing and Edge AI",
      "Cybersecurity in the Age of AI",
      "Big Data Analytics and Predictive Modeling",
      "Blockchain Technology and Decentralized Systems",
      "Internet of Things (IoT) and Smart Devices",
      "Swarm Intelligence"
    ]
  },
  {
    title: "3. Advanced Computing and Emerging Technologies",
    topics: [
      "Quantum Computing and Quantum Algorithms",
      "Software Engineering for AI Systems",
      "Human-Computer Interaction and Extended Reality (ER)",
      "Digital Twins",
      "High-Performance Computing and Data Centers",
      "Neuromorphic Computing"
    ]
  },
  {
    title: "4. Management and Business Innovation",
    topics: [
      "Technology Adoption and Change Management",
      "Business Models for Sustainable Innovation",
      "Strategic Management of AI Projects",
      "Sustainable Business Practices with AI",
      "Technology-Driven Entrepreneurship"
    ]
  },
  {
    title: "5. Sustainable Engineering and Technology",
    topics: [
      "Green Building Technologies",
      "Renewable Energy Systems",
      "Smart Cities and Infrastructure",
      "Water Resource Management",
      "Sustainable Transportation",
      "Energy-Efficient Manufacturing"
    ]
  },
  {
    title: "6. Interdisciplinary Tracks",
    topics: [
      "Policy Frameworks for Tech-Driven Sustainability",
      "Education and Capacity Building with AI Tools",
      "AI for Environmental Sustainability",
      "Emerging Technologies in Rural Development",
      "Legal and Ethical Challenges in Next-Gen Technologies"
    ]
  }
];

  return (
    <div>
      <div className="tracks-container">
      <div className="tracks-background-pattern"></div>
      <h1 className="tracks-title">TRACKS</h1>
      <div className="tracks-grid">
        {trackData.map((track, index) => (
          <div key={index} className="track-card">
            <div className="track-header">
              <div className="header-accent"></div>
              <h2>{track.title}</h2>
            </div>
            <div className="track-content">
              <ul className="topic-list">
                {track.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="topic-item">
                    <span className="bullet"></span>
                    {topic}
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default ConferenceTracks;
