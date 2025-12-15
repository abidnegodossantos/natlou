import Link from 'next/link';
import Image from 'next/image';
import { products } from '../products';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container section">
            {/* Breadcrumb - Helpful for navigation */}
            <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <Link href="/" className="hover:text-[var(--primary-color)]">Início</Link> &gt;
                <Link href="/shop" className="hover:text-[var(--primary-color)]"> Loja</Link> &gt;
                <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}> {product.name}</span>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem',
                marginBottom: '4rem'
            }}>
                {/* Left Side: Image */}
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '24px',
                    padding: '2rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '400px',
                    }}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>

                {/* Right Side: Details */}
                <div>
                    <span style={{
                        backgroundColor: '#e6f7ff', color: 'var(--primary-color)',
                        padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700'
                    }}>
                        {product.category}
                    </span>
                    <h1 style={{
                        fontSize: '2.5rem', fontWeight: '800', margin: '1rem 0',
                        color: 'var(--text-color)', lineHeight: '1.2'
                    }}>
                        {product.name}
                    </h1>

                    {/* Visual BTU Calculator / Guide (The Differential) */}
                    <div style={{
                        backgroundColor: '#f9f9f9',
                        padding: '1.5rem',
                        borderRadius: '16px',
                        marginBottom: '2rem',
                        border: '1px solid #eee'
                    }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                            Qual tamanho escolher?
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', textAlign: 'center' }}>
                            <div style={{ opacity: product.category.includes('9') || product.category.includes('12') ? 1 : 0.4 }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>🏠</div>
                                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary-color)' }}>Pequeno</div>
                                <div style={{ fontSize: '0.75rem', color: '#666' }}>9-12k BTUs<br />(Quartos)</div>
                            </div>
                            <div style={{ opacity: product.category.includes('18') ? 1 : 0.4 }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>🛋️</div>
                                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary-color)' }}>Médio</div>
                                <div style={{ fontSize: '0.75rem', color: '#666' }}>18k BTUs<br />(Salas)</div>
                            </div>
                            <div style={{ opacity: product.category.includes('24') || product.category.includes('Comercial') ? 1 : 0.4 }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>🏢</div>
                                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary-color)' }}>Grande</div>
                                <div style={{ fontSize: '0.75rem', color: '#666' }}>24k+ BTUs<br />(Lojas)</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.85rem', color: '#555', fontStyle: 'italic' }}>
                            "Não sabe qual escolher? <a href="https://wa.me/244946776397?text=Olá, preciso de ajuda técnica para escolher o AC certo." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>Fale com o nosso técnico.</a>"
                        </div>
                    </div>

                    <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#555', marginBottom: '2rem' }}>
                        {product.description}
                    </p>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary-color)', lineHeight: '1' }}>
                            {product.price} <span style={{ fontSize: '1.5rem', fontWeight: '500' }}>Kz</span>
                        </div>
                        <div style={{ fontSize: '1.1rem', color: '#2e7d32', fontWeight: '600', marginTop: '0.5rem' }}>
                            Ou {product.installment}
                        </div>
                    </div>

                    <a
                        href={`https://wa.me/244946776397?text=Olá+NATLOU,+vi+no+site+o+${encodeURIComponent(product.name)}+e+gostaria+de+encomendar.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn animate-ripple desktop-only"
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            marginBottom: '1rem',
                            backgroundColor: '#25D366',
                            color: 'white',
                            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.8rem'
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Encomendar no WhatsApp
                    </a>
                    <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#777', marginTop: '0.5rem' }}>
                        * Resposta imediata. Stock Garantido.
                    </div>
                </div>
            </div>

            {/* "What's Included" Section (Transparency) */}
            <div style={{ backgroundColor: '#fff', borderRadius: '24px', padding: '3rem', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center', color: 'var(--primary-color)' }}>
                    Transparência Total: O Que Está Incluído?
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {/* Add User Defined List Items manually for visual impact if not in product.included, or map product.included and add extra visual punch */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#d4edda', color: '#155724', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span style={{ fontWeight: '500', color: '#333' }}>Aparelho de Ar Condicionado Novo (Na Caixa)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#d4edda', color: '#155724', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span style={{ fontWeight: '500', color: '#333' }}>Montagem Profissional (Oferta)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#d4edda', color: '#155724', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span style={{ fontWeight: '500', color: '#333' }}>Transporte para Luanda e Benguela</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#d4edda', color: '#155724', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span style={{ fontWeight: '500', color: '#333' }}>1ª Manutenção Grátis após instalação</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8f9fa', padding: '1.5rem', borderRadius: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#d4edda', color: '#155724', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '500', color: '#333' }}>Garantia de Stock Real</span>
                            <div style={{ width: '80px', height: '50px', position: 'relative', marginTop: '0.5rem', borderRadius: '4px', overflow: 'hidden' }}>
                                <Image src="/stock-infrastructure.jpg" alt="Stock Real" fill style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upsell Section (Complementary Services) */}
            <div style={{ marginTop: '4rem', marginBottom: '6rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#333', textAlign: 'center' }}>
                    Já tem um AC antigo?
                </h3>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {/* Card 1: Manutenção */}
                    <div style={{
                        backgroundColor: '#fff',
                        border: '1px solid #eee',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                        transition: 'transform 0.2s',
                    }} className="service-card">
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>Serviço Rápido</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-color)', marginBottom: '0.2rem' }}>Manutenção Preventiva</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-color)' }}>10.000 Kz</div>
                        </div>
                        <a
                            href="https://wa.me/244946776397?text=Olá, gostaria de agendar uma Manutenção Preventiva (10.000 Kz)."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: '#f0f0f0',
                                color: '#333',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s'
                            }}
                            className="hover:bg-[var(--primary-color)] hover:text-white"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </div>

                    {/* Card 2: Carga de Gás */}
                    <div style={{
                        backgroundColor: '#fff',
                        border: '1px solid #eee',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                        transition: 'transform 0.2s',
                    }} className="service-card">
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>Restaurar Potência</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-color)', marginBottom: '0.2rem' }}>Carga de Gás</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary-color)' }}>15.000 Kz</div>
                        </div>
                        <a
                            href="https://wa.me/244946776397?text=Olá, preciso de uma Carga de Gás (15.000 Kz)."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                backgroundColor: '#f0f0f0',
                                color: '#333',
                                width: '45px',
                                height: '45px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s'
                            }}
                            className="hover:bg-[var(--primary-color)] hover:text-white"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Sticky Mobile CTA */}
            <div className="mobile-only" style={{
                position: 'fixed',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                padding: '1rem',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50px',
                boxShadow: '0 5px 20px rgba(37, 211, 102, 0.5)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textDecoration: 'none',
                fontWeight: '700'
            }}>
                <a
                    href={`https://wa.me/244946776397?text=Olá NATLOU, tenho interesse no ${product.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Quero este AC
                    </span>
                    <span style={{ backgroundColor: 'white', color: '#25D366', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                        {product.price} Kz
                    </span>
                </a>
            </div>
        </div>
    );
}
