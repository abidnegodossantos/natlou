import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import { FileCheck, ShieldAlert, Wrench, HelpCircle, PhoneCall } from 'lucide-react';

export const metadata = {
    title: 'Termos de Uso | NATLOU Ar Condicionado',
    description: 'Termos e condições gerais de utilização dos serviços e equipamentos da NATLOU - Comércio & Prestação de Serviços, (SU), Lda em Luanda, Angola.',
};

export default function TermosDeUso() {
    return (
        <div className="container section" style={{ minHeight: '80vh' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Início</Link> &gt;{' '}
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Termos de Uso</span>
            </div>

            {/* Header Section */}
            <RevealOnScroll>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto 3.5rem',
                    padding: '2.5rem 1.5rem',
                    backgroundColor: 'var(--bg-card)',
                    borderRadius: '24px',
                    boxShadow: '0 10px 30px var(--shadow-color)',
                    border: '1px solid var(--border-light)'
                }}>
                    <div style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(2, 132, 199, 0.12)',
                        color: 'var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.25rem'
                    }}>
                        <FileCheck size={36} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                        Termos e Condições de Uso
                    </h1>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Condições gerais relativas à prestação de serviços de montagem, manutenção e venda de aparelhos de climatização pela <strong style={{ color: 'var(--text-primary)' }}>NATLOU - Comércio & Prestação de Serviços, (SU), Lda</strong>.
                    </p>
                    <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Vigor a partir de: Setembro de 2026 | NIF: 5001650564
                    </div>
                </div>
            </RevealOnScroll>

            {/* Content Blocks */}
            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <RevealOnScroll delay={100}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <FileCheck size={22} color="var(--primary-color)" /> 1. Aceitação dos Termos
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            Ao aceder ao website da NATLOU ou ao solicitar serviços técnicos de instalação, manutenção ou reparação de ar condicionado, o utilizador concorda expressamente em cumprir estes Termos e Condições de Uso e todas as leis e regulamentos aplicáveis na República de Angola.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Wrench size={22} color="var(--primary-color)" /> 2. Serviços Técnicos e Montagens
                        </h2>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem', margin: 0 }}>
                            <li><strong>Garantia de Equipamentos:</strong> Os equipamentos comercializados possuem garantia oficial contra defeitos de fabrico conforme especificado no recibo/fatura.</li>
                            <li><strong>Montagem Grátis:</strong> A oferta de montagem é aplicável a compras de equipamentos de ar condicionado realizadas diretamente com a NATLOU, cobrindo o kit padrão de instalação.</li>
                            <li><strong>Diagnóstico Técnico:</strong> O valor da visita de diagnóstico técnico (3.000 Kz) cobre a verificação técnica local por profissionais certificados.</li>
                        </ul>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <ShieldAlert size={22} color="var(--primary-color)" /> 3. Preços e Pagamentos
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            Todos os preços apresentados na tabela transparente do website estão em Kwanzas (Kz) e refletem as tarifas em vigor para atendimento em Luanda, Benguela e Bengo. A NATLOU reserva-se o direito de atualizar preços sem aviso prévio, garantindo contudo os valores de orçamentos previamente aprovados.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <PhoneCall size={22} color="var(--primary-color)" /> 4. Apoio ao Cliente e Esclarecimentos
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            Para qualquer dúvida sobre as condições contratuais, pedidos de assistência técnica ou garantia, a nossa equipa de apoio técnico está disponível:
                        </p>
                        <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '12px', color: 'var(--text-primary)', fontWeight: '500' }}>
                            <strong>Contactos de Apoio:</strong> +244 946 776 397 | +244 922 643 541 | WhatsApp:{' '}
                            <a href="https://wa.me/244955475575" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: '700' }}>+244 955 475 575</a>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
}
