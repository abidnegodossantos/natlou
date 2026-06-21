import Link from 'next/link';
import Image from 'next/image';
import RevealOnScroll from '@/components/RevealOnScroll';
import { Gift, Zap, Briefcase } from 'lucide-react';

export default function Services() {
    return (
        <div className="container section" style={{ background: 'linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%)', minHeight: '100vh', position: 'relative', overflow: 'hidden', overflowX: 'hidden' }}>
            {/* Background Atmosphere Blobs */}
            <div style={{ position: 'absolute', top: '10%', left: '-15%', width: '600px', height: '600px', backgroundColor: 'rgba(0, 168, 232, 0.08)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0, pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', top: '40%', right: '-15%', width: '500px', height: '500px', backgroundColor: 'rgba(0, 74, 173, 0.08)', borderRadius: '50%', filter: 'blur(120px)', zIndex: 0, pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '400px', height: '400px', backgroundColor: 'rgba(255, 215, 0, 0.05)', borderRadius: '50%', filter: 'blur(90px)', zIndex: 0, pointerEvents: 'none' }}></div>
            {/* Hero Section: Ação Imediata */}
            <div style={{
                position: 'relative',
                minHeight: '60vh',
                width: '100vw',
                maxWidth: '100vw',
                marginLeft: 'calc(-50vw + 50%)', // Break out of container
                marginBottom: '4rem',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                paddingBottom: '120px' // Space for wave divider + button breathing room
            }}>
                {/* Background Image */}
                <Image
                    src="/installation-team.jpg"
                    alt="Técnicos especialistas em climatização"
                    fill
                    style={{ objectFit: 'cover', zIndex: -2 }}
                    priority
                />
                {/* Dark Overlay Filter */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 18, 40, 0.6)', // Deep blue tint for professional look
                    zIndex: -1
                }}></div>

                {/* Hero Content */}
                <RevealOnScroll>
                    <div style={{ padding: '0 1.25rem', maxWidth: '900px', width: '100%', boxSizing: 'border-box' }}>
                        <h1 style={{
                            fontSize: 'clamp(1.6rem, 5vw, 4rem)',
                            fontWeight: '800',
                            lineHeight: '1.2',
                            marginBottom: '1.25rem',
                            textShadow: '0 4px 15px rgba(0,0,0,0.5)'
                        }}>
                            Especialistas em Climatização: Instalação, Manutenção e Reparação.
                        </h1>
                        <p className="animate-slide-in delay-200" style={{
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            marginBottom: '2.5rem',
                            fontWeight: '500',
                            color: '#f0f0f0',
                            textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                            maxWidth: '800px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            Atendimento técnico em <span style={{ color: '#FFD700', fontWeight: '700' }}>Luanda, Benguela e Bengo</span> com <span style={{ borderBottom: '2px solid var(--secondary-color)', paddingBottom: '2px' }}>técnicos certificados</span>.
                        </p>

                        {/* CTA Button */}
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 1rem', boxSizing: 'border-box' }}>
                            <a
                                href="https://wa.me/244946776397?text=Olá, preciso de um Diagnóstico Técnico (3.000 Kz)."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn animate-ripple"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    backgroundColor: '#25D366',
                                    color: 'white',
                                    padding: '0.9rem 2rem',
                                    fontSize: 'clamp(0.95rem, 3.5vw, 1.2rem)',
                                    borderRadius: '50px',
                                    fontWeight: '700',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 25px rgba(37, 211, 102, 0.4)',
                                    border: '2px solid rgba(255,255,255,0.2)',
                                    width: '100%',
                                    maxWidth: '360px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                Pedir Diagnóstico (3.000 Kz)
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </a>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Organic Wave Divider (Air Flow Effect) */}
                <div style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 1 }}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ position: 'relative', display: 'block', width: 'calc(100% + 1.3px)', height: '100px', transform: 'rotate(180deg)' }}>
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="var(--bg-color)"></path>
                    </svg>
                </div>
            </div>


            {/* Service Cards Grid */}
            {/* Service Cards Grid */}
            <div className="service-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '6rem' }}>

                {/* Card 1: Instalação & Montagem */}
                <RevealOnScroll delay={0} className="h-full">
                    <div className="service-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#e6f7ff',
                            color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'
                        }}>
                            {/* Drill Icon */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                        </div>
                        <h3 className="service-title" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                            Instalação & Montagem
                        </h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                            Instalação segura para todas as marcas (Haier, TCL, etc.). Garantia de funcionamento perfeito e acabamento estético.
                        </p>
                        <div style={{
                            backgroundColor: '#d4edda', color: '#155724', padding: '0.8rem 1.2rem', borderRadius: '12px',
                            fontSize: '0.9rem', fontWeight: '700', width: '100%',
                            display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                            <Gift size={16} /> Na compra do AC connosco, a montagem é GRÁTIS.
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Card 2: Manutenção Preventiva */}
                <RevealOnScroll delay={200} className="h-full">
                    <div className="service-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#e6f7ff',
                            color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'
                        }}>
                            {/* Shield/Snowflake Icon */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3 className="service-title" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                            Manutenção Preventiva
                        </h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                            Aumente a vida útil do seu equipamento e poupe energia. Limpeza profunda, verificação de gás e filtros.
                        </p>
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.9rem', color: '#777' }}>A partir de</span>
                            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>10.000 Kz</span>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Card 3: Assistência Técnica */}
                <RevealOnScroll delay={400} className="h-full">
                    <div className="service-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div style={{
                            width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#fff3cd',
                            color: '#856404', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem'
                        }}>
                            {/* Wrench Icon */}
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>
                        <h3 className="service-title" style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>
                            Assistência Técnica
                        </h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                            O AC parou? Faz barulho? Resolvemos avarias complexas e substituímos peças com rapidez.
                        </p>
                        <div style={{
                            backgroundColor: '#fff3cd', color: '#856404', padding: '0.8rem 1.2rem', borderRadius: '12px',
                            fontSize: '0.9rem', fontWeight: '700', width: '100%',
                            display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                            <Zap size={16} /> Diagnóstico rápido e preciso.
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* Parallax Section: Stock Real */}
            <div style={{
                backgroundImage: 'url(/stock-infrastructure.jpg)',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                margin: '0 -20px 6rem', // Break out of container
                boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)'
            }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 18, 40, 0.7)' // Deep blue-black tint
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <RevealOnScroll>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            color: 'white',
                            fontWeight: '800',
                            marginBottom: '1rem',
                            textShadow: '0 4px 10px rgba(0,0,0,0.5)'
                        }}>
                            Stock Real. Entrega Imediata.
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#f0f0f0', maxWidth: '600px', margin: '0 auto', fontWeight: '300' }}>
                            Dispomos de amplo stock de peças e equipamentos para garantir que o seu conforto não espera.
                        </p>
                    </RevealOnScroll>
                </div>
            </div>

            {/* Processo: Como Trabalhamos */}
            <div style={{
                marginBottom: '6rem',
                backgroundColor: 'var(--bg-secondary)', // Theme variable instead of light gray
                padding: '4rem 1rem',
                margin: '0 -20px', // Break out
                position: 'relative'
            }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <RevealOnScroll>
                        <h2 className="title" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Como Trabalhamos?</h2>
                        <p className="subtitle" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Simples, rápido e sem complicações.
                        </p>
                    </RevealOnScroll>

                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '2rem',
                        position: 'relative'
                    }}>
                        {/* Connecting Line (Desktop) */}
                        <div className="desktop-only" style={{
                            position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px',
                            backgroundImage: 'linear-gradient(to right, #25D366, var(--primary-color), #FFD700)',
                            zIndex: 0, opacity: 0.3
                        }}></div>

                        {/* Step 1 */}
                        <RevealOnScroll delay={0} className="process-step">
                            <div style={{ width: '220px', textAlign: 'center', position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-card)', padding: '1.5rem 1.2rem', borderRadius: '16px', boxShadow: '0 8px 30px var(--shadow-color)' }}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#25D366', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
                                    boxShadow: '0 8px 16px rgba(37, 211, 102, 0.3)',
                                    transition: 'transform 0.3s ease'
                                }} className="step-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1. Agendamento</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Você contacta-nos via WhatsApp de forma simples.</p>
                            </div>
                        </RevealOnScroll>

                        {/* Step 2 */}
                        <RevealOnScroll delay={200} className="process-step reveal-left">
                            <div style={{ width: '220px', textAlign: 'center', position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-card)', padding: '1.5rem 1.2rem', borderRadius: '16px', boxShadow: '0 8px 30px var(--shadow-color)' }}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden',
                                    margin: '0 auto 1.5rem', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', border: '3px solid white',
                                    transition: 'transform 0.3s ease'
                                }} className="step-icon">
                                    <Image src="/contact-model.jpg" alt="Visita Técnica" width={80} height={80} style={{ objectFit: 'cover' }} />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2. Visita Técnica</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A nossa equipa vai até si com frota própria.</p>
                            </div>
                        </RevealOnScroll>

                        {/* Step 3 */}
                        <RevealOnScroll delay={400} className="process-step">
                            <div style={{ width: '220px', textAlign: 'center', position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-card)', padding: '1.5rem 1.2rem', borderRadius: '16px', boxShadow: '0 8px 30px var(--shadow-color)' }}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
                                    boxShadow: '0 8px 16px rgba(0, 40, 85, 0.2)',
                                    transition: 'transform 0.3s ease'
                                }} className="step-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>3. Execução</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Serviço limpo, rápido e profissional.</p>
                            </div>
                        </RevealOnScroll>

                        {/* Step 4 */}
                        <RevealOnScroll delay={400} className="process-step">
                            <div style={{ width: '220px', textAlign: 'center', position: 'relative', zIndex: 1, backgroundColor: 'var(--bg-card)', padding: '1.5rem 1.2rem', borderRadius: '16px', boxShadow: '0 8px 30px var(--shadow-color)' }}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFD700', color: '#333',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem',
                                    boxShadow: '0 8px 16px rgba(255, 215, 0, 0.3)',
                                    transition: 'transform 0.3s ease'
                                }} className="step-icon">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>4. Garantia</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Acompanhamento pós-serviço garantido.</p>
                            </div>
                        </RevealOnScroll>

                    </div>
                </div>

                {/* Tabela de Preços Inteligente */}
                <div style={{
                    marginTop: '0',
                    background: 'radial-gradient(circle, var(--border-light) 1.5px, transparent 1.5px), linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-color) 100%)',
                    backgroundSize: '30px 30px, 100% 100%',
                    margin: '0 -20px',
                    padding: '4rem 1rem',
                    position: 'relative',
                    borderTop: '1px solid var(--border-light)',
                    borderBottom: '1px solid var(--border-light)'
                }}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <RevealOnScroll>
                            <h2 className="title animate-slide-in" style={{
                                textAlign: 'center',
                                marginBottom: '3rem',
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #004aad 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline-block'
                            }}>
                                Tabela de Preços Transparente
                            </h2>
                        </RevealOnScroll>

                        <div style={{ display: 'grid', gap: '4rem' }}>

                            {/* Tabela 1: Serviços Técnicos */}
                            <RevealOnScroll delay={100}>
                                <h3 className="animate-slide-in" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)', borderLeft: '5px solid var(--primary-color)', paddingLeft: '1rem' }}>
                                    Serviços Técnicos
                                </h3>
                                <div style={{ overflowX: 'auto', borderRadius: '12px', boxShadow: '0 5px 20px var(--shadow-color)', border: '1px solid var(--border-light)' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--bg-card)', minWidth: '600px' }}>
                                        <thead>
                                            <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700' }}>Serviço</th>
                                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700' }}>Detalhe</th>
                                                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '700' }}>Preço</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { name: 'Diagnóstico Técnico', detail: 'Visita e identificação da avaria', price: '3.000 Kz' },
                                                { name: 'Manutenção Geral', detail: 'Limpeza e revisão preventiva', price: '10.000 Kz' },
                                                { name: 'Carga de Gás', detail: 'Gás incluído (Se for gás do cliente: 10.000 Kz)', price: '15.000 Kz' },
                                                { name: 'Reparação Complexa', detail: 'Mão de obra especializada', price: '20.000 Kz' }
                                            ].map((item, index) => (
                                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
                                                    <td style={{ padding: '1.2rem', fontWeight: '600', color: 'var(--text-primary)' }}>{item.name}</td>
                                                    <td style={{ padding: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.detail}</td>
                                                    <td style={{ padding: '1.2rem', textAlign: 'right', fontWeight: '800', color: 'var(--primary-color)', fontSize: '1.1rem' }}>{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </RevealOnScroll>

                            {/* Tabela 2: Montagem */}
                            <RevealOnScroll delay={200}>
                                <h3 className="animate-slide-in" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-primary)', borderLeft: '5px solid var(--primary-color)', paddingLeft: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                                    <span>Montagem (Mão de Obra)</span>
                                    <span className="animate-pulse-btn" style={{ fontSize: '0.85rem', backgroundColor: '#d4edda', color: '#155724', padding: '0.4rem 0.8rem', borderRadius: '50px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <Gift size={14} /> Grátis na compra de equipamento NATLOU
                                    </span>
                                </h3>
                                <div style={{ overflowX: 'auto', borderRadius: '12px', boxShadow: '0 5px 20px var(--shadow-color)', border: '1px solid var(--border-light)' }}>
                                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'var(--bg-card)', minWidth: '400px' }}>
                                        <thead>
                                            <tr style={{ backgroundColor: '#333', color: 'white' }}>
                                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700' }}>Capacidade (BTU)</th>
                                                <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '700' }}>Preço Mão de Obra</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { cap: '9.000 BTUs', price: '25.000 Kz' },
                                                { cap: '12.000 BTUs', price: '30.000 Kz' },
                                                { cap: '18.000 BTUs', price: '35.000 Kz' }
                                            ].map((item, index) => (
                                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
                                                    <td style={{ padding: '1.2rem', fontWeight: '600', color: 'var(--text-primary)' }}>{item.cap}</td>
                                                    <td style={{ padding: '1.2rem', textAlign: 'right', fontWeight: '800', color: 'var(--primary-color)', fontSize: '1.1rem' }}>{item.price}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </RevealOnScroll>

                        </div>

                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <a href="https://wa.me/244946776397?text=Olá,+preciso+de+agendar+uma+manutenção+para+o+meu+ar+condicionado." target="_blank" rel="noopener noreferrer" className="btn animate-ripple" style={{ display: 'inline-block', padding: '1rem 3rem', backgroundColor: '#25D366', color: 'white', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}>
                                Falar com um Técnico Agora
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Soluções para Empresas (B2B) */}
            <RevealOnScroll>
                <div style={{
                    marginTop: '4rem',
                    backgroundColor: '#003366', // Corporate Blue
                    borderRadius: '24px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 51, 102, 0.2)'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>

                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                        <Briefcase size={32} /> Soluções para Escritórios e Empresas
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9, position: 'relative' }}>
                        Precisa de manutenção para múltiplos aparelhos? Oferecemos <span style={{ fontWeight: 'bold', color: '#FFD700' }}>contratos mensais com descontos exclusivos</span> e atendimento prioritário.
                    </p>

                    <a href="https://wa.me/244955475575?text=Olá,+sou+uma+empresa+e+gostaria+de+uma+proposta+de+contrato."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn animate-ripple"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 3rem',
                            backgroundColor: 'white',
                            color: '#003366',
                            fontWeight: '800',
                            borderRadius: '50px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            textDecoration: 'none',
                            position: 'relative'
                        }}
                    >
                        Pedir Proposta Corporativa
                    </a>
                </div>
            </RevealOnScroll>

        </div >
    );
}
