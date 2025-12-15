export default function Contact() {
    return (
        <div style={{ paddingBottom: '4rem' }}>
            {/* Hero Section with Background Image */}
            <div style={{
                position: 'relative',
                height: '60vh',
                minHeight: '500px',
                backgroundImage: 'url("/contact-hero-v2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%', // Focused on the face
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginBottom: '4rem'
            }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(5, 20, 50, 0.65)', // Dark blue/black tint for brand consistency
                    zIndex: 1,
                    backdropFilter: 'blur(2px)'
                }}></div>

                {/* Hero Content */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem', marginTop: '-4rem' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                    }}>
                        Contactos
                    </h1>
                    <p style={{
                        fontSize: '1.4rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: '1.6',
                        color: 'rgba(255, 255, 255, 0.95)',
                        fontWeight: '500'
                    }}>
                        Estamos prontos para atender você. Entre em contacto por telefone, email ou visite-nos.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '-120px', position: 'relative', zIndex: 3 }}>
                {/* Contact Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>

                    {/* Card: Telefones */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        border: '1px solid rgba(0,0,0,0.02)'
                    }}>
                        <div style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: '#e6f7ff',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            color: 'var(--primary-color)'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>Ligue para Nós</h3>
                        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '0.5rem' }}>+244 946 776 397</p>
                        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '1.5rem' }}>+244 955 475 575</p>
                        <a href="tel:+244946776397" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>Fazer Chamada →</a>
                    </div>

                    {/* Card: WhatsApp */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        border: '1px solid rgba(0,0,0,0.02)'
                    }}>
                        <div style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: '#e6fffa',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            color: '#25D366'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>Chat WhatsApp</h3>
                        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Atendimento Rápido</p>
                        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Seg-Sáb</p>
                        <a href="https://wa.me/244946776397" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 'bold', textDecoration: 'none' }}>Iniciar Conversa →</a>
                    </div>

                    {/* Card: Email */}
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        border: '1px solid rgba(0,0,0,0.02)'
                    }}>
                        <div style={{
                            width: '70px',
                            height: '70px',
                            backgroundColor: '#fff0f0',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            color: 'var(--accent-color)'
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>Envie um Email</h3>
                        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '0.5rem' }}>natlou.limitada@gmail.com</p>
                        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Respondemos em 24h</p>
                        <a href="mailto:natlou.limitada@gmail.com" style={{ color: 'var(--accent-color)', fontWeight: 'bold', textDecoration: 'none' }}>Escrever Email →</a>
                    </div>

                </div>

                {/* Onde Estamos - Location Section */}
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            backgroundColor: '#e6f7ff',
                            color: 'var(--primary-color)',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '0.9rem',
                            display: 'inline-block',
                            marginBottom: '1rem'
                        }}>
                            LOCALIZAÇÃO
                        </span>
                        <h2 style={{ fontSize: '2.5rem', color: '#333', fontWeight: 'bold' }}>
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
                        <div style={{ padding: '2.5rem', backgroundColor: '#f9f9f9', borderRadius: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
                                <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a202c' }}>Endereço Físico</h3>
                                    <p style={{ color: '#4a5568', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        <strong>Zango II</strong> (junto ao IMAG),<br />
                                        Viana, Luanda - Angola
                                    </p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
                                <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '50%', color: '#f57c00', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1a202c' }}>Horário</h3>
                                    <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>Segunda a Sexta: 8h - 17h</p>
                                    <p style={{ color: '#4a5568', fontSize: '1.1rem' }}>Sábado: 8h - 13h</p>
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
