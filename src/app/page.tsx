'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimatedCounter from '@/components/AnimatedCounter';
import RevealOnScroll from '@/components/RevealOnScroll';
import BtuCalculator from '@/components/BtuCalculator';
import ContactSection from '@/components/ContactSection';
import {
  Wrench,
  ShieldCheck,
  Thermometer,
  Sparkles,
  Headphones,
  ChevronRight,
  Award,
  Users,
  Clock,
  Phone,
  ShoppingBag,
  Wind,
} from 'lucide-react';

/* ── dados estáticos ─────────────────────────────────── */

const WHATSAPP_NUMBER = '244955475575';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const PHONE_PRIMARY = '+244946776397';
const DELAYS = [0, 100, 200, 300, 400, 500] as const;

const services = [
  {
    icon: ShoppingBag,
    title: 'Venda de Equipamentos',
    desc: 'Ar-condicionados das melhores marcas com garantia de fábrica e montagem gratuita.',
  },
  {
    icon: Wrench,
    title: 'Instalação Profissional',
    desc: 'Montagem técnica padronizada, segura e realizada por equipa especializada.',
  },
  {
    icon: ShieldCheck,
    title: 'Manutenção Preventiva',
    desc: 'Inspeção periódica para evitar avarias, economizar energia e aumentar a vida útil.',
  },
  {
    icon: Thermometer,
    title: 'Reparação & Diagnóstico',
    desc: 'Identificação rápida de problemas e conserto eficiente de compressores e circuitos.',
  },
  {
    icon: Sparkles,
    title: 'Higienização Completa',
    desc: 'Limpeza profunda de serpentinas e turbinas para um ar puro e livre de bactérias.',
  },
  {
    icon: Headphones,
    title: 'Assistência Técnica',
    desc: 'Atendimento dedicado com resposta ágil para clientes residenciais e corporativos.',
  },
];

const products = [
  {
    name: 'Split Haier 9.000 BTU',
    desc: 'Ideal para quartos pequenos e escritórios individuais (até 15 m²). Silencioso e económico.',
    image: '/ac-9000-btu.png',
  },
  {
    name: 'Split Mural 12.000 BTU',
    desc: 'O mais procurado. Conforto térmico perfeito para quartos de casal e salas até 20 m².',
    image: '/ac-12000-btu-v2.jpg',
  },
  {
    name: 'Split Inverter 18.000 BTU',
    desc: 'Alta eficiência e refrigeração veloz para salas de estar e ambientes amplos até 35 m².',
    image: '/ac-18000-btu-v2.jpg',
  },
  {
    name: 'Split Potência 24.000 BTU',
    desc: 'Potência máxima para grandes salas residenciais, consultórios e escritórios até 50 m².',
    image: '/ac-18000-btu.jpg',
  },
  {
    name: 'Cassete Comercial',
    desc: 'Design embutido para tecto falso com fluxo de ar 360°. Excelente para lojas e escritórios.',
    image: '/ac-cassette-v2.jpg',
  },
  {
    name: 'Sistemas Industriais & Peças',
    desc: 'Soluções de grande porte para empresas, carga de gás refrigerante e peças originais.',
    image: '/stock-infrastructure.jpg',
  },
];

const gallery = [
  { src: '/installation-team.jpg', alt: 'Instalação técnica de ar condicionado pela equipa Natlou' },
  { src: '/installation-team-v2.jpg', alt: 'Equipa de montagem técnica Natlou' },
  { src: '/stock-infrastructure-v2.jpg', alt: 'Infraestrutura de equipamentos e peças Natlou' },
  { src: '/warehouse-natlou.jpg', alt: 'Stock e armazém oficial da Natlou' },
  { src: '/maintenance-team.jpg', alt: 'Manutenção preventiva e higienização em campo' },
  { src: '/team-natlou.jpg', alt: 'Equipa técnica profissional Natlou' },
];

/* ── componente principal (Landing Page One-Page) ────── */

export default function Home() {
  return (
    <div>
      {/* ═══════ 1. HERO (Âncora #inicio) ═══════ */}
      <section id="inicio" className="home-hero" aria-label="Natlou — Climatização que transforma espaços">
        <div className="home-hero-bg-layer" aria-hidden="true">
          <Image
            src="/hero-slide-2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="home-hero-bg-image"
          />
          <div className="home-hero-overlay home-hero-overlay-dark" />
          <div className="home-hero-overlay home-hero-overlay-light" />
        </div>

        <div className="container home-hero-inner">
          <div className="home-hero-content">
            <div className="home-hero-badge">
              <span className="home-hero-badge-dot" />
              Soluções completas em climatização
            </div>

            <h1 className="home-hero-title">
              Climatização que <br className="hero-title-break" />
              transforma espaços.
            </h1>

            <p className="home-hero-desc">
              Venda, instalação e manutenção de ar-condicionados com qualidade,
              eficiência e garantia.
            </p>

            <div className="home-hero-cta-group">
              <a
                href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Olá, NATLOU. Gostaria de solicitar informações sobre os serviços de climatização.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary"
                aria-label="Falar no WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>

              <a href="#servicos" className="btn-hero-secondary">
                Ver soluções
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 2. DIFERENCIAIS / FAIXA DE CONFIANÇA ═══════ */}
      <section className="home-trust-strip" aria-label="Diferenciais da Natlou">
        <div className="container">
          <div className="home-trust-grid">
            <div className="home-trust-item">
              <div className="home-trust-icon"><ShieldCheck size={20} strokeWidth={2} /></div>
              <span className="home-trust-text">Equipamentos de qualidade</span>
            </div>
            <div className="home-trust-item">
              <div className="home-trust-icon"><Wrench size={20} strokeWidth={2} /></div>
              <span className="home-trust-text">Instalação profissional</span>
            </div>
            <div className="home-trust-item">
              <div className="home-trust-icon"><Clock size={20} strokeWidth={2} /></div>
              <span className="home-trust-text">Assistência rápida e garantida</span>
            </div>
            <div className="home-trust-item">
              <div className="home-trust-icon"><Award size={20} strokeWidth={2} /></div>
              <span className="home-trust-text">+300 lares climatizados</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. SERVIÇOS (Âncora #servicos) ═══════ */}
      <section id="servicos" className="section" aria-labelledby="home-services-title" style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <RevealOnScroll>
            <span className="home-eyebrow">O que fazemos</span>
            <h2 id="home-services-title" className="home-section-title">
              Soluções completas para o seu conforto
            </h2>
          </RevealOnScroll>

          <div className="home-services-grid">
            {services.map((svc, i) => (
              <RevealOnScroll key={svc.title} delay={DELAYS[i % DELAYS.length]}>
                <div className="home-service-card">
                  <div className="home-service-icon">
                    <svc.icon size={24} />
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. PRODUTOS (Âncora #produtos) ═══════ */}
      <section
        id="produtos"
        className="section"
        aria-labelledby="home-products-title"
        style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
      >
        <div className="container">
          <RevealOnScroll>
            <span className="home-eyebrow">Catálogo visual</span>
            <h2 id="home-products-title" className="home-section-title">
              Equipamentos para todas as necessidades
            </h2>
          </RevealOnScroll>

          <div className="home-products-grid">
            {products.map((prod, i) => (
              <RevealOnScroll key={prod.name} delay={DELAYS[i % DELAYS.length]}>
                <div className="home-product-card">
                  <div className="home-product-image">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      style={{ objectFit: 'contain', padding: '0.85rem' }}
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="home-product-info">
                    <h3>{prod.name}</h3>
                    <p>{prod.desc}</p>
                    <a
                      href={`${WHATSAPP_BASE}?text=${encodeURIComponent('Olá, NATLOU. Gostaria de solicitar um orçamento para o equipamento: ' + prod.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="home-product-order-btn"
                      aria-label={`Pedir orçamento para ${prod.name}`}
                    >
                      Pedir orçamento
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. MÉTRICAS E NÚMEROS DA EMPRESA ═══════ */}
      <section className="home-stats-section" aria-label="Números da Natlou">
        <div className="container">
          <div className="home-stats-grid">
            <RevealOnScroll>
              <div className="home-stat-item">
                <span className="home-stat-number">
                  <AnimatedCounter end={300} prefix="+" />
                </span>
                <span className="home-stat-label">Lares climatizados</span>
              </div>
            </RevealOnScroll>

            <div className="home-stat-divider" aria-hidden="true" />

            <RevealOnScroll delay={200}>
              <div className="home-stat-item">
                <span className="home-stat-number">
                  <AnimatedCounter end={30} prefix="+" />
                </span>
                <span className="home-stat-label">Empresas parceiras</span>
              </div>
            </RevealOnScroll>

            <div className="home-stat-divider" aria-hidden="true" />

            <RevealOnScroll delay={400}>
              <div className="home-stat-item">
                <span className="home-stat-number">100%</span>
                <span className="home-stat-label">Compromisso com qualidade</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ 6. PROJETOS REALIZADOS (Âncora #projetos) ═══════ */}
      <section
        id="projetos"
        className="section"
        aria-labelledby="home-projects-title"
        style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
      >
        <div className="container">
          <RevealOnScroll>
            <span className="home-eyebrow">Projetos realizados</span>
            <h2 id="home-projects-title" className="home-section-title">
              Trabalhos que falam por nós
            </h2>
          </RevealOnScroll>

          <div className="home-projects-grid">
            {gallery.map((img, i) => (
              <RevealOnScroll key={img.src} delay={DELAYS[i % DELAYS.length]}>
                <div className="home-project-item">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7. SOBRE NÓS (Âncora #sobre) ═══════ */}
      <section
        id="sobre"
        className="section"
        aria-labelledby="home-about-title"
        style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
      >
        <div className="container">
          <div className="home-about-grid">
            <RevealOnScroll>
              <div className="home-about-image">
                <Image
                  src="/stock-infrastructure.jpg"
                  alt="Instalações e infraestrutura técnica da Natlou"
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="home-about-content">
                <span className="home-eyebrow">Sobre a NATLOU</span>
                <h2 id="home-about-title">
                  De uma empresa angolana para mais de 300 lares confortáveis.
                </h2>
                <p>
                  A NATLOU é a sua parceira de confiança em climatização e frio em Angola.
                  Oferecemos soluções completas de venda, instalação e manutenção
                  de ar-condicionados com foco em rigor técnico, atendimento humanizado
                  e garantia de satisfação.
                </p>
                <Link href="/about" className="btn-home-outline">
                  Conheça a nossa história <ChevronRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════ 8. CALCULADORA BTU (Âncora #calculadora) ═══════ */}
      <section
        id="calculadora"
        className="section"
        aria-label="Calculadora de Carga Térmica BTU"
        style={{ paddingTop: '4.5rem', paddingBottom: '4.5rem' }}
      >
        <div className="container">
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="home-eyebrow">Dimensionamento térmico</span>
              <h2 className="home-section-title" style={{ maxWidth: '680px', margin: '0.5rem auto 1rem' }}>
                Não sabe qual capacidade de ar-condicionado escolher?
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
                Utilize a nossa calculadora técnica para estimar a potência ideal de BTUs para o seu ambiente.
              </p>
            </div>
            <BtuCalculator />
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ 9. SECÇÃO DE CONTACTOS & ATENDIMENTO (Âncora #contactos) ═══════ */}
      <ContactSection />
    </div>
  );
}
