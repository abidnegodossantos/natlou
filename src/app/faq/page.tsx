'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
    {
        question: "Fazem entrega em Benguela?",
        answer: "Sim, fazemos entregas em Benguela com um custo adicional de transporte. Lembramos que a entrega é 100% grátis para Luanda e Bengo."
    },
    {
        question: "Quanto tempo demora a instalação?",
        answer: "A instalação de um aparelho de ar condicionado demora em média de 2 a 4 horas, dependendo da complexidade do local e das infraestruturas existentes."
    },
    {
        question: "Que garantia têm os equipamentos?",
        answer: "Todos os nossos equipamentos novos possuem garantia contra defeitos de fabrico. Adicionalmente, oferecemos garantia sobre o serviço de instalação que realizamos."
    },
    {
        question: "Como funciona o pagamento em prestações?",
        answer: "O pagamento pode ser facilitado em até 2 prestações, permitindo que climatize o seu espaço agora e pague de forma mais confortável. O processo é simples e rápido após aprovação."
    },
    {
        question: "Fazem manutenção em equipamentos que não foram comprados na Natlou?",
        answer: "Sim, absolutamente. A nossa equipa técnica está altamente qualificada para realizar manutenção preventiva e corretiva em aparelhos de ar condicionado, independentemente de onde foram adquiridos."
    },
    {
        question: "Quais as marcas disponíveis?",
        answer: "Trabalhamos com as melhores marcas do mercado para garantir eficiência e durabilidade. Atualmente o nosso catálogo destaca-se pelas marcas Haier e TCL."
    },
    {
        question: "Como escolher o BTU certo?",
        answer: "A escolha dos BTUs depende do tamanho da divisão, exposição solar e número de pessoas. Pode usar o nosso <a href='/#calculator' style='color: var(--secondary-color); font-weight: 600; text-decoration: underline;'>Guia de Tamanho na página inicial</a> para descobrir a potência ideal."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main>
            {/* Header Hero */}
            <div style={{
                background: 'linear-gradient(135deg, var(--primary-color) 0%, #003366 100%)',
                color: 'white',
                padding: '6rem 1rem',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem' }}>
                    Perguntas Frequentes
                </h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                    Tire as suas dúvidas sobre os nossos equipamentos, entregas e serviços de instalação.
                </p>
            </div>

            {/* Accordion Section */}
            <div className="container section">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            style={{
                                marginBottom: '1rem',
                                border: '1px solid var(--border-light)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                backgroundColor: 'var(--bg-card)',
                                transition: 'all 0.3s ease',
                                boxShadow: openIndex === index ? '0 10px 25px rgba(0,0,0,0.05)' : 'none'
                            }}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.5rem',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    color: 'var(--primary-color)',
                                    fontSize: '1.25rem',
                                    fontWeight: '800'
                                }}
                            >
                                {faq.question}
                                <ChevronDown 
                                    size={24} 
                                    style={{ 
                                        transition: 'transform 0.3s ease',
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                        color: 'var(--primary-color)'
                                    }} 
                                />
                            </button>
                            
                            <div style={{
                                maxHeight: openIndex === index ? '500px' : '0',
                                opacity: openIndex === index ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.4s ease-in-out',
                                padding: openIndex === index ? '0 1.5rem 1.5rem' : '0 1.5rem',
                            }}>
                                <p 
                                    style={{ 
                                        color: 'var(--text-primary)', 
                                        fontSize: '1.05rem',
                                        lineHeight: '1.7', 
                                        marginBottom: '1.5rem',
                                        fontWeight: '500'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                                
                                <a 
                                    href={`https://wa.me/244946776397?text=Olá+NATLOU,+li+a+FAQ+sobre+"${encodeURIComponent(faq.question)}"+mas+ainda+tenho+uma+dúvida.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        color: 'var(--primary-color)',
                                        backgroundColor: 'var(--bg-secondary)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--border-light)'}
                                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                                >
                                    <MessageCircle size={16} />
                                    Ainda com dúvidas? Fala connosco
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
