import React from 'react';
import './Themes.css';

function Modern({ data }) {
    if (!data) return null;
    return (
        <div className="theme-modern">
            <div className="mod-sidebar">
                {data.photo && <img src={data.photo} alt="Profile" className="mod-photo" />}
                <h1 className="mod-name">{data.name}</h1>
                <p className="mod-role">{data.role}</p>
                <p className="mod-bio">{data.bio}</p>

                <div className="mod-contact">
                    <h3>Contact</h3>
                    {data.email && <a href={`mailto:${data.email}`}>{data.email}</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
                </div>
            </div>

            <div className="mod-content">
                <section className="mod-section">
                    <h2>Expertise</h2>
                    <div className="mod-skills">
                        {data.skills?.split(',').map((s, i) => <span key={i} className="mod-skill">{s.trim()}</span>)}
                    </div>
                </section>

                <section className="mod-section">
                    <h2>Selected Work</h2>
                    <div className="mod-projects">
                        {data.projects?.map((proj, i) => (
                            <div className="mod-project" key={i}>
                                <div className="mod-proj-info">
                                    <h3>{proj.title}</h3>
                                    <p>{proj.description}</p>
                                </div>
                                {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="mod-btn">View Project</a>}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Modern;
