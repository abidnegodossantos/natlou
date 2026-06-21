import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer" style={{ borderTop: '5px solid var(--action-color)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '4rem',
                    marginBottom: '3rem'
                }}>
                    {/* Column 1: Company Info */}
                    <div>
                        <h2 className="logo-text" style={{ fontSize: '2rem', marginBottom: '0.2rem', color: 'white' }}>NATLOU</h2>
                        <div style={{ color: 'var(--action-color)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            🇦🇴 Empresa 100% Angolana
                        </div>
                        <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            A sua parceira de confiança em climatização e frio. Soluções completas de venda, instalação e manutenção para o seu conforto.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {/* Facebook - Official Blue */}
                            <a href="https://web.facebook.com/profile.php?id=61578679590280&locale=pt_BR" target="_blank" rel="noopener noreferrer" style={{
                                width: '45px', height: '45px',
                                backgroundColor: '#1877F2', // Facebook Blue
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                border: 'none'
                            }} className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>

                            {/* Instagram - Official Gradient */}
                            <a href="https://www.instagram.com/natlou_lda" target="_blank" rel="noopener noreferrer" style={{
                                width: '45px', height: '45px',
                                background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', // Instagram Gradient
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                border: 'none'
                            }} className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>

                            {/* TikTok - Official Black */}
                            <a href="https://www.tiktok.com/@natlouoficial" target="_blank" rel="noopener noreferrer" style={{
                                width: '45px', height: '45px',
                                backgroundColor: '#000000', // TikTok Black
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                border: 'none'
                            }} className="social-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Contacts */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700', color: 'var(--action-color)' }}>Contactos</h3>

                        <div style={{ marginBottom: '2rem' }}>
                            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '0.8rem' }}>Contactos Oficiais:</p>

                            {/* Vendas */}
                            <div style={{ marginBottom: '1.2rem' }}>
                                <a href="https://wa.me/244946776397?text=Olá, gostaria de solicitar um orçamento ou comprar um equipamento." target="_blank" rel="noopener noreferrer" style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '800',
                                    color: 'white',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.2rem'
                                }}>
                                    <span style={{ color: '#25D366', display: 'flex', alignItems: 'center' }}><Phone size={16} /></span> +244 946 776 397
                                </a>
                                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Vendas e Orçamentos</p>
                            </div>

                            {/* Suporte */}
                            <div style={{ marginBottom: '1.2rem' }}>
                                <a href="https://wa.me/244955475575?text=Olá,+sou+uma+empresa+e+gostaria+de+uma+proposta+de+contrato." target="_blank" rel="noopener noreferrer" style={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                    color: '#ccc',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '0.2rem'
                                }}>
                                    <span style={{ color: '#aaa', display: 'flex', alignItems: 'center' }}><Phone size={16} /></span> +244 955 475 575
                                </a>
                                <p style={{ color: '#aaa', fontSize: '0.85rem' }}>Suporte e Parcerias</p>
                            </div>

                            <a href="mailto:natlou.limitada@gmail.com" style={{ color: 'var(--secondary-color)', textDecoration: 'none', display: 'block', marginTop: '1rem' }}>
                                natlou.limitada@gmail.com
                            </a>
                        </div>

                        <div>
                            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Localização:</p>
                            <p style={{ color: 'white', fontWeight: '500' }}>
                                Zango II, Luanda, Angola
                            </p>
                            <p style={{ color: '#ccc', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                                Aberto de Segunda a Sexta: 8h - 17h
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Map */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700', color: 'var(--action-color)' }}>Onde Estamos</h3>
                        <p style={{ color: '#ccc', marginBottom: '1rem', lineHeight: '1.6' }}>
                            <strong>Sede:</strong> Zango II (junto ao IMAG),<br />
                            Viana, Luanda - Angola
                        </p>
                        <div style={{
                            width: '100%',
                            height: '250px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '2px solid rgba(255,255,255,0.2)'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.626880378876!2d13.3888!3d-8.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTUnMDAuMSJTIDEzwrAyMycyMC4wIkU!5e0!3m2!1spt-PT!2sao"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa Natlou"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    <p style={{ color: '#777', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} Natlou Prestação de Serviços. Todos os direitos reservados.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem', color: '#aaa' }}>
                        <Link href="/faq">Perguntas Frequentes (FAQ)</Link>
                        <Link href="/privacy">Política de Privacidade</Link>
                        <Link href="/terms">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
