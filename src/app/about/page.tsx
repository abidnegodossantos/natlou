'use client';

import { useEffect, useState, useRef, FC } from 'react';
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const Counter: FC<CounterProps> = ({ end, duration = 2000, prefix = '', suffix = '', label }) => {
    const [count, setCount] = useState<number>(0);
    const countRef = useRef<HTMLDivElement>(null);
    const [hasStarted, setHasStarted] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let start = 0;
        const totalSteps = Math.ceil(duration / 16); // 60fps
        const increment = end / totalSteps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= totalSteps) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(prev => Math.min(Math.ceil(prev + increment), end));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [hasStarted, end, duration]);

    return (
        <div ref={countRef} style={{ textAlign: 'center', minWidth: '200px' }}>
            <div style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                fontWeight: '800',
                marginBottom: '0.5rem',
                color: 'var(--action-color)',
                fontFamily: 'var(--font-montserrat), sans-serif',
                textShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}>
                {prefix}{count}{suffix}
            </div>
            <div style={{
                fontSize: '1.1rem',
                fontWeight: '500',
                opacity: 0.95,
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                {label}
            </div>
        </div>
    );
};

export default function About() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(reveal => observer.observe(reveal));

        return () => reveals.forEach(reveal => observer.unobserve(reveal));
    }, []);

    return (
        <>
            {/* Hero Section (O Topo da Página) - Impacto Imediato */}
            <div className="about-hero">
                <div className="about-hero-bg"></div>
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content container">
                    <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: 'var(--action-color)',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                        Sobre a Natlou
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.2',
                        textShadow: '0 4px 6px rgba(0,0,0,0.3)',
                        animation: 'slideInLeft 1s ease-out forwards'
                    }}>
                        Conheça a história e os valores que movem a Natlou.
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        fontWeight: '300',
                        color: '#f0f0f0',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        animation: 'slideInLeft 1s ease-out 0.3s forwards',
                        opacity: 0 /* Start hidden for animation */
                    }}>
                        De uma empresa angolana para mais de 300 lares confortáveis.
                    </p>
                </div>
            </div>


            {/* Bloco 1: A Nossa História (Storytelling Interativo) */}
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5rem', flexWrap: 'wrap' }}>

                        {/* Image Side - Interactive Story */}
                        <div className="reveal" style={{ flex: '1', minWidth: '320px', position: 'relative' }}>
                            <div className="story-img-container" style={{
                                position: 'relative',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                cursor: 'pointer',
                                height: '550px'
                            }}>
                                <Image
                                    src="/installation-team-v2.jpg"
                                    alt="Equipa Técnica Natlou"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1)',
                                    }}
                                    className="story-img"
                                />
                                {/* Overlay Gradient for better text vis if needed, or just hover effect */}
                                <div className="story-overlay" style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    width: '100%',
                                    padding: '2rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                    display: 'flex',
                                    alignItems: 'flex-end'
                                }}>
                                    <span style={{
                                        color: 'white',
                                        backgroundColor: 'var(--primary-color)',
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                                        transform: 'translateY(20px)',
                                        transition: 'transform 0.4s ease',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.4rem'
                                    }} className="story-tag">
                                        <BadgeCheck size={16} /> Técnicos Certificados
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Text Side - Scroll Reveal Moments */}
                        <div style={{ flex: '1', minWidth: '320px' }}>
                            <div className="reveal delay-100" style={{ marginBottom: '2rem' }}>
                                <span style={{
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    color: 'var(--secondary-color)',
                                    display: 'block',
                                    marginBottom: '0.8rem'
                                }}>
                                    A Nossa História
                                </span>
                                <h2 style={{
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    color: 'var(--primary-color)',
                                    marginBottom: '1.5rem',
                                    fontWeight: '800',
                                    lineHeight: '1.2'
                                }}>
                                    Mais do que Vender,<br />
                                    <span style={{ color: 'var(--action-color)' }}>Nós Cuidamos.</span>
                                </h2>
                            </div>

                            <div className="story-content">
                                <p className="reveal delay-200" style={{
                                    fontSize: '1.25rem',
                                    lineHeight: '1.8',
                                    color: '#444',
                                    marginBottom: '2rem',
                                    borderLeft: '4px solid var(--primary-color)',
                                    paddingLeft: '1.5rem'
                                }}>
                                    "A <strong>NATLOU</strong> não nasceu apenas para vender ar condicionado. Nascemos com a missão de trazer conforto, segurança e durabilidade para as famílias angolanas."
                                </p>

                                <p className="reveal delay-300" style={{
                                    fontSize: '1.2rem',
                                    lineHeight: '1.8',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '2rem'
                                }}>
                                    O que nos diferencia? <strong>Não é só a máquina.</strong>
                                </p>

                                <p className="reveal delay-400" style={{
                                    fontSize: '1.2rem',
                                    lineHeight: '1.8',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '3rem',
                                    backgroundColor: 'var(--bg-card)',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)'
                                }}>
                                    É o atendimento personalizado e a busca constante pela inovação técnica. Entendemos que cada grau faz a diferença no seu dia a dia.
                                </p>

                                <div className="reveal delay-500">
                                    <a href="/services" className="btn">
                                        Conheça Nossos Serviços
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <style jsx>{`
                    .story-img-container:hover .story-img {
                        transform: scale(1.1);
                    }
                    .story-img-container:hover .story-overlay {
                        opacity: 1;
                    }
                    .story-img-container:hover .story-tag {
                        transform: translateY(0);
                    }
                `}</style>
            </div>

            {/* Bloco 2: Nossa Identidade (Missão, Visão, Valores) */}
            <div className="container section" style={{ paddingBottom: '0' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        color: 'var(--secondary-color)',
                        display: 'block',
                        marginBottom: '0.8rem'
                    }}>
                        Nossa Identidade
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        color: 'var(--primary-color)',
                        fontWeight: '800'
                    }}>
                        Missão, Visão e Valores
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    {/* Mission FLIP Card */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/* FRONT: Icon + Title */}
                            <div className="flip-card-front">
                                <div style={{
                                    width: '120px', height: '120px', margin: '0 auto 1.5rem',
                                    position: 'relative',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}>
                                    <Image
                                        src="/mission-rocket.jpg"
                                        alt="Missão Natlou"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', fontWeight: '800' }}>Missão</h3>
                                <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>(Passe o rato para ver)</p>
                            </div>

                            {/* BACK: Detailed Text */}
                            <div className="flip-card-back" style={{
                                background: 'linear-gradient(135deg, var(--primary-color), #003366)',
                                border: '2px solid var(--action-color)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--action-color)' }}>Nossa Missão</h3>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                    "Oferecer excelência em climatização e superar expectativas com soluções modernas e sustentáveis."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vision FLIP Card */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/* FRONT */}
                            <div className="flip-card-front">
                                <div style={{
                                    width: '120px', height: '120px', margin: '0 auto 1.5rem',
                                    position: 'relative',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}>
                                    <Image
                                        src="/vision-eye.jpg"
                                        alt="Visão Natlou"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', fontWeight: '800' }}>Visão</h3>
                                <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>(Passe o rato para ver)</p>
                            </div>

                            {/* BACK */}
                            <div className="flip-card-back" style={{
                                background: 'linear-gradient(135deg, var(--secondary-color), var(--primary-color))'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Nossa Visão</h3>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                    "Ser a referência nº 1 no setor de climatização em Angola, reconhecida pela qualidade total e confiança."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Values FLIP Card */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            {/* FRONT */}
                            <div className="flip-card-front">
                                <div style={{
                                    width: '120px', height: '120px', margin: '0 auto 1.5rem',
                                    position: 'relative',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                }}>
                                    <Image
                                        src="/values-chart.png"
                                        alt="Valores Natlou"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', fontWeight: '800' }}>Valores</h3>
                                <p style={{ marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>(Passe o rato para ver)</p>
                            </div>

                            {/* BACK */}
                            <div className="flip-card-back" style={{
                                background: 'linear-gradient(135deg, #333, #000)',
                                border: '2px solid var(--secondary-color)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>Nossos Valores</h3>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                    "Ética, Integridade, Transparência e Foco absoluto na satisfação do cliente."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container section">
                {/* Numbers Section (Dynamic Social Proof) */}
                <div style={{
                    backgroundColor: 'var(--primary-color)',
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, #003366 100%)',
                    color: 'white',
                    padding: '5rem 2rem',
                    borderRadius: '24px',
                    marginBottom: '6rem',
                    textAlign: 'center',
                    boxShadow: '0 20px 40px rgba(0, 40, 85, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Background Pattern */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.1,
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                        pointerEvents: 'none'
                    }}></div>

                    <h2 style={{ fontSize: '2.2rem', marginBottom: '4rem', color: 'white', fontWeight: '800' }}>
                        Números que Comprovam nossa Autoridade
                    </h2>

                    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '3rem' }}>
                        <Counter
                            end={300}
                            prefix="+"
                            label="Clientes Particulares"
                            duration={2500}
                        />
                        <Counter
                            end={30}
                            prefix="+"
                            label="Empresas Parceiras"
                            duration={2000}
                        />
                        <Counter
                            end={100}
                            suffix="%"
                            label="Empresa Angolana"
                            duration={1500}
                        />
                    </div>
                </div>
            </div>

            {/* Humanização - Quem Faz Acontecer */}
            <div style={{ backgroundColor: 'var(--bg-color)', padding: '6rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5rem',
                        flexWrap: 'wrap-reverse', // Image on right/bottom on mobile
                        justifyContent: 'center'
                    }}>
                        {/* Quote Side */}
                        <div className="reveal" style={{ flex: '1', minWidth: '320px', maxWidth: '600px' }}>
                            <div style={{ position: 'relative' }}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--action-color)" style={{ opacity: 0.2, position: 'absolute', top: '-30px', left: '-20px' }}>
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V18C14.017 19.1046 13.1216 20 12.017 20H3C1.89543 20 1 19.1046 1 18V9C1 7.89543 1.89543 7 3 7H14.017V5C14.017 3.89543 14.9124 3 16.017 3H21.017C22.1216 3 23.017 3.89543 23.017 5V15C23.017 16.1046 22.1216 17 21.017 17H16.017C14.9124 17 14.017 16.1046 14.017 15V21Z"/>
                                </svg>

                                <h3 style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    lineHeight: '1.4',
                                    color: 'var(--primary-color)',
                                    fontWeight: '700',
                                    fontStyle: 'italic',
                                    marginBottom: '2rem',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                    "Acreditamos no poder das parcerias estratégicas e no atendimento próximo. A nossa equipa vai até si, onde estiver."
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
                                    <div style={{ height: '2px', width: '40px', backgroundColor: 'var(--action-color)' }}></div>
                                    <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        A Direção Natlou
                                    </span>
                                </div>

                                <a
                                    href="https://wa.me/244946776397"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                    style={{ padding: '1rem 2.5rem' }}
                                >
                                    Fale com a nossa equipa agora
                                </a>
                            </div>
                        </div>

                        {/* Image Side - Partnership (Rounded Rectangle) */}
                        <div className="reveal" style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                width: '100%',
                                maxWidth: '450px',
                                height: '550px',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                                position: 'relative',
                                border: '4px solid white'
                            }}>
                                <Image
                                    src="/partners.jpg"
                                    alt="Parceria Estratégica Natlou"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                {/* Optional: Gradient overlay at bottom for depth */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    height: '30%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)'
                                }}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Premium Final CTA Section */}
            <div className="container" style={{ marginBottom: '6rem' }}>
                <div style={{
                    textAlign: 'center',
                    padding: '5rem 2rem',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(0,0,0,0.03)',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: '800',
                        color: 'var(--primary-color)',
                        marginBottom: '3rem',
                        lineHeight: '1.2'
                    }}>
                        Já nos conhece. <br />
                        <span style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '0.8em' }}>Agora deixe-nos cuidar do seu conforto.</span>
                    </h2>

                    <a href="/services" className="btn-premium-cta">
                        Ver Preços de Manutenção
                    </a>
                </div>
            </div>
        </>
    );
}
