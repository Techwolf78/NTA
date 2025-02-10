import React, { useState } from 'react';
import './Objective.css'; // Import the CSS file
import Footer from '../Footer/Footer';

// Importing Font Awesome icons
import { FaGlobe, FaUsers, FaLightbulb, FaGraduationCap, FaBalanceScale, FaRocket } from 'react-icons/fa';

const Objective = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const objectives = [
        {
            title: "Promote Next-Gen Innovations for Sustainability",
            description: "Explore cutting-edge AI, IoT, blockchain, and next-gen technologies to address global sustainability challenges.",
            icon: <FaGlobe />,
        },
        {
            title: "Foster Interdisciplinary Collaboration",
            description: "Bring together experts from AI, IT, E&TC, Mechanical and Management to exchange ideas and create innovative, cross-disciplinary solutions.",
            icon: <FaUsers />,
        },
        {
            title: "Showcase AI and Emerging Technologies",
            description: "Highlight advancements in artificial intelligence and next-gen technologies that drive sustainable growth across industries.",
            icon: <FaLightbulb />,
        },
        {
            title: "Bridge Academia and Industry",
            description: "Facilitate collaboration between academia and industry to drive research, development, and practical applications of next-gen technologies.",
            icon: <FaGraduationCap />,
        },
        {
            title: "Discuss Ethical and Policy Frameworks",
            description: "Address the ethical implications and governance of AI and next-gen technologies in achieving a sustainable future.",
            icon: <FaBalanceScale />,
        },
        {
            title: "Empower Skill Development and Entrepreneurship",
            description: "Equip participants with knowledge of emerging tools and strategies in AI and next-gen tech while inspiring entrepreneurial solutions for sustainability.",
            icon: <FaRocket />,
        }
    ];

    return (
        <div>
            <div className="objective-container">
                <h2 className="objective-title">Conference Objectives</h2>
                <div className="objective-grid">
                    {objectives.map((obj, index) => (
                        <div
                            key={index}
                            className={`objective-card ${hoveredIndex === index ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="objective-icon">
                                {obj.icon}
                            </div>
                            <h3 className="objective-card-title">{obj.title}</h3>
                            <p className="objective-card-description">{obj.description}</p>
                        </div>
                    ))}
                </div>
                <p className="current-date">
                    Current date: Thursday, January 30, 2025, 9 PM IST
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Objective;
