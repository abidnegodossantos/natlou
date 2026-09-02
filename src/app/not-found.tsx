import Link from 'next/link';
import { Home, PhoneCall, HelpCircle } from 'lucide-react';

export const metadata = {
    title: 'Página Não Encontrada (404) | NATLOU Ar Condicionado',
    description: 'A página que procura não existe ou foi movida. Volte à página inicial da NATLOU.',
};

export default function NotFound() {
    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            textAlign: 'center'
        }}>
            <div style={{
                maxWidth: '600px',
                width: '100%',
                backgroundColor: 'var(--bg-card)',
                padding: '3.5rem 2rem',
                borderRadius: '24px',
                border: '1px solid var(--border-light)',
                boxShadow: '0 12px 40px var(--shadow-color)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem'
            }}>
                <div style={{
                    fontSize: '5rem',
                    fontWeight: '900',
                    lineHeight: '1',
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-2px'
                }}>
                    404
                </div>

                <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>
                    Página Não Encontrada
                </h1>

                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0, maxWidth: '460px' }}>
                    A página que tenta aceder não existe, foi movida ou o endereço inserido está incorreto.
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: 'center',
                    marginTop: '1rem',
                    width: '100%'
                }}>
                    <Link
                        href="/"
                        className="btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            padding: '0.85rem 1.8rem',
                            borderRadius: '50px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            boxShadow: '0 4px 15px rgba(30, 58, 95, 0.3)'
                        }}
                    >
                        <Home size={18} /> Voltar ao Início
                    </Link>

                    <a
                        href="https://wa.me/244955475575?text=Olá!%20Encontrei%20um%20link%20indisponível%20no%20site%20da%20Natlou."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: '#25D366',
                            color: 'white',
                            padding: '0.85rem 1.8rem',
                            borderRadius: '50px',
                            fontWeight: '700',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                        }}
                    >
                        <PhoneCall size={18} /> WhatsApp
                    </a>
                </div>

                <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Precisa de ajuda imediata com o seu ar condicionado? Ligue para <strong style={{ color: 'var(--text-primary)' }}>+244 946 776 397</strong>.
                </div>
            </div>
        </div>
    );
}
