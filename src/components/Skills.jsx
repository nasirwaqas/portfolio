import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React','JavaScript','Bootstrap','Material-UI','CSS','HTML'] },
    { category: 'Backend', items: ['Node.js','Express','PHP','MongoDB','MySQL'] },
    { category: 'Tools', items: ['VS Code','Git','Figma'] }
  ];

  return (
    <div className="container">
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s,idx)=>(
            <div key={idx} className="skill-card">
              <h3>{s.category}</h3>
              <ul>{s.items.map((it,i)=><li key={i}>{it}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
