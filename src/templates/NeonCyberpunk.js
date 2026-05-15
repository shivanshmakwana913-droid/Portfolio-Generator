import React from 'react';
import './Themes.css';

function NeonCyberpunk({ data, customColors }) {
    if (!data) return null;
    const style = {
        '--custom-bg': customColors?.bg || '',
        '--custom-text': customColors?.text || '',
        '--custom-accent': customColors?.accent || '',
    };
    return (
        <div className="theme-neon" style={style}>
            <div className="neon-scanlines"></div>
            <div className="neon-container">
                <header className="neon-header">
                    {data.photo && <img src={data.photo} alt="Profile" className="neon-photo" />}
                    <div className="neon-title-block">
                        <p className="neon-tag">&lt;portfolio&gt;</p>
                        <h1 className="neon-name">{data.name}</h1>
                        <p className="neon-role">// {data.role}</p>
                        <div className="neon-links">
                            {data.email && <a href={`mailto:${data.email}`} className="neon-btn">EMAIL</a>}
                            {data.github && <a href={data.github} target="_blank" rel="noreferrer" className="neon-btn">GITHUB</a>}
                            {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="neon-btn">LINKEDIN</a>}
                        </div>
                    </div>
                </header>

                <div className="neon-grid">
                    <div className="neon-card">
                        <h2 className="neon-card-title">ABOUT_ME.exe</h2>
                        <p>{data.bio}</p>
                    </div>
                    <div className="neon-card">
                        <h2 className="neon-card-title">SKILLS.dll</h2>
                        <div className="neon-skills">
                            {data.skills?.split(',').map((s, i) => <span key={i} className="neon-skill">{s.trim()}</span>)}
                        </div>
                    </div>
                </div>

                <div className="neon-card neon-projects-card">
                    <h2 className="neon-card-title">PROJECTS.log</h2>
                    <div className="neon-projects">
                        {data.projects?.map((proj, i) => (
                            <div className="neon-project" key={i}>
                                <span className="neon-proj-num">0{i + 1}</span>
                                <div>
                                    <h3>{proj.title}</h3>
                                    <p>{proj.description}</p>
                                    {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="neon-proj-link">ACCESS ↗</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="neon-tag neon-close-tag">&lt;/portfolio&gt;</p>
            </div>
        </div>
    );
}

export default NeonCyberpunk;
