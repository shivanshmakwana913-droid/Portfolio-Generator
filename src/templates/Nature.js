import React from 'react';
import './Themes.css';

function Nature({ data, customColors }) {
    if (!data) return null;
    const style = {
        '--custom-bg': customColors?.bg || '',
        '--custom-text': customColors?.text || '',
        '--custom-accent': customColors?.accent || '',
    };
    return (
        <div className="theme-nature" style={style}>
            <div className="nature-leaf nature-leaf-1">🌿</div>
            <div className="nature-leaf nature-leaf-2">🍃</div>

            <div className="nature-container">
                <header className="nature-header">
                    {data.photo && <img src={data.photo} alt="Profile" className="nature-photo" />}
                    <h1 className="nature-name">{data.name}</h1>
                    <p className="nature-role">{data.role}</p>
                    <div className="nature-links">
                        {data.email && <a href={`mailto:${data.email}`}>📧 Email</a>}
                        {data.github && <a href={data.github} target="_blank" rel="noreferrer">🌱 GitHub</a>}
                        {data.linkedin && <a href={data.linkedin} target="_blank" rel="noreferrer">🤝 LinkedIn</a>}
                    </div>
                </header>

                <div className="nature-grid">
                    <section className="nature-card">
                        <h2>🌲 About Me</h2>
                        <p>{data.bio}</p>
                    </section>

                    <section className="nature-card">
                        <h2>🌻 Skills</h2>
                        <div className="nature-skills">
                            {data.skills?.split(',').map((s, i) => (
                                <span key={i} className="nature-skill">{s.trim()}</span>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="nature-card nature-projects">
                    <h2>🌸 Projects</h2>
                    <div className="nature-proj-grid">
                        {data.projects?.map((proj, i) => (
                            <div className="nature-proj-card" key={i}>
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                                {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="nature-btn">Visit Project →</a>}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Nature;
