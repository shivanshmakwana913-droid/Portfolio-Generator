import React from 'react';
import './Themes.css';

function Minimal({ data }) {
    if (!data) return null;
    return (
        <div className="theme-minimal">
            <header className="min-header">
                {data.photo && <img src={data.photo} alt="Profile" className="min-photo" />}
                <h1>{data.name}</h1>
                <p className="min-role">{data.role}</p>
                <div className="min-links">
                    {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
                </div>
            </header>

            <main className="min-main">
                <section className="min-section">
                    <h2>About</h2>
                    <p>{data.bio}</p>
                </section>

                <section className="min-section">
                    <h2>Skills</h2>
                    <div className="min-skills">
                        {data.skills?.split(',').map((s, i) => <span key={i} className="min-skill">{s.trim()}</span>)}
                    </div>
                </section>

                <section className="min-section">
                    <h2>Projects</h2>
                    <div className="min-projects">
                        {data.projects?.map((proj, i) => (
                            <div className="min-project" key={i}>
                                <div className="min-project-header">
                                    <h3>{proj.title}</h3>
                                    {proj.link && <a href={proj.link} target="_blank" rel="noreferrer">Visit ↗</a>}
                                </div>
                                <p>{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Minimal;
