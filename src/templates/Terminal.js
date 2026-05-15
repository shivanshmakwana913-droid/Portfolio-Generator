import React from 'react';
import './Themes.css';

function Terminal({ data }) {
    if (!data) return null;
    return (
        <div className="theme-terminal">
            <div className="terminal-window">
                <div className="term-header">
                    <div className="term-dots">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <span className="term-title">guest@{data.name?.replace(/\s+/g, '').toLowerCase() || 'portfolio'}: ~</span>
                </div>
                <div className="term-body">
                    <p className="command">$ whoami</p>
                    <p className="output">{data.name} - {data.role}</p>

                    <p className="command">$ cat bio.txt</p>
                    <p className="output">{data.bio}</p>

                    <p className="command">$ ls ./skills</p>
                    <p className="output ls-output">
                        {data.skills?.split(',').map((s, idx) => <span key={idx} className="term-file">{s.trim()}</span>)}
                    </p>

                    <p className="command">$ ./show_projects.sh</p>
                    <div className="output projects-list">
                        {data.projects?.map((proj, i) => (
                            <div className="term-project" key={i}>
                                <span className="proj-title">[{proj.title}]</span>
                                <span className="proj-desc"> {proj.description} </span>
                                {proj.link && <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link">&gt;&gt; Link</a>}
                            </div>
                        ))}
                    </div>

                    <p className="command">$ get_contact_info</p>
                    <div className="output term-contact">
                        {data.email && <div><span className="key">Email:</span> <a href={`mailto:${data.email}`}>{data.email}</a></div>}
                        {data.github && <div><span className="key">GitHub:</span> <a href={data.github} target="_blank" rel="noreferrer">{data.github}</a></div>}
                        {data.linkedin && <div><span className="key">LinkedIn:</span> <a href={data.linkedin} target="_blank" rel="noreferrer">{data.linkedin}</a></div>}
                    </div>

                    <p className="command blink">$ _</p>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
