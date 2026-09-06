import ContactSection from '@/components/ContactSection';

export default function Contact() {
    return (
        <div style={{ paddingBottom: '4rem' }}>
            <ContactSection />

            <div className="container" style={{ marginTop: '4rem', position: 'relative', zIndex: 3 }}>
                {/* Onde Estamos - Location Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            backgroundColor: 'rgba(var(--primary-rgb), 0.15)',
                            color: 'var(--primary-color)',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            display: 'inline-block',
                            marginBottom: '1rem'
                        }}>
                            LOCALIZAÇÃO & REGISTO
                        </span>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>
                            Visite a nossa Sede
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        alignItems: 'stretch'
                    }}>
                        {/* Address Text */}
                        <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.3rem' }}>
                                    NATLOU - Comércio & Prestação de Serviços, (SU), Lda
                                </h3>
                                <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--action-color)' }}>
                                    NIF: 5001650564
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <div style={{ backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Endereço Físico</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        <strong>Zango II - Junto ao IMAG</strong>,<br />
                                        Viana, Luanda - Angola
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '50%', color: '#f57c00', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Horário de Funcionamento</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '600' }}>Segunda a Sexta: 8h00 - 17h00</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '600' }}>Sábado: 8h00 - 13h00</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div style={{ height: '400px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.626880378876!2d13.3888!3d-8.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTUnMDAuMSJTIDEzwrAyMycyMC4wIkU!5e0!3m2!1spt-PT!2sao"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização Zango II"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
