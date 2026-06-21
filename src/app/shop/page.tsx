'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { products } from './products';
import { Tag, Truck, Package, Clock } from 'lucide-react';
import DownloadCatalog from '@/components/DownloadCatalog';

const categories = ['Todos', 'Quartos (9-12k BTUs)', 'Salas (18-24k BTUs)', 'Acessórios & Gás'];

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredProducts = products.filter(product => {
        if (activeCategory === 'Todos') return true;
        if (activeCategory === 'Quartos (9-12k BTUs)') return ['9.000 BTUs', '12.000 BTUs'].includes(product.category);
        if (activeCategory === 'Salas (18-24k BTUs)') return ['18.000 BTUs', 'Comercial'].includes(product.category); // Include Comercial (24k) here
        if (activeCategory === 'Acessórios & Gás') return product.category === 'Acessórios';
        return true;
    });

    return (
        <div className="container section" style={{ minHeight: '80vh' }}>
            {/* B2B Banner (Top of Shop) */}
            <div style={{ marginBottom: '3rem' }}>
                <a
                    href="https://wa.me/244946776397?text=Olá, represento uma empresa e gostaria de um orçamento para frota/manutenção."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'block',
                        backgroundColor: '#002855', // Primary brand color
                        backgroundImage: 'linear-gradient(135deg, #002855 0%, #004085 100%)',
                        color: 'white',
                        padding: '1.5rem 2rem',
                        borderRadius: '16px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 10px 25px rgba(0, 40, 85, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 40, 85, 0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 40, 85, 0.2)';
                    }}
                >
                    <span style={{ fontSize: '1.1rem', fontWeight: '500', display: 'block', marginBottom: '0.3rem' }}>
                        Tem uma empresa?
                    </span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--action-color)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Clique aqui para orçamentos de frota ou manutenção.
                    </span>
                </a>
            </div>

            {/* Header Section */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 className="title">Loja Online</h1>
                <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Escolha o conforto ideal para o seu espaço.
                </p>
            </div>

            {/* Smart Filters (Sticky) */}
            <div className="shop-filters-container">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        style={{
                            padding: '0.8rem 1.5rem',
                            borderRadius: '50px',
                            backgroundColor: activeCategory === category ? 'var(--primary-color)' : 'var(--bg-card)',
                            color: activeCategory === category ? 'white' : 'var(--text-secondary)',
                            fontWeight: '700',
                            cursor: 'pointer',
                            fontSize: '0.95rem',
                            transition: 'all 0.3s ease',
                            boxShadow: activeCategory === category ? '0 5px 15px rgba(0, 40, 85, 0.2)' : '0 2px 10px rgba(0,0,0,0.05)',
                            transform: activeCategory === category ? 'translateY(-2px)' : 'none',
                            border: activeCategory === category ? 'none' : '1px solid var(--border-light)'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Showcase Grid */}
            <div className="shop-grid-responsive">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="service-card shop-card-item" style={{
                        border: product.featured ? '2px solid var(--action-color)' : '1px solid transparent',
                        padding: '0', // Full width for content inside
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {/* Image Area with Link to Details */}
                        <Link href={`/shop/${product.id}`} style={{
                            height: '280px',
                            backgroundColor: 'var(--bg-secondary)',
                            position: 'relative',
                            display: 'block',
                            cursor: 'pointer',
                            padding: '1.5rem' // Padding around image
                        }}>
                            {/* BADGES SECTION (Top of Photo) */}
                            <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 10 }}>
                                {/* Indicador de Stock */}
                                <span style={{
                                    backgroundColor: product.stockStatus === 'disponivel' ? '#d4edda' : '#fff3cd',
                                    color: product.stockStatus === 'disponivel' ? '#155724' : '#856404',
                                    padding: '0.4rem 0.8rem',
                                    borderRadius: '4px',
                                    fontSize: '0.75rem',
                                    fontWeight: '800',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem'
                                }}>
                                    {product.stockStatus === 'disponivel' ? <Package size={13} /> : <Clock size={13} />}
                                    {product.stockStatus === 'disponivel' ? 'Disponível - Entrega Rápida' : 'Sob Encomenda - Consulte Prazo'}
                                </span>
                                
                                {/* Hardcoded visual logic for specific badges as requested */}
                                {product.badges.map((badge, i) => (
                                    <span key={i} className={badge.text.includes('Montagem') ? 'shine-wrapper shine-effect' : ''} style={{
                                        backgroundColor: badge.text.includes('Montagem') ? '#d4edda' : (badge.text.includes('Entrega') ? '#cce5ff' : badge.bg), // Force colors if needed
                                        color: badge.text.includes('Montagem') ? '#155724' : (badge.text.includes('Entrega') ? '#004085' : badge.color),
                                        padding: '0.4rem 0.8rem',
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        fontWeight: '800',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {badge.text.includes('Montagem') && <Tag size={13} />}
                                        {badge.text.includes('Entrega') && <Truck size={13} />}
                                        {' ' + badge.text}
                                    </span>
                                ))}
                            </div>

                            {/* Product Image */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                padding: '1rem'
                            }}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>

                        </Link>

                        {/* Content Area (Mini-Vendedor) */}
                        <div style={{ padding: '1.5rem', flex: '1', display: 'flex', flexDirection: 'column' }}>

                            <Link href={`/shop/${product.id}`} style={{ textDecoration: 'none' }}>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem', fontWeight: '800', color: 'var(--text-color)', lineHeight: '1.2' }}
                                    className="hover:text-[var(--primary-color)]"
                                >
                                    {product.name}
                                </h3>
                            </Link>

                            {/* Subtitle (Ideal For) */}
                            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '500' }}>
                                Ideal para {product.technicalSpecs.btuRange} ({product.technicalSpecs.area})
                            </p>

                            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f0f0f0' }}>
                                {/* Price (Sales Psychology) */}
                                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                                    {/* Big Installment Price */}
                                    <span style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary-color)', lineHeight: '1' }}>
                                        {product.installment}
                                    </span>
                                    {/* Small Total Price */}
                                    <span style={{ fontSize: '0.85rem', color: '#999', fontWeight: '500', marginTop: '0.3rem' }}>
                                        Total: {product.price} Kz
                                    </span>
                                </div>

                                <a
                                    href={`https://wa.me/244946776397?text=Olá+NATLOU,+vi+no+site+o+${encodeURIComponent(product.name)}+e+gostaria+de+encomendar.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn animate-ripple"
                                    style={{
                                        width: '100%',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        backgroundColor: '#25D366',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                                        padding: '1rem', // Slightly more compact
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    Encomendar Agora
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <DownloadCatalog />

            {/* Social Proof & Guarantee Strip */}
            <div style={{
                marginTop: '5rem',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'center'
            }}>
                {/* 1. Pagamento Seguro */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(var(--primary-rgb), 0.15)',
                        color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Pagamento Seguro</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>Pague em prestações.<br /><strong>50% na encomenda</strong>, 50% na entrega.</p>
                    </div>
                </div>

                {/* 2. Entrega Rápida */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{
                        width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                        border: '2px solid var(--border-light)', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}>
                        {/* Using contact-model.jpg as the "Modelo no Carro" / Team Representative */}
                        <Image src="/contact-model.jpg" alt="Equipa de Entrega" width={60} height={60} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.4rem' }}>Entrega Rápida</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.4' }}>Frota própria para entrega.<br />Receba com rapidez e segurança.</p>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                * Preços sujeitos a alteração sem aviso prévio. Confirme a disponibilidade.
            </div>
        </div>
    );
}
