import React from 'react';
import './Projects.css';
import pos from '../assets/images/pos.PNG';
import ecommercestore from '../assets/images/e-commerce-store.png';
import petstore from '../assets/images/pet-store.png';
import barberservicefinder from '../assets/images/barber-service-finder.png';
import collegeUI from '../assets/images/college-ui.png';
import newswebpage from '../assets/images/news-web-page.png';




export default function Projects() {
  const projects = [
    { id: 1, cartImage: pos, title: 'POS', desc: 'Point of Sale Management', tech: ['React','Next.js','GraphQL','MongoDB','React-Bootstrap'], src: 'https://github.com/nasirwaqas/sale-of-point' },
    { id: 2, cartImage: ecommercestore, title: 'E-commerce Store', desc: 'Mern-stack e-commerce app', tech: ['React','Node.js','MongoDB','Express','Bootstrap'], src: 'https://github.com/nasirwaqas/ApexcifyTechnologys_e-commerce-store' },
    { id: 3, cartImage: petstore, title: 'Pet-Store', desc: 'Mern-stack Pet-store app', tech: ['React','Node.js','Express.js','MongoDB','React-Bootstrap'], src: 'https://github.com/nasirwaqas/Pet-Store' },
    { id: 4, cartImage: barberservicefinder, title: 'Barber Service Finder', desc: 'Mern-stack barber-service-finder', tech: ['React','CSS'], src: 'https://github.com/nasirwaqas/barber-service-finder' },
    { id: 5, cartImage: collegeUI, title: 'College UI', desc: 'College UI Desing', tech: ['HTML','CSS','JavaScript','Bootstrap'], src: 'https://github.com/nasirwaqas/educational-college-website-fully-animated' },
    { id: 6, cartImage: newswebpage, title: 'News Website', desc: 'News Website page', tech: ['HTML','CSS','JavaScript','Bootstrap'], src: 'https://github.com/nasirwaqas/educational-college-website-fully-animated' }
  ];

  return (
    <div className="container">
      <h2 style={{marginBottom:12}}>Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <article key={p.id} className="project-card" aria-labelledby={`proj-${p.id}`}>
            <div style={{position:'relative'}}>
              {p.cartImage ? (
                <img className="project-thumb" src={p.cartImage} alt={`${p.title} thumbnail`} />
              ) : (
                <div className="project-thumb placeholder" style={{display:'flex',alignItems:'center',justifyContent:'center',color:'#64748b'}}>
                  No image
                </div>
              )}
            </div>
            

            <div>
              <h3 id={`proj-${p.id}`}>{p.title}</h3>
              <p style={{color:'#475569'}}>{p.desc}</p>
              <div className="project-tags">
                {p.tech.map((t,i)=> <span key={i} className="tag" style={{background:'#eef2ff',color:'#0f1724',padding:'4px 8px',borderRadius:6,fontSize:12,marginRight:6}}>{t}</span>)}
              </div>
            </div>

            <div style={{display:'flex', alignItems:'center', gap:8, marginTop:'auto'}}>
              <a className="btn-source" href={p.src} target="_blank" rel="noreferrer">Source</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
