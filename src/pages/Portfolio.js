import React, { useState, useEffect } from 'react';
import Minimal from '../templates/Minimal';
import Modern from '../templates/Modern';
import Glass from '../templates/Glass';
import Terminal from '../templates/Terminal';
import Retro from '../templates/Retro';
import NeonCyberpunk from '../templates/NeonCyberpunk';
import Nature from '../templates/Nature';
import Luxury from '../templates/Luxury';
import Blueprint from '../templates/Blueprint';
import Aurora from '../templates/Aurora';
import { useNavigate } from 'react-router-dom';

const THEMES = [
    { value: 'glass',        label: '🔮 Glass (Glassmorphism)' },
    { value: 'minimal',      label: '📄 Minimal (Clean UI)' },
    { value: 'modern',       label: '🌑 Modern (High Contrast)' },
    { value: 'terminal',     label: '💻 Terminal (Hacker CLI)' },
    { value: 'retro',        label: '📰 Retro (Newspaper)' },
    { value: 'neon',         label: '⚡ Neon Cyberpunk' },
    { value: 'nature',       label: '🌿 Nature (Earthy)' },
    { value: 'luxury',       label: '👑 Luxury (Gold & Black)' },
    { value: 'blueprint',    label: '📐 Blueprint (Technical)' },
    { value: 'aurora',       label: '🌌 Aurora (Northern Lights)' },
];

function Portfolio() {
    const [data, setData] = useState(null);
    const [theme, setTheme] = useState('glass');
    const [showCustomizer, setShowCustomizer] = useState(false);
    const [customColors, setCustomColors] = useState({ bg: '', text: '', accent: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const savedData = localStorage.getItem('portfolioData');
        if (savedData) setData(JSON.parse(savedData));
        const savedColors = localStorage.getItem('portfolioColors');
        if (savedColors) setCustomColors(JSON.parse(savedColors));
        const savedTheme = localStorage.getItem('portfolioTheme');
        if (savedTheme) setTheme(savedTheme);
    }, []);

    const handleThemeChange = (val) => {
        setTheme(val);
        localStorage.setItem('portfolioTheme', val);
    };

    const handleColorChange = (key, val) => {
        const updated = { ...customColors, [key]: val };
        setCustomColors(updated);
        localStorage.setItem('portfolioColors', JSON.stringify(updated));
    };

    const resetColors = () => {
        const empty = { bg: '', text: '', accent: '' };
        setCustomColors(empty);
        localStorage.removeItem('portfolioColors');
    };

    if (!data) {
        return (
            <div style={{ textAlign: 'center', padding: '10rem 2rem', fontFamily: 'Inter', flex: 1 }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>No Portfolio Data Found</h2>
                <p style={{ color: '#64748b', marginBottom: '2rem' }}>You haven't built your portfolio yet!</p>
                <button
                    onClick={() => navigate('/Builder')}
                    style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    Go to Builder
                </button>
            </div>
        );
    }

    const renderTheme = () => {
        const props = { data, customColors };
        switch (theme) {
            case 'minimal':   return <Minimal {...props} />;
            case 'modern':    return <Modern {...props} />;
            case 'glass':     return <Glass {...props} />;
            case 'terminal':  return <Terminal {...props} />;
            case 'retro':     return <Retro {...props} />;
            case 'neon':      return <NeonCyberpunk {...props} />;
            case 'nature':    return <Nature {...props} />;
            case 'luxury':    return <Luxury {...props} />;
            case 'blueprint': return <Blueprint {...props} />;
            case 'aurora':    return <Aurora {...props} />;
            default:          return <Glass {...props} />;
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
            {/* ── TOP CONTROL BAR ── */}
            <div className="no-print" style={{
                background: '#0f172a', padding: '0.8rem 1.5rem',
                display: 'flex', alignItems: 'center', gap: '0.8rem',
                borderBottom: '1px solid #1e293b', flexWrap: 'wrap'
            }}>
                <span style={{ color: 'white', fontFamily: 'Inter', fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    Theme:
                </span>
                <select
                    value={theme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                    style={{ padding: '0.5rem 0.8rem', borderRadius: '8px', border: '1px solid #334155', background: '#1e293b', color: 'white', fontFamily: 'Inter', cursor: 'pointer', outline: 'none', fontSize: '0.9rem' }}
                >
                    {THEMES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                </select>

                {/* Customize button */}
                <button
                    onClick={() => setShowCustomizer(v => !v)}
                    style={{ padding: '0.5rem 1.2rem', background: showCustomizer ? '#6366f1' : '#1e293b', border: '1px solid #6366f1', borderRadius: '8px', color: 'white', cursor: 'pointer', fontSize: '0.85rem', fontWeight: '600', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                    🎨 Customize Colors
                </button>

                <button
                    onClick={() => window.print()}
                    style={{ marginLeft: 'auto', padding: '0.5rem 1.4rem', background: 'linear-gradient(135deg, #10b981, #059669)', border: 'none', borderRadius: '50px', color: 'white', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                    Save as PDF
                </button>
            </div>

            {/* ── COLOR CUSTOMIZER PANEL ── */}
            {showCustomizer && (
                <div className="no-print" style={{
                    background: '#0f172a', borderBottom: '1px solid #1e293b',
                    padding: '1rem 1.5rem', display: 'flex', gap: '2rem',
                    alignItems: 'center', flexWrap: 'wrap', fontFamily: 'Inter'
                }}>
                    {[
                        { key: 'bg',     label: '🖼 Background Color', default: '#ffffff' },
                        { key: 'text',   label: '✍ Text Color',        default: '#000000' },
                        { key: 'accent', label: '✨ Accent Color',      default: '#6366f1' },
                    ].map(item => (
                        <div key={item.key} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <label style={{ color: '#94a3b8', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>{item.label}</label>
                            <input
                                type="color"
                                value={customColors[item.key] || item.default}
                                onChange={(e) => handleColorChange(item.key, e.target.value)}
                                style={{ width: '38px', height: '32px', border: 'none', borderRadius: '6px', cursor: 'pointer', background: 'transparent', padding: '2px' }}
                            />
                            {customColors[item.key] && (
                                <span style={{ color: '#64748b', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                                    {customColors[item.key]}
                                </span>
                            )}
                        </div>
                    ))}
                    <button
                        onClick={resetColors}
                        style={{ padding: '0.4rem 1rem', background: 'transparent', border: '1px solid #ef4444', borderRadius: '6px', color: '#ef4444', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600' }}>
                        Reset
                    </button>
                    <span style={{ color: '#475569', fontSize: '0.78rem', fontStyle: 'italic' }}>
                        * Colors override the selected theme's defaults
                    </span>
                </div>
            )}

            {/* ── THEME CONTENT ── */}
            <div style={{ flex: 1 }}>
                {renderTheme()}
            </div>

            <footer className="no-print" style={{ textAlign: 'center', padding: '1.5rem', background: '#0f172a', color: '#94a3b8', fontSize: '0.9rem', borderTop: '1px solid #1e293b' }}>
                &copy; {new Date().getFullYear()} {data.name}. Portfolio generated via Selfolio.
            </footer>
        </div>
    );
}

export default Portfolio;
