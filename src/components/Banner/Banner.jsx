import React from 'react';
import './Banner.css'; // Link the CSS for styling
import ntailogo1 from "../../assets/images/Committee/ntailogo1.png"
export default function Banner() {
    const bannerImage1 = ntailogo1; // Replace with your image URL
    const bannerImage3 = "https://bkbirlaconference.in/wp-content/uploads/2024/07/index7.jpg"; // Replace with your image URL
    const bannerImage4 = "https://bkbirlaconference.in/wp-content/uploads/2024/07/Web-of-science-2.jpeg"; // Replace with your image URL

    return (
        <div className="banner-container">
            <div className="banner-images-left">
                <img src={bannerImage1} alt="Logo 1" className="banner-image1" />
            </div>

            <div className="banner-text">
                <h2>International conference on Nextgen Technology and Ai for a sustainable future (NTAI2025)</h2>
                <h2 className='mt-2'>Indira College of Engineering and Management</h2>
                <h3>An autonoumous Institute</h3>
                <h3>(AICTE approved engineering college in Pune)</h3>
            </div>

            <div className="banner-images-right">
                <img src={bannerImage3} alt="Logo 3" className="banner-image" />
                <img src={bannerImage4} alt="Logo 4" className="banner-image" />
            </div>
        </div>
    );
}
