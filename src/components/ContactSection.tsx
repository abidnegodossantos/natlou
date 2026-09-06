'use client';

import Image from 'next/image';
import { Phone, ArrowRight, Mail, MapPin, Headphones } from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll';

const WHATSAPP_NUMBER = '244955475575';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Gostaria de falar com a equipa da NATLOU sobre soluções e equipamentos de ar condicionado.'
)}`;
const PHONE_PRIMARY = '+244946776397';
const EMAIL_CONTACT = 'geral@natlou.co.ao';
const MAPS_LINK = 'https://maps.google.com/?q=-8.9167,13.3888';

export default function ContactSection() {
  return (
    <section id="contactos" className="contact-premium-section" aria-labelledby="contactos-title">
      <div className="container">
        {/* ═══ 1. HERO ATENDIMENTO (DUAS COLUNAS) ═══ */}
        <div className="contact-hero-grid">
          {/* Coluna Esquerda: Fotografia Circular + Balão de Conversa + Badge */}
          <div className="contact-visual-col">
            <div className="contact-visual-wrapper">
              {/* Padrão decorativo pontilhado de fundo */}
              <div className="contact-dots-pattern" aria-hidden="true" />

              {/* Fotografia circular */}
              <div className="contact-avatar-circle">
                <Image
                  src="/contact-model.jpg"
                  alt="Consultora técnica especializada da Natlou Climatização"
                  fill
                  sizes="(max-width: 480px) 260px, (max-width: 768px) 300px, 360px"
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  loading="lazy"
                  className="contact-avatar-img"
                />
              </div>

              {/* Balão de conversa integrado */}
              <div className="contact-speech-bubble" role="note" aria-label="Mensagem de atendimento">
                <p className="contact-speech-text">
                  Olá! 👋 Posso ajudar a escolher o <strong className="contact-speech-highlight">melhor BTU</strong> para a sua sala?
                </p>
                <div className="contact-speech-tail" aria-hidden="true" />
              </div>

              {/* Badge Atendimento Natlou */}
              <div className="contact-agent-badge" aria-hidden="true">
                <div className="contact-agent-icon">
                  <Headphones size={18} strokeWidth={2.2} />
                </div>
                <div className="contact-agent-info">
                  <span className="contact-agent-role">ATENDIMENTO</span>
                  <span className="contact-agent-brand">NATLOU</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Conteúdo de Atendimento + CTAs */}
          <div className="contact-content-col">
            <RevealOnScroll>
              <div className="contact-label-wrap">
                <span className="contact-eyebrow">ATENDIMENTO HUMANIZADO</span>
                <span className="contact-eyebrow-accent" aria-hidden="true" />
              </div>

              <h2 id="contactos-title" className="contact-main-title">
                Precisa de ajuda para escolher o <span className="contact-title-highlight">seu AC?</span>
              </h2>

              <p className="contact-main-desc">
                Da escolha do equipamento à instalação, a nossa equipa está pronta para encontrar a solução certa para si.
              </p>

              {/* Grupo de CTAs */}
              <div className="contact-cta-stack">
                {/* CTA Principal: WhatsApp Amarelo / Dourado */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn-primary"
                  aria-label="Falar no WhatsApp com a equipa Natlou"
                >
                  <div className="contact-btn-left">
                    <span className="contact-btn-icon-wrap" aria-hidden="true">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </span>
                    <div className="contact-btn-text">
                      <span className="contact-btn-heading">FALAR NO WHATSAPP</span>
                      <span className="contact-btn-sub">Resposta rápida da nossa equipa</span>
                    </div>
                  </div>
                  <ArrowRight size={20} className="contact-btn-arrow" aria-hidden="true" />
                </a>

                {/* CTA Secundário: Ligar Agora */}
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="contact-btn-secondary"
                  aria-label="Ligar para o atendimento Natlou"
                >
                  <div className="contact-btn-left">
                    <span className="contact-btn-icon-wrap secondary-icon" aria-hidden="true">
                      <Phone size={20} strokeWidth={2.2} />
                    </span>
                    <div className="contact-btn-text">
                      <span className="contact-btn-heading">LIGAR AGORA</span>
                      <span className="contact-btn-sub">Atendimento direto e personalizado</span>
                    </div>
                  </div>
                  <ArrowRight size={20} className="contact-btn-arrow" aria-hidden="true" />
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* ═══ 2. OUTROS MEIOS DE CONTACTO ═══ */}
        <div className="contact-cards-section">
          {/* Divisor com etiqueta centralizada */}
          <div className="contact-divider-wrap" aria-hidden="true">
            <span className="contact-divider-line" />
            <span className="contact-divider-pill">OUTROS MEIOS DE CONTACTO</span>
            <span className="contact-divider-line" />
          </div>

          {/* Grid de 4 canais de atendimento */}
          <div className="contact-cards-grid">
            {/* 1. WhatsApp */}
            <div className="contact-mini-card">
              <div className="contact-mini-icon blue-badge" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="contact-mini-content">
                <span className="contact-mini-title">WHATSAPP</span>
                <p className="contact-mini-desc">Fale diretamente com a nossa equipa</p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-mini-link blue-link"
                >
                  Abrir conversa <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* 2. Telefone */}
            <div className="contact-mini-card">
              <div className="contact-mini-icon yellow-badge" aria-hidden="true">
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <div className="contact-mini-content">
                <span className="contact-mini-title">TELEFONE</span>
                <p className="contact-mini-desc">Atendimento comercial e suporte técnico</p>
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="contact-mini-link yellow-link"
                >
                  +244 946 776 397
                </a>
              </div>
            </div>

            {/* 3. Email */}
            <div className="contact-mini-card">
              <div className="contact-mini-icon blue-badge" aria-hidden="true">
                <Mail size={20} strokeWidth={2.2} />
              </div>
              <div className="contact-mini-content">
                <span className="contact-mini-title">EMAIL</span>
                <p className="contact-mini-desc">Envie-nos a sua solicitação</p>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="contact-mini-link blue-link"
                >
                  geral@natlou.co.ao
                </a>
              </div>
            </div>

            {/* 4. Localização */}
            <div className="contact-mini-card">
              <div className="contact-mini-icon yellow-badge" aria-hidden="true">
                <MapPin size={20} strokeWidth={2.2} />
              </div>
              <div className="contact-mini-content">
                <span className="contact-mini-title">LOCALIZAÇÃO</span>
                <p className="contact-mini-desc">Estamos localizados em Luanda, Angola</p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-mini-link yellow-link"
                >
                  Ver no mapa <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
