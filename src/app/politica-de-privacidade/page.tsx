import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
    title: 'Política de Privacidade | NATLOU Ar Condicionado',
    description: 'Política de privacidade e proteção de dados pessoais da NATLOU - Comércio & Prestação de Serviços, (SU), Lda em Luanda, Angola.',
};

export default function PoliticaDePrivacidade() {
    return (
        <div className="container section" style={{ minHeight: '80vh' }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Início</Link> &gt;{' '}
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Política de Privacidade</span>
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
                        <Shield size={36} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                        Política de Privacidade
                    </h1>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        Compromisso e transparência na proteção dos seus dados pessoais pela <strong style={{ color: 'var(--text-primary)' }}>NATLOU - Comércio & Prestação de Serviços, (SU), Lda</strong>.
                    </p>
                    <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        Última atualização: Setembro de 2026 | NIF: 5001650564
                    </div>
                </div>
            </RevealOnScroll>

            {/* Content Blocks */}
            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <RevealOnScroll delay={100}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <FileText size={22} color="var(--primary-color)" /> 1. Identificação da Empresa
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            A <strong>NATLOU - Comércio & Prestação de Serviços, (SU), Lda</strong>, pessoa coletiva com o NIF <strong>5001650564</strong>, com sede em Zango II - Junto ao IMAG, Viana - Luanda, Angola, é a entidade responsável pela recolha e tratamento dos dados pessoais dos seus clientes e utilizadores do website.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Eye size={22} color="var(--primary-color)" /> 2. Dados Recolhidos e Finalidade
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                            Recolhemos apenas as informações necessárias para a prestação de serviços de instalação, manutenção e assistência técnica de climatização, incluindo:
                        </p>
                        <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem', margin: 0 }}>
                            <li>Nome completo para identificação no contrato de serviço ou faturação;</li>
                            <li>Número de contacto telefónico e WhatsApp para agendamento de visitas técnicas;</li>
                            <li>Endereço de instalação ou entrega em Luanda, Benguela e Bengo;</li>
                            <li>Endereço de e-mail para envio de orçamentos e faturas.</li>
                        </ul>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Lock size={22} color="var(--primary-color)" /> 3. Segurança dos Dados
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            Implementamos medidas técnicas e organizativas rigorosas para garantir a segurança e confidencialidade dos seus dados pessoais. Não vendemos, alugamos nem partilhamos os seus dados pessoais com terceiros para fins de marketing sem a sua autorização prévia e expressa.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={300}>
                    <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: '0 4px 15px var(--shadow-color)' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <CheckCircle2 size={22} color="var(--primary-color)" /> 4. Direitos dos Titulares dos Dados
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                            Nos termos da legislação aplicável na República de Angola, o utilizador tem o direito de aceder, retificar, cancelar ou solicitar a eliminação dos seus dados pessoais a qualquer momento.
                        </p>
                        <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '12px', color: 'var(--text-primary)', fontWeight: '500' }}>
                            Para exercer os seus direitos, contacte-nos através do e-mail:{' '}
                            <a href="mailto:natlou.limitada@gmail.com" style={{ color: 'var(--secondary-color)', fontWeight: '700' }}>natlou.limitada@gmail.com</a>
                            {' '}ou via WhatsApp no{' '}
                            <a href="https://wa.me/244955475575" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: '700' }}>+244 955 475 575</a>.
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
}
