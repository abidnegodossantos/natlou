'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, CheckCircle, Camera } from 'lucide-react';

/**
 * =================================================================
 * FOTOS REAIS DA NATLOU (Extensível para novas fotos no futuro)
 * -----------------------------------------------------------------
 * Para adicionar uma nova foto real (viaturas, novos trabalhos,
 * eventos ou membros da equipa), basta adicionar um novo objeto
 * a este array. A galeria atualiza-se automaticamente!
 * =================================================================
 */
export interface CompanyPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  desc: string;
}

export const COMPANY_REAL_PHOTOS: CompanyPhoto[] = [
  {
    id: 'armazem-haier',
    src: '/natlou-armazem-haier.webp',
    alt: 'Colaborador da Natlou em verificação e expedição de stock Haier no armazém',
    title: 'Centro de Distribuição & Stock Haier',
    category: 'Armazém & Logística',
    desc: 'Stock próprio e expedição ágil para pronta entrega em Luanda e províncias.',
  },
  {
    id: 'equipa-oficial',
    src: '/team-natlou.jpg',
    alt: 'Equipa técnica profissional e fardada da Natlou Climatização',
    title: 'Equipa Técnica Especializada',
    category: 'Nossa Equipa',
    desc: 'Técnicos certificados, formados segundo os padrões internacionais de refrigeração.',
  },
  {
    id: 'instalacao-real',
    src: '/installation-team.jpg',
    alt: 'Instalação técnica de ar condicionado em campo pela equipa Natlou',
    title: 'Instalação Profissional em Campo',
    category: 'Instalação',
    desc: 'Montagem criteriosa com tubagens seladas e testes rigorosos de estanquidade.',
  },
  {
    id: 'manutencao-higienizacao',
    src: '/maintenance-team.jpg',
    alt: 'Técnicos Natlou a efetuar manutenção e higienização em aparelho split',
    title: 'Manutenção & Assistência Técnica',
    category: 'Manutenção',
    desc: 'Limpeza química e verificação de circuitos para garantir ar puro e economia.',
  },
  {
    id: 'stock-infraestrutura',
    src: '/warehouse-natlou.jpg',
    alt: 'Infraestrutura e receção de equipamentos no armazém da Natlou',
    title: 'Infraestrutura e Equipamentos',
    category: 'Infraestrutura',
    desc: 'Capacidade para fornecimento de grandes volumes a empresas e projetos residenciais.',
  },
  {
    id: 'parcerias-corporativas',
    src: '/partners.jpg',
    alt: 'Colaborador Natlou em atendimento e acordo de parceria corporativa',
    title: 'Atendimento & Parcerias',
    category: 'Parcerias',
    desc: 'Relações transparentes e suporte contínuo a empresas clientes em Angola.',
  },
];

export default function CompanyGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="company-gallery-wrap" aria-label="Galeria de fotos reais da empresa">
      <div className="company-gallery-header">
        <div className="company-gallery-intro">
          <span className="home-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Camera size={14} /> Bastidores e operações reais
          </span>
          <h3 className="company-gallery-title">A NATLOU em ação</h3>
          <p className="company-gallery-subtitle">
            Conheça a nossa equipa, os processos de armazém e as intervenções técnicas reais no terreno.
          </p>
        </div>

        <div className="company-gallery-controls" aria-label="Controlos do carrossel">
          <button
            type="button"
            className="company-gallery-arrow"
            onClick={() => handleScroll('left')}
            aria-label="Ver foto anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="company-gallery-arrow"
            onClick={() => handleScroll('right')}
            aria-label="Ver próxima foto"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="company-gallery-track" ref={scrollRef} tabIndex={0} role="region" aria-label="Carrossel de fotos reais">
        {COMPANY_REAL_PHOTOS.map((photo) => (
          <article key={photo.id} className="company-gallery-card">
            <div className="company-gallery-img-box">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                className="company-gallery-img"
                loading="lazy"
              />
              <span className="company-gallery-tag">
                <CheckCircle size={12} style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline-block' }} />
                {photo.category}
              </span>
            </div>
            <div className="company-gallery-card-body">
              <h4 className="company-gallery-card-title">{photo.title}</h4>
              <p className="company-gallery-card-desc">{photo.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
