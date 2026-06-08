import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Builder.css';

const PROMPT_SUGGESTIONS = {
    role: [
        'Senior Full Stack Engineer',
        'Lead Frontend Architect',
        'Product-Focused Software Developer',
        'UI/UX Design Engineer',
        'Full Stack Web Specialist',
        'Mobile Systems Developer',
        'Cloud Solutions Architect',
        'Creative Technologist',
        'Security-Minded Developer',
        'Open Source Contributor',
    ],
    bio: [
        "Strategic developer with a focus on building high-performance, scalable web applications. I bridge the gap between complex backend logic and intuitive frontend experiences.",
        "Crafting digital experiences that blend aesthetic elegance with technical excellence. Passionate about clean architecture, performance optimization, and user-centric design.",
        "Problem solver at heart. I specialize in transforming ambitious ideas into robust, production-ready software solutions using modern web technologies.",
        "Detail-oriented engineer dedicated to writing clean, maintainable code. I thrive in collaborative environments where innovation and code quality are the top priorities.",
        "Versatile developer with a track record of delivering end-to-end solutions. From initial concept to final deployment, I ensure every pixel and every line of code serves a purpose.",
    ],
    skills: [
        'React.js, TypeScript, Next.js, Redux, Tailwind CSS',
        'Node.js, Express, PostgreSQL, MongoDB, GraphQL',
        'AWS (S3, Lambda, EC2), Docker, Kubernetes, CI/CD',
        'React Native, Flutter, Firebase, Mobile UI Design',
        'Python, Django, FastAPI, Data Visualization, SQL',
        'UI/UX Design, Figma, Adobe Suite, Design Systems',
    ],
    projectTitle: [
        'Enterprise Resource Planner',
        'Real-time Analytics Dashboard',
        'Hyperlocal P2P Platform',
        'AI-Powered Content Engine',
        'FinTech Payment Gateway',
        'Collaborative SaaS Workspace',
        'Decentralized Asset Manager',
        'HealthTech Patient Portal',
    ],
    projectDesc: [
        'A comprehensive enterprise solution featuring complex data visualization, automated reporting, and role-based access control for streamlined operations.',
        'Architecture of a high-concurrency analytics engine that processes millions of events in real-time, providing actionable insights through interactive visualizations.',
        'A location-based peer-to-peer sharing ecosystem with integrated trust engines, secure escrow systems, and real-time communication modules.',
        'Leveraging machine learning to automate content generation and optimization, reducing editorial overhead by 40% while improving SEO performance.',
        'A secure, PCI-compliant payment processing system with multi-currency support, fraud detection, and instant settlement capabilities.',
    ],
};

function PromptChips({ suggestions, onSelect, fieldName }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleSuggestions = isExpanded ? suggestions : suggestions.slice(0, 3);

    return (
        <div className="prompt-helper">
            <div className="prompt-header">
                <span className="prompt-icon">💡</span>
                <span className="prompt-label">Need inspiration? Click to use:</span>
            </div>
            <div className="prompt-chips">
                {visibleSuggestions.map((suggestion, i) => (
                    <button
                        key={i}
                        type="button"
                        className="prompt-chip"
                        onClick={() => onSelect(fieldName, suggestion)}
                        title={suggestion}
                    >
                        {suggestion.length > 50 ? suggestion.substring(0, 50) + '...' : suggestion}
                    </button>
                ))}
                {suggestions.length > 3 && (
                    <button
                        type="button"
                        className="prompt-chip prompt-chip-more"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? '← Show less' : `+${suggestions.length - 3} more`}
                    </button>
                )}
            </div>
        </div>
    );
}

function Builder() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        photo: '',
        bio: '',
        email: '',
        github: '',
        linkedin: '',
        skills: '',
        projects: [{ title: '', description: '', link: '' }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePromptSelect = (fieldName, value) => {
        setFormData(prev => ({ ...prev, [fieldName]: value }));
    };

    const handleProjectPromptSelect = (index, field, value) => {
        const updatedProjects = [...formData.projects];
        updatedProjects[index][field] = value;
        setFormData(prev => ({ ...prev, projects: updatedProjects }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 400;
                    const MAX_HEIGHT = 400;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    setFormData(prev => ({ ...prev, photo: dataUrl }));
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProjectChange = (index, field, value) => {
        const updatedProjects = [...formData.projects];
        updatedProjects[index][field] = value;
        setFormData(prev => ({ ...prev, projects: updatedProjects }));
    };

    const addProject = () => {
        setFormData(prev => ({
            ...prev,
            projects: [...prev.projects, { title: '', description: '', link: '' }]
        }));
    };

    const removeProject = (index) => {
        const updatedProjects = formData.projects.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, projects: updatedProjects }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        try {
            localStorage.setItem('portfolioData', JSON.stringify(formData));
            navigate('/Portfolio');
        } catch (error) {
            console.error("Storage error:", error);
            if (error.name === 'QuotaExceededError' || error.message.includes('quota')) {
                alert('Failed to save: Your data is too large. If you uploaded a very large image, try using a smaller one or an image URL.');
            } else {
                alert('An error occurred while saving your data.');
            }
        }
    };

    return (
        <div className="builder-container">
            <div className="builder-header">
                <h1>Craft Your Portfolio</h1>
                <p>Fill in the details below to generate your stunning portfolio.</p>
            </div>

            <form className="builder-form" onSubmit={handleSave}>

                <section className="form-section">
                    <h2>Personal Information</h2>
                    <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                        <label>Profile Photo (Choose File or Paste URL)</label>
                        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
                            <input type="url" name="photo" value={formData.photo} onChange={handleChange} placeholder="Or paste image URL here..." />
                        </div>
                        {formData.photo && <img src={formData.photo} alt="Preview" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #e2e8f0', marginTop: '10px' }} />}
                    </div>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                        <span className="field-hint">✍️ Your full professional name as you'd like it displayed</span>
                    </div>
                    <div className="input-group">
                        <label>Professional Role</label>
                        <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="e.g. Frontend Developer" required />
                        <PromptChips
                            suggestions={PROMPT_SUGGESTIONS.role}
                            onSelect={handlePromptSelect}
                            fieldName="role"
                        />
                    </div>
                    <div className="input-group">
                        <label>Short Bio</label>
                        <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Tell us a little about yourself..." rows="4" required></textarea>
                        <PromptChips
                            suggestions={PROMPT_SUGGESTIONS.bio}
                            onSelect={handlePromptSelect}
                            fieldName="bio"
                        />
                    </div>
                </section>

                <section className="form-section">
                    <h2>Contact & Socials</h2>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                        </div>
                    </div>
                    <div className="input-row">
                        <div className="input-group">
                            <label>GitHub URL</label>
                            <input type="url" name="github" value={formData.github} onChange={handleChange} placeholder="https://github.com/johndoe" />
                            <span className="field-hint">🔗 Paste your GitHub profile link</span>
                        </div>
                        <div className="input-group">
                            <label>LinkedIn URL</label>
                            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/johndoe" />
                            <span className="field-hint">🔗 Paste your LinkedIn profile link</span>
                        </div>
                    </div>
                </section>

                <section className="form-section">
                    <h2>Skills</h2>
                    <div className="input-group">
                        <label>Your Skills (comma separated)</label>
                        <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="React, JavaScript, CSS, HTML..." required />
                        <PromptChips
                            suggestions={PROMPT_SUGGESTIONS.skills}
                            onSelect={handlePromptSelect}
                            fieldName="skills"
                        />
                    </div>
                </section>

                <section className="form-section">
                    <h2>Projects</h2>
                    {formData.projects.map((proj, idx) => (
                        <div key={idx} className="project-card">
                            <div className="project-header">
                                <h3>Project {idx + 1}</h3>
                                {formData.projects.length > 1 && (
                                    <button type="button" className="remove-btn" onClick={() => removeProject(idx)}>Remove</button>
                                )}
                            </div>
                            <div className="input-group">
                                <label>Project Title</label>
                                <input type="text" value={proj.title} onChange={(e) => handleProjectChange(idx, 'title', e.target.value)} placeholder="e.g. E-Commerce App" required />
                                <PromptChips
                                    suggestions={PROMPT_SUGGESTIONS.projectTitle}
                                    onSelect={(_, val) => handleProjectPromptSelect(idx, 'title', val)}
                                    fieldName="title"
                                />
                            </div>
                            <div className="input-group">
                                <label>Description</label>
                                <textarea value={proj.description} onChange={(e) => handleProjectChange(idx, 'description', e.target.value)} placeholder="Briefly describe the project..." rows="3" required></textarea>
                                <PromptChips
                                    suggestions={PROMPT_SUGGESTIONS.projectDesc}
                                    onSelect={(_, val) => handleProjectPromptSelect(idx, 'description', val)}
                                    fieldName="description"
                                />
                            </div>
                            <div className="input-group">
                                <label>Project Link</label>
                                <input type="url" value={proj.link} onChange={(e) => handleProjectChange(idx, 'link', e.target.value)} placeholder="https://myproject.com" />
                            </div>
                        </div>
                    ))}
                    <button type="button" className="add-project-btn" onClick={addProject}>+ Add Another Project</button>
                </section>

                <div className="submit-section">
                    <button type="submit" className="save-btn">Save & Preview Portfolio</button>
                </div>

            </form>
        </div>
    );
}

export default Builder;
