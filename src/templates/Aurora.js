import React from 'react';
import './Themes.css';

function Aurora({ data, customColors }) {
    if (!data) return null;
    const style = {
        '--custom-bg': customColors?.bg || '',
        '--custom-text': customColors?.text || '',
        '--custom-accent': customColors?.accent || '',
    };
    return (
        <div className="theme-aurora" style={style}>
            <div className="aurora-glow aurora-glow-1"></div>
            <div className="aurora-glow aurora-glow-2"></div>
            <div className="aurora-glow aurora-glow-3"></div>

            <div className="aurora-container">
                <header className="aurora-header">
                    {data.photo && <img src={data.photo} alt="Profile" className="aurora-photo" />}
                    <h1 className="aurora-name">{data.name}</h1>
                    <p className="aurora-role">{data.role}</p>
                    <div className="aurora-links">
                        {data.email && <a href={`mailto:${data.email}`} className="aurora-chip">Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noreferrer" className="aurora-chip">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="aurora-chip">LinkedIn</a>}
                    </div>
                </header>

                <div className="aurora-cards">
                    <div className="aurora-card aurora-about">
                        <h2>About</h2>
                        <p>{data.bio}</p>
                    </div>
                    <div className="aurora-card aurora-skillset">
                        <h2>Skills</h2>
                        <div className="aurora-skills">
                            {data.skills?.split(',').map((s, i) => (
                                <span key={i} className="aurora-skill">{s.trim()}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="aurora-card aurora-projects-wrap">
                    <h2>Projects</h2>
                    <div className="aurora-projects">
                        {data.projects?.map((proj, i) => (
                            <div className="aurora-proj" key={i}>
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="aurora-proj-link">Explore →</a>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aurora;
