'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BtuCalculator() {
    const [area, setArea] = useState(15);
    const [sun, setSun] = useState<'low' | 'high'>('low');
    const [people, setPeople] = useState(2);
    const [electronics, setElectronics] = useState(1);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Calculate BTUs
    // Base: 600 BTUs per m² (low sun) or 800 BTUs per m² (high sun)
    // + 600 BTUs per additional person (first person is included)
    // + 600 BTUs per electronic device
    const baseBtu = sun === 'low' ? 600 : 800;
    const areaBtu = area * baseBtu;
    const peopleBtu = people > 1 ? (people - 1) * 600 : 0;
    const electronicsBtu = electronics * 600;
    const totalBtu = areaBtu + peopleBtu + electronicsBtu;

    // Determine recommendation
    let recommendedProduct = {
        name: 'Split Mural 9.000 BTUs',
        slug: 'split-mural-9000-btus',
        id: 1,
        desc: 'Ideal para o seu espaço compacto. Económico e muito silencioso.'
    };

    if (totalBtu > 9000 && totalBtu <= 12000) {
        recommendedProduct = {
            name: 'Split Haier/TCL 12.000 BTU',
            slug: 'split-mural-12000-btus',
            id: 2,
            desc: 'O nosso campeão de vendas! Climatização perfeita, rápida e com excelente eficiência energética.'
        };
    } else if (totalBtu > 12000 && totalBtu <= 18000) {
        recommendedProduct = {
            name: 'Split Haier/TCL 18.000 BTU',
            slug: 'split-mural-18000-btus',
            id: 3,
            desc: 'Potência superior ideal para manter salas e espaços abertos sempre frescos.'
        };
    } else if (totalBtu > 18000) {
        recommendedProduct = {
            name: 'Cassete 24.000 BTUs',
            slug: 'cassete-24000-btus',
            id: 4,
            desc: 'Para grandes espaços comerciais ou escritórios corporativos. Discreto e de alta performance.'
        };
    }

    return (
        <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f4faff 100%)',
            border: '1px solid rgba(0, 74, 173, 0.15)',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            boxShadow: '0 15px 35px rgba(0, 40, 85, 0.06)',
            maxWidth: '850px',
            margin: '0 auto'
        }}>
            <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--primary-color)',
                textAlign: 'center',
                marginBottom: '0.5rem',
                fontWeight: 800
            }}>
                ❄️ Calculadora de BTUs Inteligente
            </h3>
            <p style={{
                color: '#666',
                textAlign: 'center',
                marginBottom: '2rem',
                fontSize: '0.95rem',
                lineHeight: '1.5'
            }}>
                Descubra a capacidade ideal de Ar Condicionado (BTU) necessária para climatizar o seu espaço de forma eficiente.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '2.5rem',
                marginBottom: '2rem'
            }}>
                {/* Left Side: Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                    {/* Area Slider */}
                    <div>
                        <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                            <span>Tamanho da Área:</span>
                            <span style={{ color: 'var(--primary-color)', fontSize: '1.1rem' }}>{area} m²</span>
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="80"
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            style={{
                                width: '100%',
                                accentColor: 'var(--primary-color)',
                                cursor: 'pointer',
                                height: '6px',
                                borderRadius: '3px'
                            }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#999', marginTop: '0.3rem' }}>
                            <span>5 m²</span>
                            <span>80 m²</span>
                        </div>
                    </div>

                    {/* Sun Exposure */}
                    <div>
                        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                            Exposição Solar:
                        </label>
                        <div style={{ display: 'flex', gap: '0.8rem' }}>
                            <button
                                type="button"
                                onClick={() => setSun('low')}
                                style={{
                                    flex: 1,
                                    padding: '0.8rem',
                                    borderRadius: '12px',
                                    border: '2px solid',
                                    borderColor: sun === 'low' ? 'var(--primary-color)' : '#eee',
                                    backgroundColor: sun === 'low' ? '#e6f4ff' : '#white',
                                    color: sun === 'low' ? 'var(--primary-color)' : '#555',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                🌤️ Pouco Sol
                            </button>
                            <button
                                type="button"
                                onClick={() => setSun('high')}
                                style={{
                                    flex: 1,
                                    padding: '0.8rem',
                                    borderRadius: '12px',
                                    border: '2px solid',
                                    borderColor: sun === 'high' ? 'var(--primary-color)' : '#eee',
                                    backgroundColor: sun === 'high' ? '#e6f4ff' : '#white',
                                    color: sun === 'high' ? 'var(--primary-color)' : '#555',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                ☀️ Muito Sol
                            </button>
                        </div>
                    </div>

                    {/* Counters */}
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {/* People */}
                        <div style={{ flex: 1 }}>
                            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                                Pessoas no Espaço:
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'white' }}>
                                <button
                                    type="button"
                                    onClick={() => setPeople(Math.max(1, people - 1))}
                                    style={{ width: '40px', height: '40px', border: 'none', backgroundColor: '#f5f5f5', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    -
                                </button>
                                <span style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>{people}</span>
                                <button
                                    type="button"
                                    onClick={() => setPeople(people + 1)}
                                    style={{ width: '40px', height: '40px', border: 'none', backgroundColor: '#f5f5f5', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Electronics */}
                        <div style={{ flex: 1 }}>
                            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                                Eletrónicos (TV/PC):
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', backgroundColor: 'white' }}>
                                <button
                                    type="button"
                                    onClick={() => setElectronics(Math.max(0, electronics - 1))}
                                    style={{ width: '40px', height: '40px', border: 'none', backgroundColor: '#f5f5f5', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    -
                                </button>
                                <span style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>{electronics}</span>
                                <button
                                    type="button"
                                    onClick={() => setElectronics(electronics + 1)}
                                    style={{ width: '40px', height: '40px', border: 'none', backgroundColor: '#f5f5f5', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Results */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 74, 173, 0.08)',
                    borderRadius: '16px',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.02)'
                }}>
                    <span style={{ fontSize: '0.85rem', color: '#888', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Carga Térmica Recomendada</span>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-color)', margin: '0.5rem 0' }}>
                        {isClient ? totalBtu.toLocaleString() : totalBtu} <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>BTUs</span>
                    </span>

                    <div style={{
                        marginTop: '1rem',
                        padding: '1.2rem 1rem',
                        backgroundColor: '#f4faff',
                        borderRadius: '12px',
                        width: '100%',
                        border: '1px dashed rgba(0, 74, 173, 0.2)'
                    }}>
                        <h4 style={{ fontSize: '1rem', color: '#333', fontWeight: 'bold', marginBottom: '0.3rem' }}>Equipamento Sugerido:</h4>
                        <p style={{ fontSize: '1.2rem', color: 'var(--primary-color)', fontWeight: '800', marginBottom: '0.5rem' }}>
                            {recommendedProduct.name}
                        </p>
                        <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>
                            {recommendedProduct.desc}
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', width: '100%', marginTop: '1.5rem' }}>
                        <Link href={`/shop/${recommendedProduct.id}`} style={{
                            flex: 1,
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            padding: '0.9rem',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            fontSize: '0.85rem',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            Ver Detalhes
                        </Link>
                        <a href={`https://wa.me/244946776397?text=Olá+NATLOU,+usei+a+Calculadora+de+BTUs+do+site+e+obtive+um+resultado+de+${totalBtu}+BTUs.+Gostaria+de+solicitar+um+orçamento+para+o+${encodeURIComponent(recommendedProduct.name)}.`}
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{
                               flex: 1,
                               backgroundColor: '#25D366',
                               color: 'white',
                               padding: '0.9rem',
                               borderRadius: '12px',
                               fontWeight: 'bold',
                               fontSize: '0.85rem',
                               textDecoration: 'none',
                               transition: 'all 0.3s ease',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center',
                               gap: '0.3rem'
                           }}
                        >
                            Pedir Orçamento
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#999', lineHeight: '1.4' }}>
                * Nota: Este cálculo é uma estimativa aproximada baseada nas dimensões e carga térmica padrão. Fatores como pé-direito, quantidade de janelas e materiais de construção podem influenciar o dimensionamento ideal.
            </div>
        </div>
    );
}
