import React from 'react';
import './Themes.css';

function Luxury({ data, customColors }) {
    if (!data) return null;
    const style = {
        '--custom-bg': customColors?.bg || '',
        '--custom-text': customColors?.text || '',
        '--custom-accent': customColors?.accent || '',
    };
    return (
        <div className="theme-luxury" style={style}>
            <div className="luxury-bg-pattern"></div>
            <div className="luxury-container">
                <header className="luxury-header">
                    <div className="luxury-crown">✦</div>
                    {data.photo && <img src={data.photo} alt="Profile" className="luxury-photo" />}
                    <h1 className="luxury-name">{data.name}</h1>
                    <div className="luxury-divider"><span>◆</span></div>
                    <p className="luxury-role">{data.role}</p>
                    <div className="luxury-links">
                        {data.email && <a href={`mailto:${data.email}`} className="luxury-link-btn">Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noreferrer" className="luxury-link-btn">GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer" className="luxury-link-btn">LinkedIn</a>}
                    </div>
                </header>

                <div className="luxury-body">
                    <section className="luxury-section">
                        <h2 className="luxury-section-title"><span>About</span></h2>
                        <p className="luxury-bio">{data.bio}</p>
                    </section>

                    <section className="luxury-section">
                        <h2 className="luxury-section-title"><span>Expertise</span></h2>
                        <div className="luxury-skills">
                            {data.skills?.split(',').map((s, i) => (
                                <span key={i} className="luxury-skill">{s.trim()}</span>
                            ))}
                        </div>
                    </section>

                    <section className="luxury-section">
                        <h2 className="luxury-section-title"><span>Portfolio</span></h2>
                        <div className="luxury-projects">
                            {data.projects?.map((proj, i) => (
                                <div className="luxury-project" key={i}>
                                    <div className="luxury-proj-num">0{i + 1}</div>
                                    <div className="luxury-proj-content">
                                        <h3>{proj.title}</h3>
                                        <p>{proj.description}</p>
                                        {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="luxury-proj-link">View →</a>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Luxury;
