import React from 'react';
import './Themes.css';

function Retro({ data, customColors }) {
    if (!data) return null;
    const style = {
        '--custom-bg': customColors?.bg || '',
        '--custom-text': customColors?.text || '',
        '--custom-accent': customColors?.accent || '',
    };
    return (
        <div className="theme-retro" style={style}>
            <div className="retro-masthead">
                <p className="retro-date">{new Date().toDateString().toUpperCase()} · EST. {new Date().getFullYear()}</p>
                <h1 className="retro-title">{data.name}</h1>
                <p className="retro-subtitle">{data.role}</p>
                <div className="retro-rule"></div>
                <div className="retro-socials">
                    {data.email && <a href={`mailto:${data.email}`}>✉ Email</a>}
                    {data.github && <a href={data.github} target="_blank" rel="noreferrer">⌨ GitHub</a>}
                    {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>}
                </div>
            </div>

            <div className="retro-body">
                <div className="retro-col retro-col-wide">
                    <h2 className="retro-section-title">◆ ABOUT</h2>
                    <p className="retro-bio">{data.bio}</p>

                    <h2 className="retro-section-title">◆ FEATURED WORK</h2>
                    {data.projects?.map((proj, i) => (
                        <div className="retro-project" key={i}>
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                            {proj.link && <a href={proj.link} className="retro-link" target="_blank" rel="noreferrer">Read More →</a>}
                        </div>
                    ))}
                </div>

                <div className="retro-col retro-col-narrow">
                    {data.photo && <img src={data.photo} alt="Profile" className="retro-photo" />}
                    <h2 className="retro-section-title">◆ SKILLS</h2>
                    <ul className="retro-skills">
                        {data.skills?.split(',').map((s, i) => <li key={i}>▸ {s.trim()}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Retro;
