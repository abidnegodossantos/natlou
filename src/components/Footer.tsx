import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" style={{
            backgroundColor: '#0b1120',
            color: '#e2e8f0',
            padding: '3.5rem 0 2rem',
            borderTop: '4px solid #fbbf24',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem',
                    marginBottom: '2.5rem'
                }}>
                    {/* Column 1: Company Info */}
                    <div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <Image
                                src="/logo-natlou-official.png"
                                alt="Natlou - Comércio & Prestação de Serviços"
                                width={160}
                                height={78}
                                style={{
                                    objectFit: 'contain',
                                    height: 'auto',
                                    maxHeight: '54px',
                                    width: 'auto',
                                    maxWidth: '150px',
                                    aspectRatio: '532 / 261',
                                }}
                            />
                        </div>
                        <div style={{ color: '#fbbf24', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                            🇦🇴 Empresa 100% Angolana
                        </div>
                        <p style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem', marginBottom: '0.25rem', lineHeight: '1.4' }}>
                            NATLOU - Comércio & Prestação de Serviços, (SU), Lda
                        </p>
                        <p style={{ color: '#fbbf24', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1rem' }}>
                            NIF: 5001650564
                        </p>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            A sua parceira de confiança em climatização e frio. Soluções completas de venda, instalação e manutenção para o seu conforto.
                        </p>

                        {/* Redes Sociais */}
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            {/* Facebook */}
                            <a href="https://web.facebook.com/profile.php?id=61578679590280&locale=pt_BR" target="_blank" rel="noopener noreferrer" style={{
                                width: '40px', height: '40px',
                                backgroundColor: '#1877F2',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'transform 0.2s ease, opacity 0.2s ease',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                border: 'none'
                            }} className="social-icon" aria-label="Facebook da Natlou">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/natlou_lda" target="_blank" rel="noopener noreferrer" style={{
                                width: '40px', height: '40px',
                                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'transform 0.2s ease, opacity 0.2s ease',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                border: 'none'
                            }} className="social-icon" aria-label="Instagram da Natlou">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>

                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@natlouoficial" target="_blank" rel="noopener noreferrer" style={{
                                width: '40px', height: '40px',
                                backgroundColor: '#000000',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'transform 0.2s ease, opacity 0.2s ease',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                                border: '1px solid rgba(255,255,255,0.15)'
                            }} className="social-icon" aria-label="TikTok da Natlou">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Contacts */}
                    <div>
                        <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', fontWeight: '700', color: '#fbbf24' }}>Contactos</h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.6rem', fontWeight: '500' }}>Contactos Oficiais:</p>

                            {/* WhatsApp Principal */}
                            <div style={{
                                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                                border: '1px solid rgba(37, 211, 102, 0.35)',
                                borderRadius: '10px',
                                padding: '0.75rem 1rem',
                                marginBottom: '1.25rem',
                                display: 'inline-block',
                                width: '100%',
                                maxWidth: '320px'
                            }}>
                                <a href="https://wa.me/244955475575?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Natlou." target="_blank" rel="noopener noreferrer" style={{
                                    fontSize: '1.15rem',
                                    fontWeight: '700',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    whiteSpace: 'nowrap'
                                }}>
                                    <span style={{ color: '#25D366', display: 'flex', alignItems: 'center' }}><Phone size={17} /></span> +244 955 475 575
                                </a>
                                <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem', margin: 0 }}>WhatsApp Principal</p>
                            </div>

                            {/* Telefones Linhas Diretas (Dispostos Verticalmente Sem Quebras) */}
                            <div style={{ marginBottom: '1.1rem' }}>
                                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.4rem', fontWeight: '500' }}>Linhas de Chamada Direta:</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                    <a href="tel:+244946776397" style={{
                                        fontSize: '1.05rem',
                                        fontWeight: '600',
                                        color: '#e2e8f0',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        whiteSpace: 'nowrap',
                                        transition: 'color 0.2s ease'
                                    }}>
                                        <span style={{ color: '#38bdf8', display: 'flex', alignItems: 'center' }}><Phone size={15} /></span> +244 946 776 397
                                    </a>
                                    <a href="tel:+244922643541" style={{
                                        fontSize: '1.05rem',
                                        fontWeight: '600',
                                        color: '#e2e8f0',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        whiteSpace: 'nowrap',
                                        transition: 'color 0.2s ease'
                                    }}>
                                        <span style={{ color: '#38bdf8', display: 'flex', alignItems: 'center' }}><Phone size={15} /></span> +244 922 643 541
                                    </a>
                                </div>
                            </div>

                            {/* E-mail */}
                            <a href="mailto:natlou.limitada@gmail.com" style={{
                                color: '#38bdf8',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                fontSize: '0.92rem',
                                fontWeight: '500',
                                marginTop: '0.2rem'
                            }}>
                                <Mail size={15} /> natlou.limitada@gmail.com
                            </a>
                        </div>

                        <div>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.35rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Clock size={14} /> Horário de Funcionamento:
                            </p>
                            <p style={{ color: '#ffffff', fontWeight: '500', fontSize: '0.88rem' }}>
                                Segunda a Sexta: 8h00 - 17h00
                            </p>
                            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', marginTop: '0.15rem' }}>
                                Sábado: 8h00 - 13h00
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Map */}
                    <div>
                        <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', fontWeight: '700', color: '#fbbf24' }}>Onde Estamos</h3>
                        <p style={{ color: '#cbd5e1', marginBottom: '0.85rem', lineHeight: '1.5', fontSize: '0.9rem', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                            <MapPin size={16} style={{ flexShrink: 0, marginTop: '0.2rem', color: '#fbbf24' }} />
                            <span>
                                <strong>Sede:</strong> Zango II - Junto ao IMAG,<br />
                                Viana, Luanda - Angola
                            </span>
                        </p>
                        <div style={{
                            width: '100%',
                            height: '190px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.15)',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.626880378876!2d13.3888!3d-8.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTUnMDAuMSJTIDEzwrAyMycyMC4wIkU!5e0!3m2!1spt-PT!2sao"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa da Localização da Natlou"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal & Copyright Bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                        &copy; {currentYear} NATLOU - Comércio & Prestação de Serviços, (SU), Lda. Todos os direitos reservados.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem' }}>
                        <Link href="/faq" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s ease' }}>Perguntas Frequentes (FAQ)</Link>
                        <Link href="/politica-de-privacidade" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s ease' }}>Política de Privacidade</Link>
                        <Link href="/termos-de-uso" style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s ease' }}>Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
