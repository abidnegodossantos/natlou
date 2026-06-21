'use client';

import { useState } from 'react';
import Image from 'next/image';
import { works, Work } from './works';
import { X } from 'lucide-react';

export default function Galeria() {
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    return (
        <main>
            {/* Header Hero */}
            <div style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, #003366 100%)',
                color: 'white',
                padding: '6rem 1rem',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem' }}>
                    O Nosso Trabalho
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                    Conheça a qualidade dos nossos serviços de climatização. 
                    Veja exemplos de instalações e manutenções feitas pela Natlou.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="container section">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {works.map((work) => (
                        <div 
                            key={work.id} 
                            onClick={() => setSelectedWork(work)}
                            style={{
                                cursor: 'pointer',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 15px var(--shadow-color)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                backgroundColor: 'var(--bg-card)'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px var(--shadow-color)';
                            }}
                        >
                            <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                                <Image 
                                    src={work.imageUrl} 
                                    alt={work.title} 
                                    fill 
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    padding: '0.3rem 0.8rem',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    color: 'var(--primary-color)'
                                }}>
                                    {work.category}
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                    {work.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                    {work.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedWork && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 99999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                    onClick={() => setSelectedWork(null)}
                >
                    <button 
                        onClick={() => setSelectedWork(null)}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <X size={32} />
                    </button>
                    
                    <div 
                        style={{ 
                            position: 'relative', 
                            width: '100%', 
                            maxWidth: '1000px', 
                            height: '70vh',
                            marginBottom: '2rem'
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    >
                        <Image 
                            src={selectedWork.imageUrl} 
                            alt={selectedWork.title} 
                            fill 
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    
                    <div style={{ textAlign: 'center', color: 'white', maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                            {selectedWork.title}
                        </h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                            {selectedWork.description}
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}
