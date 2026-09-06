import Image from 'next/image';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contactos" className="footer-premium" aria-label="Rodapé institucional Natlou">
            {/* Subtle background air conditioner watermark */}
            <div className="footer-ac-watermark" aria-hidden="true">
                <Image
                    src="/ac-9000-btu.png"
                    alt=""
                    width={420}
                    height={260}
                    sizes="420px"
                    style={{ objectFit: 'contain' }}
                />
            </div>

            <div className="container footer-inner-content">
                {/* 1. Bloco Superior / CTA Bar */}
                <div className="footer-cta-bar">
                    <p className="footer-cta-text">
                        Fale com um dos nossos especialistas e solicite o seu orçamento gratuito.
                    </p>

                    <div className="footer-cta-buttons">
                        <a
                            href="https://wa.me/244955475575?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20gratuito%20para%20climatização."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-footer-cta-primary"
                            aria-label="Falar no WhatsApp"
                        >
                            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>Falar no WhatsApp</span>
                        </a>

                        <a
                            href="tel:+244946776397"
                            className="btn-footer-cta-secondary"
                            aria-label="Ligar agora"
                        >
                            <Phone size={17} />
                            <span>Ligar agora</span>
                        </a>
                    </div>
                </div>

                {/* 2. Colunas Principais */}
                <div className="footer-main-grid">
                    {/* COLUNA 1 — NATLOU */}
                    <div>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <Image
                                src="/logo-natlou-official.png"
                                alt="Natlou Climatização"
                                width={140}
                                height={68}
                                style={{
                                    objectFit: 'contain',
                                    height: 'auto',
                                    maxHeight: '48px',
                                    width: 'auto',
                                    maxWidth: '140px',
                                    aspectRatio: '532 / 261',
                                }}
                            />
                        </div>
                        <p className="footer-company-desc">
                            Soluções completas em climatização para sua casa, empresa ou indústria.
                            Conforto que você sente, qualidade que você confia.
                        </p>
                    </div>

                    {/* COLUNA 2 — NAVEGAÇÃO */}
                    <div>
                        <h4 className="footer-col-title">Navegação</h4>
                        <ul className="footer-nav-list">
                            <li><a href="/#inicio" className="footer-nav-link">Início</a></li>
                            <li><a href="/#produtos" className="footer-nav-link">Produtos</a></li>
                            <li><a href="/#servicos" className="footer-nav-link">Serviços</a></li>
                            <li><a href="/#sobre" className="footer-nav-link">Sobre Nós</a></li>
                            <li><a href="/#projetos" className="footer-nav-link">Projetos</a></li>
                            <li><a href="/#contactos" className="footer-nav-link">Contactos</a></li>
                        </ul>
                    </div>

                    {/* COLUNA 3 — SERVIÇOS */}
                    <div>
                        <h4 className="footer-col-title">Serviços</h4>
                        <ul className="footer-nav-list">
                            <li><a href="/#produtos" className="footer-nav-link">Venda de Equipamentos</a></li>
                            <li><a href="/#servicos" className="footer-nav-link">Instalação</a></li>
                            <li><a href="/#servicos" className="footer-nav-link">Manutenção</a></li>
                            <li><a href="/#servicos" className="footer-nav-link">Reparação</a></li>
                            <li><a href="/#servicos" className="footer-nav-link">Higienização</a></li>
                            <li><a href="/#servicos" className="footer-nav-link">Assistência Técnica</a></li>
                        </ul>
                    </div>

                    {/* COLUNA 4 — CONTACTOS */}
                    <div>
                        <h4 className="footer-col-title">Contactos</h4>
                        <div className="footer-contacts-list">
                            <div className="footer-contact-item">
                                <Phone size={16} />
                                <a href="tel:+244946776397" className="footer-contact-link">+244 946 776 397</a>
                            </div>
                            <div className="footer-contact-item">
                                <Phone size={16} />
                                <a href="tel:+244922643541" className="footer-contact-link">+244 922 643 541</a>
                            </div>
                            <div className="footer-contact-item">
                                <Mail size={16} />
                                <a href="mailto:natlou.limitada@gmail.com" className="footer-contact-link">natlou.limitada@gmail.com</a>
                            </div>
                            <div className="footer-contact-item">
                                <MapPin size={16} />
                                <span>Luanda, Angola</span>
                            </div>
                            <div className="footer-contact-item">
                                <Clock size={16} />
                                <div>
                                    <span>Seg - Sex: 08h00 - 17h00</span>
                                    <br />
                                    <span style={{ color: '#94a3b8' }}>Sáb: 08h00 - 13h00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA 5 — SIGA-NOS */}
                    <div>
                        <h4 className="footer-col-title">Siga-nos</h4>
                        <div className="footer-social-row">
                            {/* Facebook */}
                            <a
                                href="https://web.facebook.com/profile.php?id=61578679590280&locale=pt_BR"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                aria-label="Facebook da Natlou"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/natlou_lda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                aria-label="Instagram da Natlou"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/244955475575"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                aria-label="WhatsApp da Natlou"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-btn"
                                aria-label="LinkedIn da Natlou"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3. Copyright & Créditos */}
                <div className="footer-bottom-bar">
                    <p className="footer-copyright">
                        &copy; {currentYear} NATLOU Climatização. Todos os direitos reservados.
                    </p>
                    <p className="footer-credits">
                        Desenvolvido por <span className="footer-credit-author">abi|dev.me</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
