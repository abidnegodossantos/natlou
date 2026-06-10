'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import AnimatedCounter from '@/components/AnimatedCounter';
import WaveDivider from '@/components/WaveDivider';
import RevealOnScroll from '@/components/RevealOnScroll';
import BtuCalculator from '@/components/BtuCalculator';

export default function Home() {
    const images = [
        '/hero-banner-new.png',
        '/hero-slide-2.jpg',
        '/hero-slide-3.jpg'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            {/* Mobile Hero Section (Stacked) */}
            <section className="mobile-only section" style={{ padding: '0 0 2rem 0' }}>
                <div style={{ position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '50vh',
                        position: 'relative',
                        marginBottom: '2rem'
                    }}>
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <Image
                                src="/ac-12000-btu.jpg"
                                alt="Natlou AC"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                }}
                                priority // Hero image should be priority
                            />
                        </div>
                        {/* Optional Overlay for text visibility if needed, but we are stacking below */}
                        <div style={{
                            position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50px',
                            background: 'linear-gradient(to top, white, transparent)'
                        }}></div>
                    </div>

                    <div className="container" style={{ textAlign: 'center', padding: '0 1.5rem' }}>
                        <div className="typewriter-text" style={{ marginBottom: '1rem', justifyContent: 'center', display: 'flex' }}>
                            <h1 style={{
                                fontSize: '2.5rem', /* Min 24px requested, using larger */
                                fontWeight: '900',
                                color: 'var(--primary-color)',
                                lineHeight: '1.2',
                                display: 'flex',
                                gap: '0.2rem'
                            }}>
                                {['N', 'A', 'T', 'L', 'O', 'U'].map((letter, i) => (
                                    <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{letter}</span>
                                ))}
                            </h1>
                        </div>

                        <h2 className="hero-mobile-title" style={{
                            fontSize: '1.8rem', /* Approx 29px */
                            fontWeight: '700',
                            marginBottom: '1rem',
                            color: '#333'
                        }}>
                            Mantenha a sua casa fresca.
                        </h2>

                        <p style={{
                            fontSize: '1.1rem',
                            color: '#666',
                            marginBottom: '2rem',
                            lineHeight: '1.5'
                        }}>
                            Montagem Gratuita e Pagamento em Prestações.
                        </p>

                        <a href="https://wa.me/244946776397" className="btn animate-pulse-btn" style={{ width: '100%', maxWidth: '300px' }}>
                            Quero o meu AC Agora
                        </a>
                    </div>
                </div>
            </section>

            {/* Desktop Hero Section (Parallax) */}
            <section
                className="section hero-parallax desktop-only"
                style={{
                    padding: '0',
                    height: '85vh',
                    minHeight: '600px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Ken Burns Background */}
                <div className="animate-ken-burns" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url('/ac-12000-btu.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    zIndex: 0
                }}></div>
                {/* Blue Overlay Filter */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 40, 85, 0.6)', // Blue overlay
                    zIndex: 1
                }}></div>

                {/* Airflow Breeze Effects */}
                <div className="airflow-wind-line" style={{ top: '20%', animationDelay: '0s' }}></div>
                <div className="airflow-wind-line-2" style={{ top: '40%', animationDelay: '3s' }}></div>
                <div className="airflow-wind-line" style={{ top: '65%', animationDelay: '6s', height: '3px' }}></div>
                <div className="airflow-wind-line-2" style={{ top: '80%', animationDelay: '1.5s' }}></div>

                {/* Content */}
                <div className="container" style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start', // Left aligned
                    color: 'white'
                }}>
                    <div className="typewriter-text" style={{ marginBottom: '1rem' }}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 6vw, 6rem)',
                            fontWeight: '900',
                            lineHeight: '1',
                            color: 'white',
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            display: 'flex',
                            gap: '0.5rem'
                        }}>
                            {['N', 'A', 'T', 'L', 'O', 'U'].map((letter, i) => (
                                <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{letter}</span>
                            ))}
                        </h1>
                    </div>
                    <h2 className="animate-slide-in" style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        maxWidth: '800px',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        animationDelay: '0.8s',
                        opacity: 0 // Start hidden for animation
                    }}>
                        Mantenha a sua casa fresca.
                    </h2>

                    <p className="subtitle" style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '3rem',
                        fontWeight: '400',
                        maxWidth: '600px',
                        borderLeft: '4px solid var(--action-color)',
                        paddingLeft: '1rem'
                    }}>
                        Montagem Gratuita e Pagamento em Prestações.
                    </p>

                    <a href="https://wa.me/244946776397" target="_blank" rel="noopener noreferrer" className="btn animate-pulse-btn" style={{ fontSize: '1.2rem' }}>
                        Quero o meu AC Agora
                    </a>
                </div>

                {/* Wave Divider at Bottom of Hero */}
                <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 3 }}>
                    <WaveDivider fillColor="#ffffff" flip />
                </div>
            </section>

            {/* Services Preview */}
            <section className="section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <RevealOnScroll>
                        <h2 className="title" style={{ textAlign: 'center' }}>Nossos Serviços</h2>
                    </RevealOnScroll>
                    <div style={{
                        marginTop: '3rem',
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '3rem',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {/* Left Column: Image (Desktop) */}
                        <RevealOnScroll className="flex-1 min-w-[300px] desktop-only" style={{ flex: '1', minWidth: '300px' }}>
                            <div className="img-hover-zoom" style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                width: '100%',
                            }}>
                                <Image
                                    src="/services-banner.jpg"
                                    alt="Nossos Serviços - Instalação, Manutenção e Reparação"
                                    width={600}
                                    height={450}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                        </RevealOnScroll>

                        {/* Mobile Swipe Gallery (Installation Photos) */}
                        <div className="mobile-only" style={{ width: '100%', marginBottom: '1rem' }}>
                            <div className="horizontal-carousel">
                                {/* Slide 1 */}
                                <div className="carousel-item">
                                    <Image src="/installation-team.jpg" alt="Instalação Técnica 1" fill style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', zIndex: 10 }}>Instalação Profissional</div>
                                </div>
                                {/* Slide 2 */}
                                <div className="carousel-item">
                                    <Image src="/services-banner.jpg" alt="Equipa Técnica" fill style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', zIndex: 10 }}>Equipa Certificada</div>
                                </div>
                                {/* Slide 3 */}
                                <div className="carousel-item">
                                    <Image src="/maintenance-team.jpg" alt="Manutenção" fill style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: 10, left: 10, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', zIndex: 10 }}>Manutenção Completa</div>
                                </div>
                            </div>
                            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>Deslize para ver mais &rarr;</p>
                        </div>

                        {/* Right Column: Destaques */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
                                Por que escolher a Natlou?
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {/* Destaque 1 */}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                        <Image
                                            src="/installation-icon.jpg"
                                            alt="Ícone de Montagem"
                                            width={50}
                                            height={50}
                                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Montagem Gratuita</h4>
                                        <p style={{ color: '#666' }}>Na compra de qualquer Ar Condicionado.</p>
                                    </div>
                                </div>

                                {/* Destaque 2 */}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                        <Image
                                            src="/payment-icon.jpg"
                                            alt="Ícone de Pagamento"
                                            width={50}
                                            height={50}
                                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Pagamento Facilitado</h4>
                                        <p style={{ color: '#666' }}>Pague em até 2 prestações sem juros.</p>
                                    </div>
                                </div>

                                {/* Destaque 3 */}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                        <Image
                                            src="/delivery-icon.jpg"
                                            alt="Ícone de Entrega"
                                            width={50}
                                            height={50}
                                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>Entrega Grátis</h4>
                                        <p style={{ color: '#666' }}>Luanda, Benguela e Bengo.</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '2.5rem' }}>
                                <Link href="/services" className="btn">Ver Todos os Serviços</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BTU Calculator Section */}
            <section className="section" style={{ backgroundColor: '#ffffff', padding: '3rem 0' }}>
                <div className="container">
                    <RevealOnScroll>
                        <BtuCalculator />
                    </RevealOnScroll>
                </div>
            </section>

            {/* Social Proof / Stats Section */}
            <section
                className="section hero-parallax"
                style={{
                    backgroundImage: "url('/stock-infrastructure-v2.jpg')",
                    backgroundAttachment: 'fixed', // Parallax
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                    padding: '8rem 0'
                }}
            >
                {/* Wave Divider at Top (Transition from White to Image) */}
                <div style={{ position: 'absolute', top: '-1px', left: 0, width: '100%', zIndex: 3 }}>
                    <WaveDivider fillColor="var(--bg-color)" />
                </div>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: 'rgba(0, 40, 85, 0.85)', zIndex: 1
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Sólida Infraestrutura</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Somos 100% Angolana com stock garantido.</p>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: '3rem'
                    }}>
                        {/* Counter 1 */}
                        <RevealOnScroll delay={0}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '4rem',
                                    fontWeight: '800',
                                    color: 'var(--action-color)',
                                    lineHeight: '1'
                                }}>
                                    <AnimatedCounter end={300} prefix="+" />
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '0.5rem' }}>Clientes Particulares</div>
                            </div>
                        </RevealOnScroll>

                        {/* Counter 2 */}
                        <RevealOnScroll delay={200}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '4rem',
                                    fontWeight: '800',
                                    color: 'var(--action-color)',
                                    lineHeight: '1'
                                }}>
                                    <AnimatedCounter end={30} prefix="+" />
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '0.5rem' }}>Empresas Parceiras</div>
                            </div>
                        </RevealOnScroll>

                        {/* Counter 3 */}
                        <RevealOnScroll delay={400}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '4rem',
                                    fontWeight: '800',
                                    color: 'var(--action-color)',
                                    lineHeight: '1'
                                }}>
                                    100%
                                </div>
                                <div style={{ fontSize: '1.2rem', fontWeight: '500', marginTop: '0.5rem' }}>Angolana</div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
                {/* Wave Divider at Bottom (Transition from Image to Contact Light Blue) */}
                <div style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', zIndex: 3 }}>
                    <WaveDivider fillColor="#f0f4f8" flip />
                </div>
            </section>

            {/* New Mobile Fullscreen Section "Vamos até si" */}
            <section className="mobile-only mobile-fullscreen-hero" style={{ backgroundImage: "url('/contact-model.jpg')" }}>
                <div className="mobile-hero-overlay">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: '1.1' }}>
                        Vamos<br />até Si.
                    </h2>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '1.5rem' }}>
                        Atendimento personalizado onde você estiver.
                    </p>
                    <a href="https://wa.me/244946776397" className="btn" style={{ width: '100%', background: 'white', color: 'var(--primary-color)' }}>
                        Falar com Consultor
                    </a>
                </div>
            </section>

            {/* Contact / Face of Company Section */}
            <section className="section" style={{ backgroundColor: '#f0f4f8', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap-reverse' // Image last on mobile, but let's check
                    }}>
                        {/* Image Side with Speech Bubble */}
                        <div style={{ flex: '1', minWidth: '300px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                            {/* Speech Bubble */}
                            <div style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '10%',
                                backgroundColor: 'white',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                borderBottomLeftRadius: '0',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                maxWidth: '250px',
                                zIndex: 10,
                                animation: 'pulse-yellow 4s infinite ease-in-out' // Reuse pulse slightly
                            }}>
                                <p style={{ fontSize: '0.95rem', color: '#333', fontWeight: '600', lineHeight: '1.5' }}>
                                    "Olá! Posso ajudar a escolher o melhor BTU para a sua sala?"
                                </p>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '20px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'white',
                                    transform: 'rotate(45deg)'
                                }}></div>
                            </div>

                            <div className="img-hover-zoom" style={{
                                width: '350px',
                                height: '350px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '6px solid white',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                position: 'relative'
                            }}>
                                <Image
                                    src="/contact-model.jpg"
                                    alt="Atendimento Natlou"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* Right Side: Text & CTA */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ textTransform: 'uppercase', color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.9rem' }}>Atendimento Humanizado</span>
                                <h2 style={{
                                    fontSize: '2.5rem',
                                    fontWeight: '800',
                                    color: '#002855',
                                    marginTop: '0.5rem',
                                    marginBottom: '1.5rem',
                                    lineHeight: '1.2'
                                }}>
                                    Ainda tem <br />
                                    <span style={{ color: 'var(--secondary-color)' }}>Dúvidas?</span>
                                </h2>
                            </div>

                            <p style={{
                                fontSize: '1.15rem',
                                color: '#555',
                                marginBottom: '2.5rem',
                                lineHeight: '1.6'
                            }}>
                                Não fale com robôs. A nossa equipa está pronta para entender a sua necessidade e recomendar a solução perfeita para si.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="https://wa.me/244946776397" target="_blank" rel="noopener noreferrer" className="btn" style={{
                                    backgroundColor: '#25D366',
                                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)'
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    Falar no WhatsApp
                                </a>

                                <a href="tel:+244946776397" className="btn">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    Ligar Agora (+244 946 776 397)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
