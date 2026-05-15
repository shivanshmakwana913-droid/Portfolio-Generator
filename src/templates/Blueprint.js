import React from 'react';
import './Themes.css';

function Blueprint({ data, customColors }) {
    if (!data) return null;
    const style = {
        '--custom-bg': customColors?.bg || '',
        '--custom-text': customColors?.text || '',
        '--custom-accent': customColors?.accent || '',
    };
    return (
        <div className="theme-blueprint" style={style}>
            <div className="blueprint-container">
                <header className="blueprint-header">
                    <div className="blueprint-stamp">APPROVED</div>
                    {data.photo && <img src={data.photo} alt="Profile" className="blueprint-photo" />}
                    <div className="blueprint-title-block">
                        <p className="blueprint-label">SUBJECT:</p>
                        <h1 className="blueprint-name">{data.name}</h1>
                        <p className="blueprint-label">DESIGNATION:</p>
                        <p className="blueprint-role">{data.role}</p>
                    </div>
                    <div className="blueprint-contacts">
                        <p className="blueprint-label">CONTACT NODES:</p>
                        {data.email && <a href={`mailto:${data.email}`} className="blueprint-link">→ {data.email}</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noreferrer" className="blueprint-link">→ GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="blueprint-link">→ LinkedIn</a>}
                    </div>
                </header>

                <div className="blueprint-grid">
                    <div className="blueprint-box">
                        <h2 className="blueprint-box-title">// SECTION A — BIO</h2>
                        <p>{data.bio}</p>
                    </div>
                    <div className="blueprint-box">
                        <h2 className="blueprint-box-title">// SECTION B — SKILLS</h2>
                        <div className="blueprint-skills">
                            {data.skills?.split(',').map((s, i) => (
                                <span key={i} className="blueprint-skill">[{s.trim()}]</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="blueprint-box blueprint-projects-box">
                    <h2 className="blueprint-box-title">// SECTION C — PROJECTS</h2>
                    {data.projects?.map((proj, i) => (
                        <div className="blueprint-project" key={i}>
                            <span className="blueprint-proj-num">#{String(i + 1).padStart(2, '0')}</span>
                            <div>
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="blueprint-proj-link">→ View Specs</a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blueprint;
