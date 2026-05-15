import React from 'react';
import './Themes.css';

function Glass({ data }) {
    if (!data) return null;
    return (
        <div className="theme-glass">
            <div className="glass-blob blob-1"></div>
            <div className="glass-blob blob-2"></div>

            <div className="glass-container">
                <header className="glass-header">
                    {data.photo && <img src={data.photo} alt="Profile" className="glass-photo" />}
                    <h1>{data.name}</h1>
                    <p className="role">{data.role}</p>
                    <div className="socials">
                        {data.email && <a href={`mailto:${data.email}`}>Email</a>}
                        {data.github && <a href={data.github}>GitHub</a>}
                        {data.linkedin && <a href={data.linkedin}>LinkedIn</a>}
                    </div>
                </header>

                <div className="glass-grid">
                    <div className="glass-card bio-card">
                        <h2>About Me</h2>
                        <p>{data.bio}</p>
                    </div>

                    <div className="glass-card skills-card">
                        <h2>Core Skills</h2>
                        <div className="glass-pills">
                            {data.skills?.split(',').map((s, i) => <span key={i} className="glass-pill">{s.trim()}</span>)}
                        </div>
                    </div>
                </div>

                <div className="glass-card projects-card">
                    <h2>Featured Projects</h2>
                    <div className="glass-projects">
                        {data.projects?.map((proj, i) => (
                            <div className="glass-proj" key={i}>
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                {proj.link && <a href={proj.link} className="glass-link">View Detailed ↗</a>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Glass;
