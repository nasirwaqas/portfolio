// ...existing code...
import React from 'react';
import './About.css';
import Education from './Education.jsx'; // Import the new Education component

export default function About() {
  return (
    <div className="container">
      <div className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am a front-end developer with 2 years of professional experience and 1 year
            working across the MERN (MongoDB, Express, React, Node.js) stack. I build
            accessible, performant, and maintainable user interfaces.
          </p>
          <p>
            My work focuses on translating designs into responsive React applications,
            creating reusable components and improving developer workflows, and integrating
            front-ends with RESTful APIs and Node.js backends.
          </p>
          <p>
            I am committed to continuous learning, collaborating effectively with teams,
            and delivering user-centered solutions that align with business goals.
          </p>
        </div>
        <Education /> {/* Include the Education component */}
      </div>
    </div>
  );
}
// ...existing code...