/**
 * ============================================================
 * AquaLinkOS Landing Page — Main JavaScript
 * ============================================================
 */
(function () {
  'use strict';

  /* ─── GLOBALS ─────────────────────────────────────────────── */
  const CFG = window.AQUALINK_CONFIG;
  let currentLang = CFG.site.defaultLang;

  /* ─── DOM HELPERS ─────────────────────────────────────────── */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };

  /* ─── SVG ICONS ───────────────────────────────────────────── */
  const ICONS = {
    clock: '<polyline points="12 1 12 12 16 14"/><circle cx="12" cy="12" r="10"/>',
    droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
    clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
    check: '<polyline points="20 6 9 12 4 10"/>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
    signal: '<line x1="1" y1="1" x2="1" y2="23"/><line x1="8" y1="5" x2="8" y2="23"/><line x1="15" y1="9" x2="15" y2="23"/><line x1="22" y1="13" x2="22" y2="23"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
    'trending-down': '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>',
    alert: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.18 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.07-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
    arrowup: '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    ok: '<polyline points="20 6 9 12 4 10"/><circle cx="12" cy="12" r="10"/>',
  };

  function icon(name, cls = '') {
    return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true"><${ICONS[name]}></svg>`;
  }
  // Simple icon svg wrapper
  function svgIcon(name, extraClass = '') {
    return `<svg class="${extraClass}" viewBox="0 0 24 24" aria-hidden="true" style="width:24px;height:24px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"><g>${ICONS[name]}</g></svg>`;
  }

  /* ─── WAVE DIVIDER HELPER ─────────────────────────────────── */
  function waveDivider(fillColor, isTop = false) {
    if (isTop) {
      return `
        <div class="wave-divider wave-divider--top" aria-hidden="true">
          <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
            <path d="M0,88L60,77.3C120,67,240,45,360,40C480,35,600,45,720,61.3C840,77,960,99,1080,98.7C1200,99,1320,77,1380,66.7L1440,56L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" fill="${fillColor}"></path>
          </svg>
        </div>
      `;
    }
    return `
      <div class="wave-divider wave-divider--bottom" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="${fillColor}"></path>
        </svg>
      </div>
    `;
  }

  /* ─── BUILD NAV ───────────────────────────────────────────── */
  /* ─── BUILD NAV ───────────────────────────────────────────── */
  function buildNav() {
    const navbar = $('#navbar');
    const navLinks = CFG.nav[currentLang];
    const ui = CFG.content.ui[currentLang];
    const platformHref = (CFG.site && CFG.site.platformUrl) || '#platform';
    const platformLabel = (ui && (ui.goToPlatform || ui.requestDemo)) || (currentLang === 'id' ? 'Buka Platform' : 'Go to Platform');
    const isExternal = platformHref.startsWith('http');
    const targetAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';

    navbar.innerHTML = `
      <div class="nav-inner">
        <div class="nav-liquid-shimmer" aria-hidden="true"></div>
        <a href="#hero" class="nav-logo" aria-label="AquaLinkOS Home">
          <span class="logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>
            <span class="logo-ripple-ring" aria-hidden="true"></span>
          </span>AquaLink<span class="logo-os">OS</span>
        </a>
        <nav class="nav-links" aria-label="Primary navigation">
          <span class="nav-indicator" id="nav-indicator" aria-hidden="true"></span>
          ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        </nav>
        <div class="nav-actions">
          <button class="lang-toggle" id="lang-toggle" aria-label="Switch language">${ui.langToggle}</button>
          <a href="${platformHref}"${targetAttr} class="btn btn-primary btn-sm" id="nav-demo-btn">${platformLabel}</a>
          <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div class="nav-progress-stream" aria-hidden="true">
          <div class="nav-progress-wave-fill" id="nav-progress-fill">
            <span class="nav-progress-wave-highlight"></span>
            <span class="nav-progress-droplet"></span>
          </div>
        </div>
      </div>
      <nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">
        ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        <div class="mobile-actions">
          <button class="lang-toggle" id="lang-toggle-mobile" aria-label="Switch language">${ui.langToggle}</button>
          <a href="${platformHref}"${targetAttr} class="btn btn-primary btn-sm" id="mobile-demo-btn">${platformLabel}</a>
        </div>
      </nav>
    `;

    // Hamburger
    const hamburger = $('#hamburger');
    const mobileMenu = $('#mobile-menu');
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close mobile menu on link click
    $$('a', mobileMenu).forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Lang toggles
    ['#lang-toggle', '#lang-toggle-mobile'].forEach(sel => {
      const btn = $(sel);
      if (btn) btn.addEventListener('click', toggleLang);
    });

    // Mouse movement spotlight for liquid shimmer
    navbar.addEventListener('mousemove', (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      navbar.style.setProperty('--mouse-x', `${x}px`);
    }, { passive: true });

    // Initialize the smooth sliding indicator
    initNavIndicator();
  }

  /* ─── DYNAMIC SLIDING NAV INDICATOR ───────────────────────── */
  function initNavIndicator() {
    const navLinksContainer = $('.nav-links');
    const indicator = $('#nav-indicator');
    if (!navLinksContainer || !indicator) return;

    const links = $$('a', navLinksContainer);
    if (!links.length) return;

    const positionIndicator = (targetLink) => {
      if (!targetLink) {
        indicator.style.opacity = '0';
        return;
      }
      const cRect = navLinksContainer.getBoundingClientRect();
      const lRect = targetLink.getBoundingClientRect();
      const left = lRect.left - cRect.left;
      const top = lRect.top - cRect.top;
      const width = lRect.width;
      const height = lRect.height;

      indicator.style.opacity = '1';
      indicator.style.transform = `translate3d(${left}px, ${top}px, 0)`;
      indicator.style.width = `${width}px`;
      indicator.style.height = `${height}px`;
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', () => positionIndicator(link));
    });

    navLinksContainer.addEventListener('mouseleave', () => {
      const activeLink = $('a.active', navLinksContainer);
      if (activeLink) {
        positionIndicator(activeLink);
      } else {
        indicator.style.opacity = '0';
      }
    });

    window.__updateNavIndicator = () => {
      const activeLink = $('a.active', navLinksContainer);
      if (activeLink) {
        positionIndicator(activeLink);
      } else {
        indicator.style.opacity = '0';
      }
    };

    // Position initially
    setTimeout(() => {
      if (window.__updateNavIndicator) window.__updateNavIndicator();
    }, 100);
  }

  /* ─── BUILD HERO ──────────────────────────────────── */
  function buildHero() {
    const c = CFG.content.hero[currentLang];
    const ui = CFG.content.ui[currentLang];
    const section = $('#hero');
    const tLang = currentLang === 'id';
    section.innerHTML = `
      <div class="hero-bg-sky" aria-hidden="true"></div>
      <div class="hero-bg-grid" aria-hidden="true"></div>
      <div class="water-meter-watermark" aria-hidden="true"></div>
      <div class="hero-inner">
        <div class="hero-content">
          <div class="hero-badge reveal">
            <span class="hero-badge-dot" aria-hidden="true"></span>
            ${c.badge}
          </div>
          <h1 class="hero-headline reveal reveal-delay-1">
            ${c.headline.replace('Data-Driven', '<span class="text-gradient">Data-Driven</span>')}
          </h1>
          <p class="hero-subheadline reveal reveal-delay-2">${c.subheadline}</p>
          <div class="hero-ctas reveal reveal-delay-3">
            <a href="#contact" class="btn btn-primary" id="hero-demo-btn">${c.cta1}</a>
            <a href="#solution" class="btn btn-outline" id="hero-explore-btn">${c.cta2}</a>
          </div>
        </div>
        <div class="hero-visual reveal reveal-delay-2">
          <div class="hero-image-wrapper">
            <img src="assets/hero-dashboard.jpg" alt="AquaLinkOS platform dashboard illustration showing water meter network monitoring" loading="eager" width="700" height="394"/>
            <div class="hero-demo-badge">${ui.demoNote}</div>
          </div>
          <div class="hero-floating-card hero-floating-card--1" aria-hidden="true">
            <div class="floating-card-label"><span class="floating-card-dot"></span> Real-time</div>
            <div class="floating-card-value">247 Meters</div>
            <div class="floating-card-sub">Active &amp; Connected</div>
          </div>
          <div class="hero-floating-card hero-floating-card--2" aria-hidden="true">
            <div class="floating-card-label"><span class="floating-card-dot floating-card-dot--amber"></span> Alert</div>
            <div class="floating-card-value">3 Events</div>
            <div class="floating-card-sub">Needs Attention</div>
          </div>
          <div class="hero-floating-card hero-floating-card--3" aria-hidden="true">
            <div class="floating-card-label"><span class="floating-card-dot floating-card-dot--cyan"></span> PDAM Flow Rate</div>
            <div class="floating-card-value">0.85 m³/h</div>
            <div class="floating-card-sub">Ultrasonic AMI Online</div>
          </div>
        </div>
      </div>
      <div class="hero-scroll-hint" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        scroll
      </div>
    `;

    // Live Telemetry Ticker under hero
    let ticker = $('#hero-telemetry-ticker');
    if (!ticker) {
      ticker = el('div', 'telemetry-ticker');
      ticker.id = 'hero-telemetry-ticker';
      ticker.setAttribute('aria-label', 'PDAM Smart Water Network Telemetry');
      section.parentNode.insertBefore(ticker, section.nextSibling);
    }
    ticker.innerHTML = `
      <div class="ticker-wrap">
        <div class="ticker-group">
          <span class="ticker-item"><span class="ticker-dot-pulse"></span> ${tLang ? 'Wilayah Distribusi DMA 4' : 'DMA Zone 4'}: <span class="ticker-badge">42.8 m³/h</span></span>
          <span class="ticker-item">📡 ${tLang ? 'Koneksi LoRaWAN' : 'LoRaWAN Telemetry'}: <span class="ticker-badge ticker-badge--live">99.8% Online</span></span>
          <span class="ticker-item">🚰 ${tLang ? 'Tekanan Pipa Utama' : 'Main Pipeline Pressure'}: <span class="ticker-badge">2.65 Bar</span></span>
          <span class="ticker-item">⚡ ${tLang ? 'Smart Meter Aktif' : 'Active Smart Meters'}: <span class="ticker-badge">1,420 ${tLang ? 'Unit' : 'Units'}</span></span>
          <span class="ticker-item">🛡️ ${tLang ? 'Monitor Kebocoran NRW' : 'NRW Leak Detection'}: <span class="ticker-badge ticker-badge--live">${tLang ? '0 Kritis (Normal)' : '0 Critical (Normal)'}</span></span>
        </div>
        <div class="ticker-group" aria-hidden="true">
          <span class="ticker-item"><span class="ticker-dot-pulse"></span> ${tLang ? 'Wilayah Distribusi DMA 4' : 'DMA Zone 4'}: <span class="ticker-badge">42.8 m³/h</span></span>
          <span class="ticker-item">📡 ${tLang ? 'Koneksi LoRaWAN' : 'LoRaWAN Telemetry'}: <span class="ticker-badge ticker-badge--live">99.8% Online</span></span>
          <span class="ticker-item">🚰 ${tLang ? 'Tekanan Pipa Utama' : 'Main Pipeline Pressure'}: <span class="ticker-badge">2.65 Bar</span></span>
          <span class="ticker-item">⚡ ${tLang ? 'Smart Meter Aktif' : 'Active Smart Meters'}: <span class="ticker-badge">1,420 ${tLang ? 'Unit' : 'Units'}</span></span>
          <span class="ticker-item">🛡️ ${tLang ? 'Monitor Kebocoran NRW' : 'NRW Leak Detection'}: <span class="ticker-badge ticker-badge--live">${tLang ? '0 Kritis (Normal)' : '0 Critical (Normal)'}</span></span>
        </div>
      </div>
    `;
  }

  /* ─── BUILD KEY MESSAGE ───────────────────────────────────── */
  function buildKeyMessage() {
    const q = CFG.content.keyMessage[currentLang];
    const sec = $('#key-message');
    const tLang = currentLang === 'id';
    sec.innerHTML = `
      ${waveDivider('#050E1D', true)}
      <div class="water-meter-watermark water-meter-watermark--left" aria-hidden="true"></div>
      <div class="key-message-inner">
        <blockquote class="key-message-quote reveal">${q}</blockquote>
        <div class="key-message-counter reveal">
          <span>💧 AMR • AMI • SCADA</span>
          <span>|</span>
          <span>124,730.5 m³ ${tLang ? 'Terpantau' : 'Monitored'}</span>
        </div>
      </div>
      ${waveDivider('#FFFFFF', false)}
    `;
  }

  /* ─── BUILD CHALLENGES ────────────────────────────────────── */
  function buildChallenges() {
    const c = CFG.content.challenges[currentLang];
    const sec = $('#challenges');
    sec.innerHTML = `
      <div class="water-meter-watermark" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline">${c.headline}</h2>
          <p class="section-subheadline">${c.subheadline}</p>
        </div>
        <div class="challenges-grid">
          ${c.cards.map((card, i) => `
            <div class="challenge-card reveal reveal-delay-${i + 1}" role="article">
              <div class="challenge-icon" aria-hidden="true">
                ${svgIcon(card.icon)}
              </div>
              <h3 class="challenge-title">${card.title}</h3>
              <p class="challenge-desc">${card.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
      ${waveDivider('#F0F8FF', false)}
    `;
  }

  /* ─── BUILD ECOSYSTEM ─────────────────────────────────────── */
  function buildEcosystem() {
    const c = CFG.content.ecosystem[currentLang];
    const sec = $('#ecosystem');
    const tLang = currentLang === 'id';

    const stages = [
      {
        num: '01',
        id: 'field',
        title: 'Field Devices',
        subtitle: tLang ? 'Akuisisi Data Lapangan' : 'Field Data Acquisition',
        color: '#00E5FF',
        color2: '#10B981',
        glow: 'rgba(0, 229, 255, 0.45)',
        badgeBg: 'rgba(0, 229, 255, 0.12)',
        pipeLabel: tLang ? 'Sensor Telemetri' : 'Sensor Telemetry',
        cards: [
          {
            title: 'Ultrasonic Smart Meter',
            desc: tLang ? 'Meter air ultrasonik presisi tinggi tanpa komponen mekanis aus.' : 'High-precision static ultrasonic meter without moving parts.',
            badge: 'DN15 – DN50',
            status: tLang ? 'LIVE' : 'LIVE',
            tags: ['R400 Presisi', 'IP68 Kedap Air', 'Baterai 10+ Thn'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <defs>
                  <linearGradient id="pipe-g-0" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#1E293B"/>
                    <stop offset="50%" stop-color="#334155"/>
                    <stop offset="100%" stop-color="#1E293B"/>
                  </linearGradient>
                  <linearGradient id="meter-body-0" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#0E7490"/>
                    <stop offset="100%" stop-color="#082F49"/>
                  </linearGradient>
                  <linearGradient id="flow-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.2"/>
                    <stop offset="50%" stop-color="#00E5FF"/>
                    <stop offset="100%" stop-color="#10B981"/>
                  </linearGradient>
                </defs>
                <!-- Pipe flanges -->
                <rect x="12" y="46" width="196" height="22" rx="3" fill="url(#pipe-g-0)" stroke="#475569" stroke-width="1.5"/>
                <rect x="6" y="42" width="14" height="30" rx="3" fill="#B45309" stroke="#F59E0B" stroke-width="1.2"/>
                <rect x="200" y="42" width="14" height="30" rx="3" fill="#B45309" stroke="#F59E0B" stroke-width="1.2"/>
                <!-- Flow water stream animation -->
                <line x1="28" y1="57" x2="192" y2="57" stroke="url(#flow-cyan)" stroke-width="3" stroke-dasharray="12 8">
                  <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1.2s" repeatCount="indefinite"/>
                </line>
                <!-- Meter Housing -->
                <circle cx="110" cy="40" r="34" fill="url(#meter-body-0)" stroke="#00E5FF" stroke-width="2"/>
                <circle cx="110" cy="40" r="27" fill="#031726" stroke="#0284C7" stroke-width="1.2"/>
                <!-- LCD Screen -->
                <rect x="88" y="27" width="44" height="19" rx="3" fill="#021C1E" stroke="#10B981" stroke-width="1"/>
                <text x="110" y="39" fill="#00E5FF" font-family="'Courier New', monospace" font-size="8" font-weight="700" text-anchor="middle" letter-spacing="0.5">1428.5 m³</text>
                <text x="110" y="44" fill="#6EE7B7" font-size="5" text-anchor="middle">Q3 2.5 m³/h</text>
                <!-- Ultrasonic acoustic waves -->
                <path d="M96 54a14 14 0 0 1 28 0" stroke="#00E5FF" stroke-width="1.6" stroke-linecap="round" opacity="0.85"/>
                <path d="M101 51a9 9 0 0 1 18 0" stroke="#10B981" stroke-width="1.5" stroke-linecap="round" opacity="0.95"/>
                <!-- Status LED -->
                <circle cx="110" cy="18" r="2.8" fill="#10B981" filter="drop-shadow(0 0 4px #10B981)"/>
              </svg>
            `
          },
          {
            title: 'Retrofit Module & MIU',
            desc: tLang ? 'Modul pintar clip-on untuk mekanis eksisting tanpa ganti meter.' : 'Clip-on smart module upgrading existing mechanical meters.',
            badge: 'Pulse / Namur',
            status: tLang ? 'SYNC' : 'SYNC',
            tags: ['Optik & Induktif', 'Anti-Tamper', 'Plug & Play'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <defs>
                  <linearGradient id="miu-body" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#1E293B"/>
                    <stop offset="100%" stop-color="#0F172A"/>
                  </linearGradient>
                  <linearGradient id="puck-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#06B6D4"/>
                    <stop offset="100%" stop-color="#0284C7"/>
                  </linearGradient>
                </defs>
                <!-- Base mechanical meter outline -->
                <rect x="25" y="46" width="80" height="34" rx="6" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>
                <circle cx="65" cy="46" r="22" fill="#0F172A" stroke="#00E5FF" stroke-width="1.5"/>
                <circle cx="65" cy="46" r="16" fill="#0B132B" stroke="#334155" stroke-width="1"/>
                <line x1="65" y1="46" x2="72" y2="38" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round"/>
                <!-- Retrofit Puck attached -->
                <rect x="52" y="16" width="26" height="18" rx="4" fill="url(#puck-grad)" stroke="#22D3EE" stroke-width="1.5"/>
                <circle cx="65" cy="25" r="3.5" fill="#FFFFFF" opacity="0.9"/>
                <!-- Connecting Cable -->
                <path d="M78 25 C100 25, 110 50, 135 50" stroke="#00E5FF" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
                <!-- MIU Unit Box -->
                <rect x="135" y="32" width="65" height="46" rx="8" fill="url(#miu-body)" stroke="#00E5FF" stroke-width="1.8"/>
                <rect x="145" y="42" width="45" height="16" rx="3" fill="#031726" stroke="#0284C7" stroke-width="1"/>
                <text x="167" y="53" fill="#00E5FF" font-family="'Courier New', monospace" font-size="7.5" font-weight="700" text-anchor="middle">TX PULSE</text>
                <!-- Antenna on MIU -->
                <line x1="188" y1="32" x2="188" y2="14" stroke="#00E5FF" stroke-width="2" stroke-linecap="round"/>
                <circle cx="188" cy="14" r="3" fill="#10B981"/>
                <!-- Radio blips -->
                <path d="M194 12 a6 6 0 0 1 0 8" stroke="#10B981" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            `
          },
          {
            title: 'Industrial Bulk Meter',
            desc: tLang ? 'Pengukuran transmisi pipa utama debit besar PDAM (DN50–DN300).' : 'Main distribution transmission pipe metering for high flow rates.',
            badge: 'DN50 – DN300',
            status: tLang ? 'ACTIVE' : 'ACTIVE',
            tags: ['Flange Baja PN16', 'Electromagnetic', 'AMR / AMI'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <defs>
                  <linearGradient id="bulk-pipe" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#334155"/>
                    <stop offset="50%" stop-color="#1E293B"/>
                    <stop offset="100%" stop-color="#0F172A"/>
                  </linearGradient>
                </defs>
                <!-- Heavy industrial pipe -->
                <rect x="22" y="42" width="176" height="34" rx="4" fill="url(#bulk-pipe)" stroke="#64748B" stroke-width="2"/>
                <!-- Bolt flanges -->
                <rect x="14" y="34" width="16" height="50" rx="3" fill="#475569" stroke="#94A3B8" stroke-width="1.5"/>
                <circle cx="22" cy="40" r="2.5" fill="#E2E8F0"/>
                <circle cx="22" cy="59" r="2.5" fill="#E2E8F0"/>
                <circle cx="22" cy="78" r="2.5" fill="#E2E8F0"/>
                <rect x="190" y="34" width="16" height="50" rx="3" fill="#475569" stroke="#94A3B8" stroke-width="1.5"/>
                <circle cx="198" cy="40" r="2.5" fill="#E2E8F0"/>
                <circle cx="198" cy="59" r="2.5" fill="#E2E8F0"/>
                <circle cx="198" cy="78" r="2.5" fill="#E2E8F0"/>
                <!-- Sensor Tower -->
                <rect x="96" y="22" width="28" height="20" fill="#0EA5E9" stroke="#00E5FF" stroke-width="1.5"/>
                <rect x="88" y="10" width="44" height="18" rx="4" fill="#031726" stroke="#00E5FF" stroke-width="1.5"/>
                <text x="110" y="22" fill="#00E5FF" font-family="'Courier New', monospace" font-size="7" font-weight="700" text-anchor="middle">DN100 MAG</text>
                <!-- Flow wave inside -->
                <path d="M42 59 Q 80 50, 110 59 T 178 59" stroke="#00E5FF" stroke-width="2.5" fill="none" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1s" repeatCount="indefinite"/>
                </path>
                <circle cx="110" cy="59" r="4" fill="#10B981" filter="drop-shadow(0 0 6px #10B981)"/>
              </svg>
            `
          }
        ]
      },
      {
        num: '02',
        id: 'conn',
        title: 'Konektivitas',
        subtitle: tLang ? 'Jaringan IoT & Transmisi' : 'IoT Network & Transmission',
        color: '#F59E0B',
        color2: '#EF4444',
        glow: 'rgba(245, 158, 11, 0.45)',
        badgeBg: 'rgba(245, 158, 11, 0.12)',
        pipeLabel: tLang ? 'Transmisi Nirkabel' : 'Wireless Uplink',
        cards: [
          {
            title: 'LoRaWAN Gateway',
            desc: tLang ? 'Protokol radio jarak jauh daya sangat rendah, jangkauan hingga 15 km.' : 'Ultra-low power long-range radio protocol reaching up to 15km.',
            badge: '868 MHz ISM',
            status: tLang ? 'RF ONLINE' : 'RF ONLINE',
            tags: ['Jangkauan 15 km', 'Baterai Hemat', 'Penetrasi Tinggi'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <defs>
                  <radialGradient id="rf-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.8"/>
                    <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"/>
                  </radialGradient>
                </defs>
                <!-- Gateway tower base -->
                <rect x="85" y="56" width="50" height="30" rx="5" fill="#1E293B" stroke="#F59E0B" stroke-width="1.8"/>
                <line x1="110" y1="56" x2="110" y2="24" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
                <circle cx="110" cy="24" r="5" fill="#EF4444" stroke="#F59E0B" stroke-width="1.5"/>
                <!-- Radiating RF waves -->
                <path d="M96 16 A 18 18 0 0 1 124 16" stroke="#F59E0B" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.9">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite"/>
                </path>
                <path d="M86 8 A 30 30 0 0 1 134 8" stroke="#F59E0B" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.7">
                  <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.8s" begin="0.3s" repeatCount="indefinite"/>
                </path>
                <path d="M74 0 A 44 44 0 0 1 146 0" stroke="#F59E0B" stroke-width="1.2" stroke-linecap="round" fill="none" opacity="0.4">
                  <animate attributeName="opacity" values="0.1;0.7;0.1" dur="1.8s" begin="0.6s" repeatCount="indefinite"/>
                </path>
                <!-- Gateway status text -->
                <text x="110" y="73" fill="#FDE68A" font-family="'Courier New', monospace" font-size="7.5" font-weight="700" text-anchor="middle">GW 868MHz</text>
                <circle cx="95" cy="78" r="2" fill="#10B981"/>
                <circle cx="102" cy="78" r="2" fill="#F59E0B"/>
                <circle cx="109" cy="78" r="2" fill="#3B82F6"/>
              </svg>
            `
          },
          {
            title: 'NB-IoT / Cellular IoT',
            desc: tLang ? 'Konektivitas seluler langsung ke BTS telko dengan enkripsi bank-grade.' : 'Direct cellular connectivity to carrier base stations with carrier encryption.',
            badge: 'Cat-NB1 / Cat.1',
            status: tLang ? '5G / LTE' : '5G / LTE',
            tags: ['Operator Telko', 'Penetrasi Manhole', 'Enkripsi AES'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <!-- Microchip PCB card -->
                <rect x="55" y="20" width="110" height="60" rx="8" fill="#18181B" stroke="#F59E0B" stroke-width="1.8"/>
                <!-- Gold contact pins -->
                <rect x="75" y="32" width="26" height="36" rx="4" fill="#B45309" stroke="#FDE68A" stroke-width="1"/>
                <line x1="75" y1="44" x2="101" y2="44" stroke="#78350F" stroke-width="1"/>
                <line x1="75" y1="56" x2="101" y2="56" stroke="#78350F" stroke-width="1"/>
                <line x1="88" y1="32" x2="88" y2="68" stroke="#78350F" stroke-width="1"/>
                <!-- Cellular signal bars -->
                <rect x="120" y="58" width="6" height="10" rx="1" fill="#F59E0B"/>
                <rect x="130" y="50" width="6" height="18" rx="1" fill="#F59E0B"/>
                <rect x="140" y="42" width="6" height="26" rx="1" fill="#F59E0B"/>
                <rect x="150" y="34" width="6" height="34" rx="1" fill="#10B981" filter="drop-shadow(0 0 4px #10B981)"/>
                <!-- Data stream dots -->
                <circle cx="125" cy="27" r="3" fill="#EF4444">
                  <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/>
                </circle>
                <text x="142" y="29" fill="#FDE68A" font-size="7" font-weight="700">4G LTE-M</text>
              </svg>
            `
          },
          {
            title: 'Multi-Protocol Gateways',
            desc: tLang ? 'Router industri DIN-rail konversi sinyal Modbus, Pulse, & MQTT.' : 'Industrial DIN-rail gateway converting Modbus, Pulse, and MQTT payloads.',
            badge: '4G / GPRS / RS485',
            status: tLang ? 'ONLINE' : 'ONLINE',
            tags: ['Modbus RTU', 'Local Storage Buffer', 'Failover Dual SIM'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <!-- Dual antenna router -->
                <rect x="60" y="36" width="100" height="48" rx="6" fill="#1F2937" stroke="#F59E0B" stroke-width="1.8"/>
                <!-- Dual Antennas -->
                <line x1="78" y1="36" x2="68" y2="12" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="142" y1="36" x2="152" y2="12" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
                <circle cx="68" cy="12" r="3" fill="#EF4444"/>
                <circle cx="152" cy="12" r="3" fill="#EF4444"/>
                <!-- Ethernet / Serial Ports -->
                <rect x="72" y="58" width="16" height="18" rx="2" fill="#030712" stroke="#6B7280" stroke-width="1"/>
                <rect x="94" y="58" width="16" height="18" rx="2" fill="#030712" stroke="#6B7280" stroke-width="1"/>
                <rect x="116" y="58" width="16" height="18" rx="2" fill="#030712" stroke="#6B7280" stroke-width="1"/>
                <rect x="138" y="58" width="16" height="18" rx="2" fill="#030712" stroke="#6B7280" stroke-width="1"/>
                <!-- Port LEDs -->
                <circle cx="80" cy="50" r="2" fill="#10B981"/>
                <circle cx="102" cy="50" r="2" fill="#10B981"/>
                <circle cx="124" cy="50" r="2" fill="#F59E0B"/>
                <circle cx="146" cy="50" r="2" fill="#3B82F6"/>
                <text x="110" y="44" fill="#FDE68A" font-size="7" font-weight="700" text-anchor="middle">EDGE PROTOCOL</text>
              </svg>
            `
          }
        ]
      },
      {
        num: '03',
        id: 'platform',
        title: 'Platform',
        subtitle: tLang ? 'Cloud & Mesin Pemrosesan' : 'Cloud & Ingestion Engine',
        color: '#6366F1',
        color2: '#3B82F6',
        glow: 'rgba(99, 102, 241, 0.45)',
        badgeBg: 'rgba(99, 102, 241, 0.12)',
        pipeLabel: tLang ? 'Ingesti & Analitik' : 'Ingestion & Analytics',
        cards: [
          {
            title: 'AquaLinkOS Core',
            desc: tLang ? 'Mesin stream processing berkinerja tinggi >10.000 pesan telemetri/detik.' : 'High-throughput stream processing engine handling >10k telemetry msgs/sec.',
            badge: 'Core Engine',
            status: tLang ? 'HEALTHY' : 'HEALTHY',
            tags: ['Real-time Rules', 'Sub-second Latency', 'Auto Event Triggers'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <defs>
                  <linearGradient id="cpu-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#6366F1"/>
                    <stop offset="100%" stop-color="#3B82F6"/>
                  </linearGradient>
                </defs>
                <!-- Server rack body -->
                <rect x="40" y="16" width="140" height="66" rx="8" fill="#0F172A" stroke="#6366F1" stroke-width="1.8"/>
                <!-- Server rack rows -->
                <line x1="40" y1="38" x2="180" y2="38" stroke="#1E293B" stroke-width="1.5"/>
                <line x1="40" y1="60" x2="180" y2="60" stroke="#1E293B" stroke-width="1.5"/>
                <!-- Core Chip at center -->
                <rect x="94" y="32" width="32" height="32" rx="6" fill="url(#cpu-grad)" stroke="#A5B4FC" stroke-width="1.5"/>
                <circle cx="110" cy="48" r="8" fill="#0F172A" stroke="#818CF8" stroke-width="1.2"/>
                <!-- Pulsing Core indicator -->
                <circle cx="110" cy="48" r="4" fill="#67E8F9" filter="drop-shadow(0 0 6px #67E8F9)">
                  <animate attributeName="r" values="3;5;3" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                <!-- Chip Pins -->
                <line x1="90" y1="40" x2="94" y2="40" stroke="#6366F1" stroke-width="2"/>
                <line x1="90" y1="48" x2="94" y2="48" stroke="#6366F1" stroke-width="2"/>
                <line x1="90" y1="56" x2="94" y2="56" stroke="#6366F1" stroke-width="2"/>
                <line x1="126" y1="40" x2="130" y2="40" stroke="#6366F1" stroke-width="2"/>
                <line x1="126" y1="48" x2="130" y2="48" stroke="#6366F1" stroke-width="2"/>
                <line x1="126" y1="56" x2="130" y2="56" stroke="#6366F1" stroke-width="2"/>
                <!-- Metric labels -->
                <text x="66" y="30" fill="#94A3B8" font-size="7">INGRESS</text>
                <text x="66" y="52" fill="#818CF8" font-size="7.5" font-weight="700">>10k/s</text>
                <text x="142" y="30" fill="#94A3B8" font-size="7">RULES</text>
                <text x="142" y="52" fill="#10B981" font-size="7.5" font-weight="700">ACTIVE</text>
              </svg>
            `
          },
          {
            title: 'HDMS Cloud Platform',
            desc: tLang ? 'Pusat data multi-tenant dengan time-series storage & enkripsi terverifikasi.' : 'Multi-tenant data lake with time-series storage and certified encryption.',
            badge: 'Cloud SaaS',
            status: tLang ? '99.9% SLA' : '99.9% SLA',
            tags: ['Multi-Tenant PDAM', 'Time-Series DB', 'Enkripsi ISO 27001'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <!-- Stacked database cylinders -->
                <ellipse cx="110" cy="28" rx="42" ry="12" fill="#1E1B4B" stroke="#6366F1" stroke-width="1.8"/>
                <path d="M68 28 v16 C 68 50, 152 50, 152 44 v-16" fill="#1E1B4B" stroke="#6366F1" stroke-width="1.8"/>
                <ellipse cx="110" cy="44" rx="42" ry="11" fill="#312E81" stroke="#818CF8" stroke-width="1.2"/>
                <path d="M68 44 v18 C 68 68, 152 68, 152 62 v-18" fill="#1E1B4B" stroke="#6366F1" stroke-width="1.8"/>
                <ellipse cx="110" cy="62" rx="42" ry="11" fill="#3730A3" stroke="#818CF8" stroke-width="1.2"/>
                <!-- Glow Security Lock -->
                <circle cx="110" cy="45" r="9" fill="#0F172A" stroke="#60A5FA" stroke-width="1.5"/>
                <path d="M107 43 v-2 a3 3 0 0 1 6 0 v2" stroke="#60A5FA" stroke-width="1.5" fill="none"/>
                <circle cx="110" cy="46" r="1.5" fill="#60A5FA"/>
                <!-- Rotating sync ring -->
                <path d="M54 36 A 65 65 0 0 1 166 36" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="6 4" fill="none">
                  <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
                </path>
              </svg>
            `
          },
          {
            title: 'API Integration Hub',
            desc: tLang ? 'Jembatan REST, MQTT, & Webhooks sinkronisasi ke billing & GIS PDAM.' : 'REST, MQTT, & Webhook gateway synchronizing with billing & GIS software.',
            badge: 'REST / MQTT',
            status: tLang ? 'CONNECTED' : 'CONNECTED',
            tags: ['Open REST API', 'MQTT Broker', 'Webhook Event'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <!-- Connected Node Graph -->
                <circle cx="110" cy="48" r="18" fill="#1E1B4B" stroke="#6366F1" stroke-width="2"/>
                <text x="110" y="51" fill="#A5B4FC" font-size="8" font-weight="700" text-anchor="middle">API</text>
                <!-- Surrounding satellite nodes -->
                <circle cx="56" cy="30" r="11" fill="#0F172A" stroke="#38BDF8" stroke-width="1.5"/>
                <text x="56" y="33" fill="#38BDF8" font-size="6" font-weight="700" text-anchor="middle">REST</text>
                <circle cx="56" cy="66" r="11" fill="#0F172A" stroke="#10B981" stroke-width="1.5"/>
                <text x="56" y="69" fill="#10B981" font-size="6" font-weight="700" text-anchor="middle">MQTT</text>
                <circle cx="164" cy="30" r="11" fill="#0F172A" stroke="#F59E0B" stroke-width="1.5"/>
                <text x="164" y="33" fill="#F59E0B" font-size="6" font-weight="700" text-anchor="middle">GIS</text>
                <circle cx="164" cy="66" r="11" fill="#0F172A" stroke="#EC4899" stroke-width="1.5"/>
                <text x="164" y="69" fill="#EC4899" font-size="6" font-weight="700" text-anchor="middle">BILL</text>
                <!-- Connection rays with moving data particles -->
                <line x1="67" y1="35" x2="93" y2="43" stroke="#6366F1" stroke-width="1.8" stroke-dasharray="4 3"/>
                <line x1="67" y1="61" x2="93" y2="53" stroke="#6366F1" stroke-width="1.8" stroke-dasharray="4 3"/>
                <line x1="127" y1="43" x2="153" y2="35" stroke="#6366F1" stroke-width="1.8" stroke-dasharray="4 3"/>
                <line x1="127" y1="53" x2="153" y2="61" stroke="#6366F1" stroke-width="1.8" stroke-dasharray="4 3"/>
                <circle cx="80" cy="39" r="2.5" fill="#38BDF8">
                  <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
                </circle>
              </svg>
            `
          }
        ]
      },
      {
        num: '04',
        id: 'apps',
        title: 'Aplikasi',
        subtitle: tLang ? 'Kecerdasan & Operasional' : 'Operational Intelligence',
        color: '#EC4899',
        color2: '#8B5CF6',
        glow: 'rgba(236, 72, 153, 0.45)',
        badgeBg: 'rgba(236, 72, 153, 0.12)',
        pipeLabel: tLang ? 'Aksi & Keputusan' : 'Action & Decisions',
        cards: [
          {
            title: 'Near Real-time Monitoring',
            desc: tLang ? 'SCADA interaktif peta DMA, debit aliran pipa, & tekanan air per zona.' : 'Interactive SCADA with DMA maps, water pipeline flow rates, & zonal pressure.',
            badge: 'SCADA Web',
            status: tLang ? 'NEAR REAL-TIME' : 'NEAR REAL-TIME',
            tags: ['Grafik Live', 'Alarm Tekanan DMA', 'Peta Jaringan GIS'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <defs>
                  <linearGradient id="wave-fuchsia" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#EC4899" stop-opacity="0.6"/>
                    <stop offset="100%" stop-color="#EC4899" stop-opacity="0.02"/>
                  </linearGradient>
                </defs>
                <!-- Monitor display screen -->
                <rect x="35" y="14" width="150" height="70" rx="8" fill="#0C0A1D" stroke="#EC4899" stroke-width="1.8"/>
                <!-- Chart grid lines -->
                <line x1="45" y1="36" x2="175" y2="36" stroke="#2D124D" stroke-width="1"/>
                <line x1="45" y1="54" x2="175" y2="54" stroke="#2D124D" stroke-width="1"/>
                <!-- Live water flow graph wave -->
                <path d="M45 62 Q 65 44, 85 52 T 120 38 T 150 48 T 175 30" stroke="#EC4899" stroke-width="2.5" fill="none"/>
                <!-- Graph gradient area -->
                <path d="M45 62 Q 65 44, 85 52 T 120 38 T 150 48 T 175 30 L 175 74 L 45 74 Z" fill="url(#wave-fuchsia)"/>
                <!-- Active data points -->
                <circle cx="120" cy="38" r="4" fill="#F43F5E" filter="drop-shadow(0 0 6px #F43F5E)">
                  <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite"/>
                </circle>
                <circle cx="175" cy="30" r="3.5" fill="#38BDF8"/>
                <text x="50" y="27" fill="#F472B6" font-size="7" font-weight="700">DMA-04 FLOW</text>
                <text x="140" y="27" fill="#67E8F9" font-family="'Courier New', monospace" font-size="7.5" font-weight="700">42.8 m³/h</text>
              </svg>
            `
          },
          {
            title: 'Billing & AMR Sync',
            desc: tLang ? 'Pembacaan otomatis meter untuk tagihan tanpa kesalahan entri manual.' : 'Automated meter reading for automated invoicing with zero manual errors.',
            badge: 'Auto AMR',
            status: tLang ? 'VERIFIED' : 'VERIFIED',
            tags: ['Rekonsiliasi Otomatis', 'Zero Human Error', 'Integrasi Loket'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <!-- Invoice document card -->
                <rect x="58" y="15" width="104" height="68" rx="6" fill="#18182E" stroke="#EC4899" stroke-width="1.8"/>
                <!-- Header voucher band -->
                <rect x="58" y="15" width="104" height="18" rx="5" fill="#BE185D"/>
                <text x="110" y="27" fill="#FFFFFF" font-size="7.5" font-weight="700" text-anchor="middle">FAKTUR PDAM AMR</text>
                <!-- Line items simulation -->
                <rect x="68" y="40" width="48" height="5" rx="2" fill="#4C1D95"/>
                <rect x="124" y="40" width="28" height="5" rx="2" fill="#EC4899"/>
                <rect x="68" y="50" width="56" height="5" rx="2" fill="#4C1D95"/>
                <rect x="132" y="50" width="20" height="5" rx="2" fill="#A855F7"/>
                <!-- Barcode & Verified Checkmark -->
                <line x1="68" y1="64" x2="68" y2="74" stroke="#D8B4FE" stroke-width="1.5"/>
                <line x1="72" y1="64" x2="72" y2="74" stroke="#D8B4FE" stroke-width="1"/>
                <line x1="76" y1="64" x2="76" y2="74" stroke="#D8B4FE" stroke-width="2"/>
                <line x1="82" y1="64" x2="82" y2="74" stroke="#D8B4FE" stroke-width="1"/>
                <line x1="86" y1="64" x2="86" y2="74" stroke="#D8B4FE" stroke-width="2"/>
                <!-- Verified Green Stamp -->
                <circle cx="140" cy="67" r="9" fill="#065F46" stroke="#10B981" stroke-width="1.5"/>
                <path d="M136 67 l3 3 l6 -6" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            `
          },
          {
            title: 'Anomaly & NRW',
            desc: tLang ? 'Deteksi dini pipa bocor & analisa water balance otomatis.' : 'Early acoustic pipeline leak detection and water balance balancing.',
            badge: 'NRW Detect',
            status: tLang ? 'NRW ACTIVE' : 'NRW ACTIVE',
            tags: ['Deteksi Bocor Cepat', 'Keseimbangan Air', 'Akurasi 98.4%'],
            svg: `
              <svg viewBox="0 0 220 96" fill="none" class="topo-card-illu">
                <!-- Radar grid circles -->
                <circle cx="110" cy="48" r="36" fill="#130924" stroke="#4A1D6D" stroke-width="1.2"/>
                <circle cx="110" cy="48" r="24" stroke="#831843" stroke-width="1"/>
                <circle cx="110" cy="48" r="12" stroke="#BE185D" stroke-width="1"/>
                <!-- Radar sweep line -->
                <line x1="110" y1="48" x2="140" y2="28" stroke="#EC4899" stroke-width="2" stroke-linecap="round">
                  <animateTransform attributeName="transform" type="rotate" from="0 110 48" to="360 110 48" dur="3s" repeatCount="indefinite"/>
                </line>
                <!-- Anomaly Target Blip -->
                <circle cx="128" cy="38" r="5" fill="#EF4444" stroke="#FDE047" stroke-width="1.5" filter="drop-shadow(0 0 6px #EF4444)">
                  <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite"/>
                </circle>
                <!-- Radar Crosshair -->
                <line x1="74" y1="48" x2="146" y2="48" stroke="#371B58" stroke-width="1" stroke-dasharray="2 2"/>
                <line x1="110" y1="12" x2="110" y2="84" stroke="#371B58" stroke-width="1" stroke-dasharray="2 2"/>
                <!-- Alert Badge Tag -->
                <rect x="42" y="16" width="46" height="15" rx="3" fill="#831843" stroke="#F43F5E" stroke-width="1"/>
                <text x="65" y="26" fill="#FFE4E6" font-size="6.5" font-weight="700" text-anchor="middle">NRW PINPOINT</text>
              </svg>
            `
          }
        ]
      }
    ];

    sec.innerHTML = `
      <div class="water-meter-watermark water-meter-watermark--left" aria-hidden="true"></div>
      <div class="container">
        <!-- Section Title Header -->
        <div class="section-header reveal" style="text-align:center">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline" style="margin:0 auto">${c.headline}</h2>
          <p class="section-subheadline" style="margin:16px auto 0;max-width:640px">${c.subheadline}</p>
        </div>

        <!-- 3D HIGH-TECH TOPOLOGY SECTION -->
        <div class="topo-theater reveal" id="topo-theater" aria-label="AquaLinkOS Architecture Topology">
          <!-- Cyber Ambient Background -->
          <div class="topo-cyber-bg" aria-hidden="true">
            <div class="topo-cyber-grid"></div>
            <div class="topo-cyber-glow topo-cyber-glow--1"></div>
            <div class="topo-cyber-glow topo-cyber-glow--2"></div>
          </div>

          <!-- ══════ CONTINUOUS DATA FLOW PIPELINE (SEQUENCE HEADER) ══════ -->
          <div class="topo-pipeline-track" aria-label="Tahapan Alur Data">
            <div class="topo-pipeline-glow-bar" aria-hidden="true"></div>

            <div class="topo-stages-bar">
              ${stages.map((st, i) => `
                <div class="topo-stage-node" data-stage-idx="${i}" style="--sc:${st.color};--sc2:${st.color2};--sglow:${st.glow};--stage-i:${i}">
                  <!-- Stage Modern Geometric Cyber Badge -->
                  <div class="topo-stage-badge-wrap">
                    <div class="topo-stage-badge">
                      <div class="topo-badge-scanner" aria-hidden="true"></div>
                      <div class="topo-badge-glow" aria-hidden="true"></div>
                      <span class="topo-badge-beacon" aria-hidden="true"></span>
                      <div class="topo-badge-corner topo-badge-corner--tl" aria-hidden="true"></div>
                      <div class="topo-badge-corner topo-badge-corner--br" aria-hidden="true"></div>
                      <span class="topo-badge-num">${st.num}</span>
                    </div>
                    <div class="topo-stage-pulse-ring" aria-hidden="true"></div>
                  </div>

                  <!-- Stage Meta -->
                  <div class="topo-stage-meta">
                    <span class="topo-stage-step-tag" style="color:${st.color}">${tLang ? 'TAHAP' : 'PHASE'} ${st.num}</span>
                    <h3 class="topo-stage-title">${st.title}</h3>
                    <span class="topo-stage-subtitle">${st.subtitle}</span>
                  </div>

                  <!-- Vertical conduit stem connecting to columns below -->
                  <div class="topo-stage-stem" style="background: linear-gradient(180deg, ${st.color}, transparent)" aria-hidden="true">
                    <div class="topo-stem-pulse" style="background:${st.color};box-shadow: 0 0 8px ${st.color}"></div>
                  </div>
                </div>

                ${i < stages.length - 1 ? `
                  <!-- Flow Segment Tube between Stages -->
                  <div class="topo-segment-tube" aria-hidden="true">
                    <div class="topo-tube-track" style="background: linear-gradient(90deg, ${st.color}99, ${stages[i + 1].color}99)">
                      <!-- Flowing energy pulses -->
                      <div class="topo-tube-particle topo-tube-particle--1" style="background:${stages[i + 1].color};box-shadow:0 0 10px ${stages[i + 1].color}"></div>
                      <div class="topo-tube-particle topo-tube-particle--2" style="background:${st.color};box-shadow:0 0 8px ${st.color}"></div>
                    </div>
                    <div class="topo-tube-label" style="border-color:${st.color}55;color:${st.color}">
                      <span>${st.pipeLabel}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M7 2l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ` : ''}
              `).join('')}
            </div>
          </div>

          <!-- ══════ 4-COLUMN CARDS CONTAINER WITH 3D HARDWARE / APP VISUALS ══════ -->
          <div class="topo-matrix-grid">
            ${stages.map((st, si) => `
              <div class="topo-column" data-stage-col="${si}" style="--sc:${st.color};--sc2:${st.color2};--sglow:${st.glow};--sbadge:${st.badgeBg}">
                <div class="topo-column-header">
                  <div class="topo-col-pill" style="border-color:${st.color}66;color:${st.color};background:${st.badgeBg}">
                    <span class="topo-col-pill-dot" style="background:${st.color};box-shadow:0 0 8px ${st.color}"></span>
                    <span>${st.title}</span>
                  </div>
                </div>

                <!-- 3 Hardware/Software Visual Cards -->
                <div class="topo-column-cards">
                  ${st.cards.map((card, ci) => `
                    <div class="topo-device-card" style="--sc:${st.color};--sglow:${st.glow};--ci:${ci}">
                      <!-- Card Visual Preview Header -->
                      <div class="topo-card-preview-area">
                        ${card.svg}
                        <div class="topo-card-status-pill" style="border-color:${st.color}44;background:${st.badgeBg};color:${st.color}">
                          <span class="topo-card-live-dot" style="background:${st.color};box-shadow:0 0 6px ${st.color}"></span>
                          <span>${card.status}</span>
                        </div>
                      </div>

                      <!-- Card Content Info -->
                      <div class="topo-card-body">
                        <div class="topo-card-header-row">
                          <h4 class="topo-card-title">${card.title}</h4>
                          <span class="topo-card-badge" style="border-color:${st.color}44;color:${st.color}">${card.badge}</span>
                        </div>
                        <p class="topo-card-desc">${card.desc}</p>
                        
                        <!-- Tech Tags -->
                        <div class="topo-card-tags">
                          ${card.tags.map(tag => `
                            <span class="topo-card-tag">${tag}</span>
                          `).join('')}
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- ══════ TELEMETRY STATUS DOCK ══════ -->
          <div class="topo-dock-ribbon" aria-label="Status Telemetri Sistem">
            <div class="topo-dock-card">
              <span class="topo-dock-indicator" style="background:#00E5FF;box-shadow:0 0 8px #00E5FF"></span>
              <div class="topo-dock-stat">
                <span class="topo-dock-num" style="color:#00E5FF">1,420+</span>
                <span class="topo-dock-desc">${tLang ? 'Smart Meter Aktif' : 'Active Smart Meters'}</span>
              </div>
            </div>
            <div class="topo-dock-card">
              <span class="topo-dock-indicator" style="background:#F59E0B;box-shadow:0 0 8px #F59E0B"></span>
              <div class="topo-dock-stat">
                <span class="topo-dock-num" style="color:#F59E0B">99.85%</span>
                <span class="topo-dock-desc">${tLang ? 'Ketersediaan IoT' : 'IoT Network Uptime'}</span>
              </div>
            </div>
            <div class="topo-dock-card">
              <span class="topo-dock-indicator" style="background:#6366F1;box-shadow:0 0 8px #6366F1"></span>
              <div class="topo-dock-stat">
                <span class="topo-dock-num" style="color:#818CF8">>10,000/s</span>
                <span class="topo-dock-desc">${tLang ? 'Pemrosesan Data Stream' : 'Stream Ingestion Rate'}</span>
              </div>
            </div>
            <div class="topo-dock-card">
              <span class="topo-dock-indicator" style="background:#EC4899;box-shadow:0 0 8px #EC4899"></span>
              <div class="topo-dock-stat">
                <span class="topo-dock-num" style="color:#F472B6">< 45 detik</span>
                <span class="topo-dock-desc">${tLang ? 'Deteksi Kebocoran & NRW' : 'NRW Leak Alert Time'}</span>
              </div>
            </div>
          </div>

        </div><!-- /topo-theater -->
      </div>
      ${waveDivider('#F0F9FF', false)}
    `;

    // Interactive Stage Node Sync with Columns
    const stageNodes = sec.querySelectorAll('.topo-stage-node');
    const stageCols = sec.querySelectorAll('.topo-column');
    stageNodes.forEach(node => {
      const idx = node.dataset.stageIdx;
      node.addEventListener('mouseenter', () => {
        stageCols.forEach((col, ci) => {
          if (String(ci) === idx) col.classList.add('topo-col-highlighted');
          else col.classList.add('topo-col-dimmed');
        });
      });
      node.addEventListener('mouseleave', () => {
        stageCols.forEach(col => col.classList.remove('topo-col-highlighted', 'topo-col-dimmed'));
      });
      node.addEventListener('click', () => {
        const targetCol = sec.querySelector(`.topo-column[data-stage-col="${idx}"]`);
        if (targetCol) {
          targetCol.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  /* ─── BUILD SOLUTION ──────────────────────────────────────── */
  function buildSolution() {
    const c = CFG.content.solution[currentLang];
    const sec = $('#solution');
    const tLang = currentLang === 'id';

    const renderPath = (path) => `
      <div class="solution-card reveal">
        <div class="solution-badge">${path.badge}</div>
        <h3 class="solution-title">${path.title}</h3>
        <p class="solution-subtitle">${path.subtitle}</p>
        <div class="solution-flow" aria-label="Data flow">
          ${path.flow.map((step, i) => `
            <span class="solution-flow-step">${step}</span>
            ${i < path.flow.length - 1 ? '<span class="solution-flow-arrow" aria-hidden="true">→</span>' : ''}
          `).join('')}
        </div>
        <ul class="solution-benefits" aria-label="Benefits">
          ${path.benefits.map(b => `
            <li class="solution-benefit">
              <span class="benefit-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary-dark)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><polyline points="20 6 9 12 4 10"/></svg>
              </span>
              ${b}
            </li>
          `).join('')}
        </ul>
      </div>
    `;

    sec.innerHTML = `
      <div class="water-meter-watermark" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline">${c.headline}</h2>
          <p class="section-subheadline">${c.subheadline}</p>
        </div>
        <div class="solution-grid">
          ${renderPath(c.pathA)}
          ${renderPath(c.pathB)}
        </div>
        
        <!-- Hardware Showcase: Smart Water Meter Products -->
        <div class="hw-section-wrap reveal" id="hardware-showcase">
          <div class="hw-section-header">
            <span class="hw-section-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              ${tLang ? 'Katalog Perangkat Smart Water Meter' : 'Smart Water Meter Device Catalog'}
            </span>
            <h3 class="hw-section-title">${tLang ? 'Perangkat Keras IoT Terintegrasi AquaLinkOS' : 'AquaLinkOS Integrated IoT Hardware'}</h3>
            <p class="hw-section-desc">${tLang
        ? 'Pilihan meter air dan perangkat pendukung berstandar internasional (STS, MID, OIML R49, IP68) yang siap dihubungkan langsung ke platform untuk monitoring, automasi, dan penagihan cerdas.'
        : 'Enterprise-grade smart water meters and telemetry devices certified to STS, MID, OIML R49, and IP68, seamlessly connected to AquaLinkOS for automated telemetry and billing.'}</p>
          </div>

          <!-- Quick Navigation Tabs -->
          <div class="hw-tabs" id="hw-tabs" role="tablist" aria-label="${tLang ? 'Kategori Perangkat' : 'Device Categories'}">
            <button class="hw-tab active" data-tab="0" role="tab" aria-selected="true">
              <span class="hw-tab-dot">💧</span>
              <span>${tLang ? 'Meter Domestik' : 'Domestic Meter'}</span>
            </button>
            <button class="hw-tab" data-tab="1" role="tab" aria-selected="false">
              <span class="hw-tab-dot">🏭</span>
              <span>${tLang ? 'Industri & Bulk' : 'Industrial & Bulk'}</span>
            </button>
            <button class="hw-tab" data-tab="2" role="tab" aria-selected="false">
              <span class="hw-tab-dot">📡</span>
              <span>${tLang ? 'Terminal Data IoT' : 'Data Terminals'}</span>
            </button>
            <button class="hw-tab" data-tab="3" role="tab" aria-selected="false">
              <span class="hw-tab-dot">🔌</span>
              <span>${tLang ? 'Aksesori & CIU' : 'Accessories & CIU'}</span>
            </button>
            <button class="hw-tab" data-tab="4" role="tab" aria-selected="false">
              <span class="hw-tab-dot">🔄</span>
              <span>${tLang ? 'Retrofit MIU' : 'Retrofit MIU'}</span>
            </button>
          </div>

          <!-- Carousel Main Frame -->
          <div class="hw-carousel-wrap" id="hw-carousel-wrap">
            <div class="hw-carousel" id="hw-carousel" aria-label="${tLang ? 'Galeri Perangkat Smart Water Meter' : 'Smart Water Meter Device Gallery'}">
              <div class="hw-carousel-track" id="hw-carousel-track">

                <!-- Slide 0: Domestic Smart Meter -->
                <div class="hw-slide" data-slide="0" role="group" aria-label="1 / 5">
                  <div class="hw-slide-media">
                    <img src="assets/device-domestic-meter.jpg"
                      alt="Domestic Smart Water Meter Solutions by LAISON"
                      loading="lazy" draggable="false"/>
                    <div class="hw-slide-badge">${tLang ? 'METER DOMESTIK • AMR / AMI' : 'DOMESTIC • AMR / AMI'}</div>
                  </div>
                  <div class="hw-slide-content">
                    <div class="hw-content-main">
                      <span class="hw-content-counter">01 / 05 &bull; DOMESTIC SOLUTIONS</span>
                      <h4 class="hw-content-title">${tLang ? 'Smart Water Meter Domestik (DN15 – DN50)' : 'Domestic Water Meter Solutions (DN15 – DN50)'}</h4>
                      <p class="hw-content-desc">${tLang
        ? 'Meter air pintar ultrasonik & prabayar/pascabayar untuk pelanggan rumah tangga. Terhubung langsung ke AquaLinkOS melalui LoRaWAN atau NB-IoT dengan akurasi R400, transmisi periodik otomatis, deteksi kebocoran instan, dan masa pakai baterai 10+ tahun.'
        : 'Ultrasonic and smart STS prepaid/postpaid water metering for residential customers. Directly integrated into AquaLinkOS via LoRaWAN/NB-IoT for automated hourly readings, real-time leak alerts, and 10+ year battery endurance.'}</p>
                      <div class="hw-content-pills">
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#00E5FF"></span>${tLang ? 'Ultrasonik Presisi' : 'Ultrasonic Precision'}</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#10B981"></span>LoRaWAN / NB-IoT</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#F59E0B"></span>${tLang ? 'Prabayar STS & Pascabayar' : 'STS Prepaid & Postpaid'}</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#6366F1"></span>IP68 Submersible</span>
                      </div>
                    </div>
                    <div class="hw-content-specs">
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Ukuran Pipa' : 'Pipe Size'}</span>
                        <strong class="hw-spec-v">DN15 – DN50</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Masa Pakai Baterai' : 'Battery Life'}</span>
                        <strong class="hw-spec-v">10+ ${tLang ? 'Tahun (Li-SOCl2)' : 'Years'}</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Protokol IoT' : 'IoT Protocol'}</span>
                        <strong class="hw-spec-v">LoRa / NB-IoT / STS</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Proteksi & Standar' : 'Protection Standard'}</span>
                        <strong class="hw-spec-v">IP68 &bull; MID / OIML</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Slide 1: Industrial & Commercial Metering -->
                <div class="hw-slide" data-slide="1" role="group" aria-label="2 / 5">
                  <div class="hw-slide-media">
                    <img src="assets/device-industrial-meter.jpg"
                      alt="Industrial and Commercial Metering Solutions by LAISON"
                      loading="lazy" draggable="false"/>
                    <div class="hw-slide-badge">${tLang ? 'INDUSTRI • BULK METERING' : 'INDUSTRIAL • BULK METERING'}</div>
                  </div>
                  <div class="hw-slide-content">
                    <div class="hw-content-main">
                      <span class="hw-content-counter">02 / 05 &bull; INDUSTRIAL & COMMERCIAL</span>
                      <h4 class="hw-content-title">${tLang ? 'Meter Air Industri & Bulk Komersial (DN50 – DN300+)' : 'Industrial & Commercial Metering (DN50 – DN300+)'}</h4>
                      <p class="hw-content-desc">${tLang
        ? 'Pengukuran debit aliran besar berkecepatan tinggi menggunakan sensor Elektromagnetik (EMF) dan Ultrasonik industri. Dirancang khusus untuk kawasan industri, gedung komersial, dan jaringan distribusi pipa utama PDAM dengan ketahanan tekanan tinggi.'
        : 'High-capacity bulk flow measurement powered by electromagnetic (EMF) and industrial ultrasonic sensors. Tailored for industrial parks, commercial complexes, and municipal transmission mains with heavy-duty pressure tolerance.'}</p>
                      <div class="hw-content-pills">
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#00E5FF"></span>${tLang ? 'Bulk Metering Aliran Tinggi' : 'High-Flow Bulk Metering'}</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#10B981"></span>${tLang ? 'Akurasi Elektromagnetik' : 'Electromagnetic Accuracy'}</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#F59E0B"></span>Modbus / RS485 / 4-20mA</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#6366F1"></span>${tLang ? 'Telemetri Real-Time' : 'Real-Time Telemetry'}</span>
                      </div>
                    </div>
                    <div class="hw-content-specs">
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Ukuran Pipa' : 'Pipe Size'}</span>
                        <strong class="hw-spec-v">DN50 – DN300+</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Prinsip Kerja' : 'Measurement Principle'}</span>
                        <strong class="hw-spec-v">EMF / Bulk Ultrasonic</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Output Sinyal' : 'Signal Output'}</span>
                        <strong class="hw-spec-v">RS485 / 4-20mA / Pulse</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Proteksi Lingkungan' : 'Ingress Rating'}</span>
                        <strong class="hw-spec-v">IP68 Submersible</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Slide 2: Data Collection Terminals -->
                <div class="hw-slide" data-slide="2" role="group" aria-label="3 / 5">
                  <div class="hw-slide-media">
                    <img src="assets/device-data-terminals.jpg"
                      alt="Data Collection Terminals MDC DCU RTU LoRaWAN Gateway by LAISON"
                      loading="lazy" draggable="false"/>
                    <div class="hw-slide-badge">${tLang ? 'TERMINAL DATA • LORAWAN GATEWAY' : 'DATA TERMINALS • GATEWAY'}</div>
                  </div>
                  <div class="hw-slide-content">
                    <div class="hw-content-main">
                      <span class="hw-content-counter">03 / 05 &bull; TELEMETRY & GATEWAYS</span>
                      <h4 class="hw-content-title">${tLang ? 'Terminal Pengumpul Data IoT (Gateway, DCU, POS)' : 'IoT Data Collection Terminals (Gateway, DCU, POS)'}</h4>
                      <p class="hw-content-desc">${tLang
        ? 'Infrastruktur komunikasi telemetri lengkap yang mencakup Industrial LoRaWAN Gateway, Concentrator (DCU/RTU), Optical Reading Probe, serta Handheld POS untuk teknisi. Mengumpulkan sinyal dari ribuan meter air dan meneruskannya secara aman ke cloud AquaLinkOS.'
        : 'Comprehensive telemetry communication hardware including Industrial LoRaWAN Gateways, Concentrators (DCU/RTU), Optical Probes, and Rugged Handheld POS for meter readers. Reliably relays data from thousands of meters to the AquaLinkOS platform.'}</p>
                      <div class="hw-content-pills">
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#00E5FF"></span>Industrial LoRaWAN</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#10B981"></span>4G LTE / GPRS Uplink</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#F59E0B"></span>Handheld POS Lapangan</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#6366F1"></span>Enkripsi AES-128</span>
                      </div>
                    </div>
                    <div class="hw-content-specs">
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Perangkat Kunci' : 'Key Devices'}</span>
                        <strong class="hw-spec-v">MDC / DCU / Gateway / POS</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Kapasitas Node' : 'Node Capacity'}</span>
                        <strong class="hw-spec-v">>1.000 ${tLang ? 'Meter / Gateway' : 'Meters / GW'}</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Jaringan Uplink' : 'Uplink Network'}</span>
                        <strong class="hw-spec-v">4G LTE / Ethernet / LoRa</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Sistem Cloud' : 'Cloud Sync'}</span>
                        <strong class="hw-spec-v">AquaLinkOS API Ready</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Slide 3: Smart Meter Accessories -->
                <div class="hw-slide" data-slide="3" role="group" aria-label="4 / 5">
                  <div class="hw-slide-media">
                    <img src="assets/device-accessories.png"
                      alt="Smart Meter Accessories CIU IR Pad Solar Panel by LAISON"
                      loading="lazy" draggable="false"/>
                    <div class="hw-slide-badge">${tLang ? 'AKSESORI • SOLAR READY' : 'ACCESSORIES • SOLAR READY'}</div>
                  </div>
                  <div class="hw-slide-content">
                    <div class="hw-content-main">
                      <span class="hw-content-counter">04 / 05 &bull; ACCESSORIES & INTERFACE</span>
                      <h4 class="hw-content-title">${tLang ? 'Aksesori Lengkap & Kit Tenaga Mandiri' : 'Smart Meter Accessories & Solar Power Kits'}</h4>
                      <p class="hw-content-desc">${tLang
        ? 'Ekosistem aksesori lapangan lengkap: Keypad Customer Interface Unit (CIU) untuk input token STS di dalam rumah pelanggan, Infrared Optical Pad untuk konfigurasi cepat teknisi, serta Kit Panel Surya untuk daya mandiri di lokasi tanpa suplai listrik PLN.'
        : 'Complete field ecosystem: Customer Interface Unit (CIU) keypads for convenient in-home STS token entry, Infrared Optical Pads for swift on-site maintenance, and Solar Panel kits ensuring continuous power in off-grid deployments.'}</p>
                      <div class="hw-content-pills">
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#00E5FF"></span>CIU Keypad Display</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#10B981"></span>Infrared Optical Pad</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#F59E0B"></span>Solar Panel & Battery Kit</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#6366F1"></span>RF Wireless Repeater</span>
                      </div>
                    </div>
                    <div class="hw-content-specs">
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Antarmuka Pelanggan' : 'Customer Interface'}</span>
                        <strong class="hw-spec-v">CIU RF Wireless</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Daya Mandiri' : 'Autonomous Power'}</span>
                        <strong class="hw-spec-v">Solar Kit + Li-Battery</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Alat Konfigurasi' : 'Config Tool'}</span>
                        <strong class="hw-spec-v">Optical IR Pad USB/BT</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Kompatibilitas' : 'Compatibility'}</span>
                        <strong class="hw-spec-v">100% LAISON Series</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Slide 4: Pulse-Based Retrofit MIU -->
                <div class="hw-slide" data-slide="4" role="group" aria-label="5 / 5">
                  <div class="hw-slide-media">
                    <img src="assets/device-retrofit-miu.png"
                      alt="Pulse-Based Retrofit Smart Metering AquaLink MIU"
                      loading="lazy" draggable="false"/>
                    <div class="hw-slide-badge">${tLang ? 'RETROFIT • CLIP-ON IOT' : 'RETROFIT • CLIP-ON IOT'}</div>
                  </div>
                  <div class="hw-slide-content">
                    <div class="hw-content-main">
                      <span class="hw-content-counter">05 / 05 &bull; RETROFIT INNOVATION</span>
                      <h4 class="hw-content-title">${tLang ? 'Modul Retrofit Meter Mekanik (AquaLink MIU)' : 'Pulse-Based Retrofit Smart Metering (AquaLink MIU)'}</h4>
                      <p class="hw-content-desc">${tLang
        ? 'Tingkatkan ribuan meter air mekanik lama menjadi meter pintar IoT tanpa mengganti badan meter atau memotong pipa air. Sensor pulsa membaca putaran dial secara akurat dan memancarkan data debit ke platform AquaLinkOS via LoRaWAN/NB-IoT, menghemat biaya investasi CAPEX hingga 65%.'
        : 'Instantly upgrade existing mechanical meters into intelligent IoT meters without pipe cut or unit replacement. Optical/inductive pulse sensors accurately detect dial rotations and transmit telemetry to AquaLinkOS via LoRaWAN/NB-IoT, slashing CAPEX by up to 65%.'}</p>
                      <div class="hw-content-pills">
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#00E5FF"></span>Instalasi Clip-On Cepat</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#10B981"></span>LoRaWAN & NB-IoT</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#F59E0B"></span>Hemat CAPEX s/d 65%</span>
                        <span class="hw-pill"><span class="hw-pill-dot" style="background:#6366F1"></span>Baterai 8–10 Tahun</span>
                      </div>
                    </div>
                    <div class="hw-content-specs">
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Pilihan Tipe' : 'Module Options'}</span>
                        <strong class="hw-spec-v">Clip-On (DN Kecil) / MIU (Besar)</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Waktu Pasang' : 'Install Time'}</span>
                        <strong class="hw-spec-v">< 5 ${tLang ? 'Menit / Unit' : 'Mins / Unit'}</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Transmisi Nirkabel' : 'Wireless Link'}</span>
                        <strong class="hw-spec-v">LoRaWAN / NB-IoT</strong>
                      </div>
                      <div class="hw-spec-card">
                        <span class="hw-spec-k">${tLang ? 'Proteksi Air' : 'Waterproofing'}</span>
                        <strong class="hw-spec-v">IP68 Submersible</strong>
                      </div>
                    </div>
                  </div>
                </div>

              </div><!-- /hw-carousel-track -->
            </div><!-- /hw-carousel -->

            <!-- Navigation Buttons (Positioned over the media frame) -->
            <button class="hw-carousel-btn hw-carousel-btn--prev" id="hw-prev" aria-label="${tLang ? 'Sebelumnya' : 'Previous slide'}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button class="hw-carousel-btn hw-carousel-btn--next" id="hw-next" aria-label="${tLang ? 'Berikutnya' : 'Next slide'}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </button>

            <!-- Bottom Controller Bar -->
            <div class="hw-carousel-bottom">
              <div class="hw-slide-status" id="hw-slide-status">
                <span class="hw-status-num" id="hw-status-num">01</span>
                <span class="hw-status-sep">/</span>
                <span class="hw-status-total">05</span>
              </div>
              <div class="hw-carousel-dots" role="tablist" aria-label="${tLang ? 'Navigasi slide' : 'Slide navigation'}">
                ${[0, 1, 2, 3, 4].map(i => `
                  <button class="hw-carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}" role="tab" aria-selected="${i === 0}" aria-label="${tLang ? `Slide ${i + 1}` : `Slide ${i + 1}`}"></button>
                `).join('')}
              </div>
              <div class="hw-autoplay-indicator" id="hw-autoplay-indicator" title="${tLang ? 'Otomatis bergeser (jeda saat disentuh)' : 'Auto slide enabled (pauses on hover)'}">
                <span class="hw-indicator-dot"></span>
                <span class="hw-indicator-text">${tLang ? 'Auto Slide Aktif' : 'Auto-Slide Active'}</span>
              </div>
            </div>
          </div><!-- /hw-carousel-wrap -->
        </div><!-- /hw-section-wrap -->
      </div>
      ${waveDivider('#050B17', false)}
    `;

    // ── Hardware Showcase Carousel Logic ─────────────────────────
    (function initHwCarousel() {
      const track = sec.querySelector('#hw-carousel-track');
      const slides = sec.querySelectorAll('.hw-slide');
      const dots = sec.querySelectorAll('.hw-carousel-dot');
      const tabs = sec.querySelectorAll('.hw-tab');
      const btnPrev = sec.querySelector('#hw-prev');
      const btnNext = sec.querySelector('#hw-next');
      const statusNum = sec.querySelector('#hw-status-num');
      const carousel = sec.querySelector('#hw-carousel');
      const wrap = sec.querySelector('#hw-carousel-wrap');
      const total = slides.length;
      if (!track || !total) return;

      let current = 0;
      let timer = null;
      let dragStartX = 0;
      let isDragging = false;
      const INTERVAL = 5000;

      function goTo(idx) {
        current = (idx + total) % total;
        // Each slide represents 20% of the 500% flex track
        track.style.transform = `translate3d(-${current * 20}%, 0, 0)`;

        dots.forEach((d, i) => {
          d.classList.toggle('active', i === current);
          d.setAttribute('aria-selected', String(i === current));
        });

        tabs.forEach((t, i) => {
          t.classList.toggle('active', i === current);
          t.setAttribute('aria-selected', String(i === current));
        });

        if (statusNum) {
          statusNum.textContent = String(current + 1).padStart(2, '0');
        }
      }

      function next() { goTo(current + 1); }
      function prev() { goTo(current - 1); }

      function startTimer() {
        clearInterval(timer);
        timer = setInterval(next, INTERVAL);
      }
      function stopTimer() { clearInterval(timer); }

      btnPrev && btnPrev.addEventListener('click', (e) => { e.stopPropagation(); prev(); startTimer(); });
      btnNext && btnNext.addEventListener('click', (e) => { e.stopPropagation(); next(); startTimer(); });

      dots.forEach(d => {
        d.addEventListener('click', () => {
          goTo(Number(d.dataset.dot));
          startTimer();
        });
      });

      tabs.forEach(t => {
        t.addEventListener('click', () => {
          goTo(Number(t.dataset.tab));
          startTimer();
        });
      });

      carousel && carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { prev(); startTimer(); }
        if (e.key === 'ArrowRight') { next(); startTimer(); }
      });

      function onStart(e) {
        dragStartX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        isDragging = true;
        stopTimer();
      }
      function onEnd(e) {
        if (!isDragging) return;
        const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
        const delta = dragStartX - endX;
        if (Math.abs(delta) > 40) {
          delta > 0 ? next() : prev();
        }
        isDragging = false;
        startTimer();
      }

      track.addEventListener('mousedown', (e) => { e.preventDefault(); onStart(e); });
      window.addEventListener('mouseup', onEnd);
      track.addEventListener('touchstart', onStart, { passive: true });
      track.addEventListener('touchend', onEnd, { passive: true });

      wrap && wrap.addEventListener('mouseenter', stopTimer);
      wrap && wrap.addEventListener('mouseleave', startTimer);

      startTimer();
    })();
  }

  /* ─── BUILD CONNECTIVITY ──────────────────────────────────── */
  function buildConnectivity() {
    const c = CFG.content.connectivity[currentLang];
    const sec = $('#connectivity');
    const connIcons = ['wifi', 'signal', 'zap', 'signal'];

    sec.innerHTML = `
      <div class="water-meter-watermark water-meter-watermark--left" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline">${c.headline}</h2>
          <p class="section-subheadline">${c.subheadline}</p>
        </div>
        <div class="connectivity-grid">
          ${c.cards.map((card, i) => `
            <div class="connectivity-card reveal reveal-delay-${i + 1}" role="article">
              <div class="signal-ring-wrapper" aria-hidden="true">
                <div class="signal-ring"></div>
                <div class="signal-ring"></div>
                <div class="signal-ring"></div>
                <div class="connectivity-icon-wrapper" style="position:relative;z-index:1;margin:0;width:40px;height:40px;left:50%;top:50%;transform:translate(-50%,-50%);position:absolute">
                  ${svgIcon(connIcons[i])}
                </div>
              </div>
              <div class="connectivity-tech">${card.tech}</div>
              <div class="connectivity-title">${card.title}</div>
              <p class="connectivity-desc">${card.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
      ${waveDivider('#FFFFFF', false)}
    `;
  }

  /* ─── BUILD PLATFORM ──────────────────────────────────────── */
  function buildPlatform() {
    const c = CFG.content.platform[currentLang];
    const sec = $('#platform');

    const chartBars = [45, 70, 55, 85, 60, 90, 75].map(h =>
      `<div class="chart-bar" style="height:${h}px" role="img" aria-label="${h}% bar"></div>`
    ).join('');

    const mockVisuals = {
      monitoring: `
        <div class="platform-mock-header"><span class="mock-dot mock-dot--red"></span><span class="mock-dot mock-dot--yellow"></span><span class="mock-dot mock-dot--green"></span></div>
        <div class="mock-stat-label" style="color:rgba(255,255,255,0.55);font-size:0.75rem;margin-bottom:8px">Water Utility Flow SCADA — Illustrative Data</div>
        <div class="platform-mock-chart" aria-hidden="true">${chartBars}</div>
        <div class="platform-mock-grid" aria-hidden="true">
          <div class="mock-stat"><div class="mock-stat-label">Active Meters</div><div class="mock-stat-value">1,420</div></div>
          <div class="mock-stat"><div class="mock-stat-label">Online Status</div><div class="mock-stat-value">99.8%</div></div>
          <div class="mock-stat"><div class="mock-stat-label">Leak Alerts</div><div class="mock-stat-value">0 Active</div></div>
          <div class="mock-stat"><div class="mock-stat-label">DMA Zones</div><div class="mock-stat-value">12 Zones</div></div>
        </div>`,
      billing: `
        <div class="platform-mock-header"><span class="mock-dot mock-dot--red"></span><span class="mock-dot mock-dot--yellow"></span><span class="mock-dot mock-dot--green"></span></div>
        <div class="mock-stat-label" style="color:rgba(255,255,255,0.55);font-size:0.75rem;margin-bottom:12px">Billing Cycle AMR Sync — Illustrative Data</div>
        ${[94, 88, 76, 92].map((w, i) => `
          <div style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:rgba(255,255,255,0.6);margin-bottom:4px">
              <span>District Zone ${String.fromCharCode(65 + i)}</span><span>${w}%</span>
            </div>
            <div class="platform-mock-bar"><div class="platform-mock-fill" style="width:${w}%"></div></div>
          </div>`).join('')}`,
      alarm: `
        <div class="platform-mock-header"><span class="mock-dot mock-dot--red"></span><span class="mock-dot mock-dot--yellow"></span><span class="mock-dot mock-dot--green"></span></div>
        <div class="mock-stat-label" style="color:rgba(255,255,255,0.55);font-size:0.75rem;margin-bottom:12px">Event Telemetry Log — Illustrative Data</div>
        ${[
          { col: '#ef4444', type: 'Burst Flow Alert', meter: 'Zone 3 #1234' },
          { col: '#f59e0b', type: 'Reverse Flow Warning', meter: 'Tenant #5678' },
          { col: '#00E5FF', type: 'Low Battery Telemetry', meter: 'Sensor #9012' },
          { col: '#22c55e', type: 'Pressure Normalized', meter: 'Main #3456' },
        ].map(e => `
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.08)">
            <span style="width:8px;height:8px;border-radius:50%;background:${e.col};box-shadow:0 0 6px ${e.col};flex-shrink:0"></span>
            <span style="flex:1;font-size:0.78rem;color:rgba(255,255,255,0.75)">${e.type}</span>
            <span style="font-size:0.72rem;color:rgba(0,229,255,0.7)">${e.meter}</span>
          </div>`).join('')}`,
      analytics: `
        <div class="platform-mock-header"><span class="mock-dot mock-dot--red"></span><span class="mock-dot mock-dot--yellow"></span><span class="mock-dot mock-dot--green"></span></div>
        <div class="mock-stat-label" style="color:rgba(255,255,255,0.55);font-size:0.75rem;margin-bottom:8px">NRW Water Balance Analytics — Illustrative Data</div>
        <div class="platform-mock-chart" aria-hidden="true">${[35, 55, 42, 70, 52, 82, 68].map(h => `<div class="chart-bar" style="height:${h}px;background:rgba(0,229,255,0.25);border-color:rgba(0,229,255,0.4)"></div>`).join('')}</div>
        <div class="platform-mock-grid" aria-hidden="true">
          <div class="mock-stat"><div class="mock-stat-label">Total Volume Distributed</div><div class="mock-stat-value" style="color:#00E5FF">124,730 m³</div></div>
          <div class="mock-stat"><div class="mock-stat-label">NRW Loss Reduction</div><div class="mock-stat-value" style="color:#22c55e">-8.4%</div></div>
        </div>`,
    };

    sec.innerHTML = `
      <div class="water-meter-watermark water-meter-watermark--left" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline">${c.headline}</h2>
          <p class="section-subheadline">${c.subheadline}</p>
        </div>
        <div class="platform-tabs" role="tablist" aria-label="Platform modules">
          ${c.tabs.map((tab, i) => `
            <button class="platform-tab${i === 0 ? ' active' : ''}"
              id="tab-${tab.id}"
              role="tab"
              aria-selected="${i === 0}"
              aria-controls="panel-${tab.id}"
              data-tab="${tab.id}">
              ${tab.label}
            </button>
          `).join('')}
        </div>
        ${c.tabs.map((tab, i) => `
          <div class="platform-panel${i === 0 ? ' active' : ''}"
            id="panel-${tab.id}"
            role="tabpanel"
            aria-labelledby="tab-${tab.id}">
            <div class="panel-content">
              <h3 class="panel-content-title">${tab.title}</h3>
              <p class="panel-content-desc">${tab.desc}</p>
              <ul class="panel-features" aria-label="Features">
                ${tab.features.map(f => `
                  <li class="panel-feature">
                    <span class="feature-bullet" aria-hidden="true"></span>
                    ${f}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="platform-visual" aria-label="${tab.title} dashboard illustration">
              ${mockVisuals[tab.id] || ''}
              <div class="platform-mock-demo-note" aria-label="Disclaimer">Ilustrasi / Illustrative — Data bukan data nyata</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Tab switching
    $$('.platform-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.platform-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        $$('.platform-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        $(`#panel-${tab.dataset.tab}`).classList.add('active');
      });
    });
  }

  /* ─── BUILD NRW ───────────────────────────────────────────── */
  function buildNRW() {
    const c = CFG.content.nrw[currentLang];
    const sec = $('#use-case');

    sec.innerHTML = `
      <div class="water-meter-watermark" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline">${c.headline}</h2>
          <p class="section-subheadline">${c.subheadline}</p>
        </div>
        <div class="nrw-flow reveal" role="list" aria-label="Detection flow">
          ${c.flow.map((step, i) => `
            <div class="nrw-step" role="listitem">
              <div class="nrw-step-bubble" aria-hidden="true">${i + 1}</div>
              <div class="nrw-step-label">${step}</div>
            </div>
            ${i < c.flow.length - 1 ? '<div class="nrw-connector" aria-hidden="true"></div>' : ''}
          `).join('')}
        </div>
        <div class="nrw-note reveal" role="note">
          <span class="nrw-note-icon" aria-hidden="true">${svgIcon('info')}</span>
          ${c.note}
        </div>
        <div class="use-case-tabs" role="tablist" aria-label="Use case examples">
          ${c.usecases.map((uc, i) => `
            <button class="use-case-tab${i === 0 ? ' active' : ''}"
              role="tab"
              aria-selected="${i === 0}"
              aria-controls="uc-panel-${uc.id}"
              id="uc-tab-${uc.id}"
              data-uc="${uc.id}">
              ${uc.label}
            </button>
          `).join('')}
        </div>
        ${c.usecases.map((uc, i) => `
          <div class="use-case-panel${i === 0 ? ' active' : ''}"
            id="uc-panel-${uc.id}"
            role="tabpanel"
            aria-labelledby="uc-tab-${uc.id}">
            <div class="use-case-content">
              <h3 class="use-case-title">${uc.title}</h3>
              <p class="use-case-desc">${uc.desc}</p>
              <div class="use-case-alert" role="alert">
                <span class="alert-icon" aria-hidden="true">⚠</span>
                <span>${uc.alert}</span>
              </div>
            </div>
            <div class="use-case-flow-visual" aria-label="Detection flow steps">
              ${c.flow.map((step, si) => `
                <div class="uc-flow-step">
                  <div class="uc-step-num" aria-hidden="true">${si + 1}</div>
                  <div class="uc-step-label${si < 3 ? ' active' : ''}">${step}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      ${waveDivider('#070F1E', false)}
    `;

    // Tab switching
    $$('.use-case-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.use-case-tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
        $$('.use-case-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        $(`#uc-panel-${tab.dataset.uc}`).classList.add('active');
      });
    });
  }

  /* ─── BUILD INDUSTRIAL ────────────────────────────────────── */
  function buildIndustrial() {
    const c = CFG.content.industrial[currentLang];
    const sec = $('#industrial');

    sec.innerHTML = `
      <div class="water-meter-watermark water-meter-watermark--left" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline">${c.headline}</h2>
          <p class="section-subheadline">${c.subheadline}</p>
        </div>
        <div class="industrial-inner">
          <div class="industrial-image reveal-left">
            <img src="assets/industrial-estate.jpg" alt="Isometric illustration of industrial estate with smart water meter network connecting all tenant buildings" loading="lazy" width="700" height="394"/>
          </div>
          <div class="reveal-right">
            <div class="industrial-flow" aria-label="Solution flow">
              ${c.flow.map((step, i) => `
                <span class="ind-flow-step">${step}</span>
                ${i < c.flow.length - 1 ? '<span class="ind-flow-arrow" aria-hidden="true">→</span>' : ''}
              `).join('')}
            </div>
            <div class="industrial-values">
              ${c.values.map(v => `
                <div class="ind-value">
                  <div class="ind-value-icon" aria-hidden="true">${svgIcon(v.icon)}</div>
                  <div>
                    <div class="ind-value-title">${v.title}</div>
                    <div class="ind-value-desc">${v.desc}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      ${waveDivider('#FFFFFF', false)}
    `;
  }

  /* ─── BUILD VALUE PROP ────────────────────────────────────── */
  function buildValue() {
    const c = CFG.content.value[currentLang];
    const icons = ['⚙️', '📊', '💳', '🔮'];
    const sec = $('#value-prop');

    sec.innerHTML = `
      <div class="water-meter-watermark" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal" style="text-align:center">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline" style="margin:0 auto">${c.headline}</h2>
          <p class="section-subheadline" style="margin:16px auto 0">${c.subheadline}</p>
        </div>
        <div class="value-grid">
          ${c.cards.map((card, i) => `
            <div class="value-card reveal reveal-delay-${i + 1}" role="article">
              <div class="value-icon-ring" aria-hidden="true">${icons[i]}</div>
              <h3 class="value-title">${card.title}</h3>
              <p class="value-desc">${card.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
      ${waveDivider('#050B17', false)}
    `;
  }

  /* ─── BUILD ROADMAP ───────────────────────────────────────── */
  function buildRoadmap() {
    const c = CFG.content.roadmap[currentLang];
    const sec = $('#roadmap');

    sec.innerHTML = `
      <div class="water-meter-watermark water-meter-watermark--left" aria-hidden="true"></div>
      <div class="container">
        <div class="section-header reveal" style="text-align:center">
          <span class="section-label">${c.sectionLabel}</span>
          <h2 class="section-headline" style="margin:0 auto">${c.headline}</h2>
          <p class="section-subheadline" style="margin:16px auto 0">${c.subheadline}</p>
        </div>
        <div class="roadmap-track">
          <div class="roadmap-line" aria-hidden="true"><div class="roadmap-line-progress" id="roadmap-progress"></div></div>
          <div class="roadmap-steps" role="list">
            ${c.steps.map((step, i) => `
              <div class="roadmap-step" role="listitem" data-step="${i}">
                <div class="roadmap-bubble" aria-hidden="true">${step.num}</div>
                <h3 class="roadmap-step-title">${step.title}</h3>
                <p class="roadmap-step-desc">${step.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      ${waveDivider('#F0F9FF', false)}
    `;

    // Animate roadmap when in view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $$('.roadmap-step').forEach((step, i) => {
            setTimeout(() => step.classList.add('visible'), i * 200);
          });
          const progress = $('#roadmap-progress');
          if (progress) setTimeout(() => progress.style.width = '100%', 100);
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    const track = $('.roadmap-track');
    if (track) observer.observe(track);
  }

  /* ─── BUILD ABOUT ─────────────────────────────────────────── */
  function buildAbout() {
    const c = CFG.content.about[currentLang];
    const sec = $('#about');

    sec.innerHTML = `
      <div class="water-meter-watermark" aria-hidden="true"></div>
      <div class="container">
        <div class="about-inner">
          <div class="reveal-left">
            <span class="section-label">${c.sectionLabel}</span>
            <h2 class="section-headline">${c.headline}</h2>
            <p class="section-subheadline" style="max-width:100%">${c.desc}</p>
            <p class="about-targets-title">${c.targetTitle}</p>
            <ul class="about-targets" aria-label="${c.targetTitle}">
              ${c.targets.map(t => `
                <li class="about-target">
                  <span class="target-dot" aria-hidden="true"></span>
                  ${t}
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="about-visual reveal-right">
            <div class="about-logo-big">AquaLink<span class="logo-os">OS</span></div>
            <p class="about-tagline">${CFG.content.footer[currentLang].tagline}</p>
            <div class="about-tech-stack" role="list" aria-label="Technologies">
              ${['LoRaWAN', 'NB-IoT', '4G Cat.1', 'GPRS', 'HDMS', 'AMR/AMI', 'IoT'].map(t =>
      `<span class="tech-tag" role="listitem">${t}</span>`
    ).join('')}
            </div>
          </div>
        </div>
      </div>
      ${waveDivider('#070F1E', false)}
    `;
  }

  /* ─── BUILD CONTACT ───────────────────────────────────────── */
  function buildContact() {
    const c = CFG.content.contact[currentLang];
    const contact = CFG.contact;
    const brochure = CFG.brochure;
    const sec = $('#contact');

    sec.innerHTML = `
      <div class="water-meter-watermark water-meter-watermark--left" aria-hidden="true"></div>
      <div class="container">
        <div class="contact-inner">
          <div class="reveal-left">
            <span class="section-label">${c.sectionLabel}</span>
            <h2 class="section-headline">${c.headline}</h2>
            <p class="section-subheadline" style="max-width:100%">${c.subheadline}</p>
            <div class="contact-brochure">
              <div class="brochure-label">📄 ${c.brochureBtn}</div>
              <a href="${brochure.url}" class="btn btn-outline" id="brochure-btn"
                ${brochure.url !== '#' ? `download="${brochure.filename}"` : ''}
                aria-label="${c.brochureBtn}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                ${c.brochureBtn}
              </a>
            </div>
            <div class="contact-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:${contact.email}" style="color:inherit">${contact.email}</a>
            </div>
            <div class="contact-detail">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.18 2 2 0 0 1 3.59 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.07-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:${contact.phone}" style="color:inherit">${contact.phone}</a>
            </div>
          </div>
          <div class="contact-form-wrapper reveal-right">
            <form id="contact-form" novalidate aria-label="Contact form">
              <div class="form-grid">
                ${buildFormField('name', c.fields.name, 'text', true)}
                ${buildFormField('company', c.fields.company, 'text', true)}
                ${buildFormField('role', c.fields.role, 'text', false)}
                ${buildFormField('email', c.fields.email, 'email', true)}
                ${buildFormField('phone', c.fields.phone, 'tel', false)}
                ${buildSelectField('project-type', c.fields.projectType, c.projectTypes, true)}
              </div>
              <div class="form-submit-row">
                <button type="submit" class="btn btn-primary" id="form-submit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  ${c.submitBtn}
                </button>
              </div>
              <div class="form-feedback" id="form-feedback" role="alert" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    `;

    initForm();
  }

  function buildFormField(name, field, type, required) {
    const id = `field-${name}`;
    return `
      <div class="form-field" id="wrap-${name}">
        <label class="form-label" for="${id}">
          ${field.label}${required ? '<span class="required" aria-hidden="true">*</span>' : ''}
        </label>
        <input
          class="form-input"
          type="${type}"
          id="${id}"
          name="${name}"
          placeholder="${field.placeholder}"
          ${required ? 'required aria-required="true"' : ''}
          autocomplete="${type === 'email' ? 'email' : type === 'tel' ? 'tel' : name === 'name' ? 'name' : name === 'company' ? 'organization' : 'off'}"
        />
        <div class="form-error-msg" id="err-${name}" role="alert" aria-live="polite"></div>
      </div>
    `;
  }

  function buildSelectField(name, field, options, required) {
    const id = `field-${name}`;
    return `
      <div class="form-field form-field--full" id="wrap-${name}">
        <label class="form-label" for="${id}">
          ${field.label}${required ? '<span class="required" aria-hidden="true">*</span>' : ''}
        </label>
        <select class="form-select" id="${id}" name="${name}" ${required ? 'required aria-required="true"' : ''}>
          <option value="" disabled selected>${field.placeholder}</option>
          ${options.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
        </select>
        <div class="form-error-msg" id="err-${name}" role="alert" aria-live="polite"></div>
      </div>
    `;
  }

  /* ─── FORM VALIDATION & SUBMISSION ───────────────────────── */
  function initForm() {
    const form = $('#contact-form');
    if (!form) return;

    const c = CFG.content.contact[currentLang];
    const formCfg = CFG.form;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const valid = validateForm(form, c.validation);
      if (!valid) return;

      // Check endpoint config
      if (!formCfg.endpoint) {
        showFeedback('warning', `⚠ ${c.configMsg}`);
        return;
      }

      const submitBtn = $('#form-submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = '...';

      try {
        const data = new FormData(form);

        // Web3Forms support
        if (formCfg.web3formsKey) {
          data.append('access_key', formCfg.web3formsKey);
        }

        const resp = await fetch(formCfg.endpoint, {
          method: formCfg.method || 'POST',
          body: data,
          headers: { 'Accept': 'application/json' },
        });

        if (resp.ok) {
          showFeedback('success', `✓ ${c.successMsg}`);
          form.reset();
        } else {
          showFeedback('error', `✗ ${c.errorMsg}`);
        }
      } catch (_) {
        showFeedback('error', `✗ ${c.errorMsg}`);
      } finally {
        const sb = $('#form-submit-btn');
        if (sb) {
          sb.disabled = false;
          sb.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> ${c.submitBtn}`;
        }
      }
    });

    // Live validation
    $$('.form-input, .form-select', form).forEach(input => {
      input.addEventListener('blur', () => validateField(input, CFG.content.contact[currentLang].validation));
      input.addEventListener('input', () => clearFieldError(input));
    });
  }

  function validateForm(form, msgs) {
    let valid = true;
    $$('.form-input[required], .form-select[required]', form).forEach(input => {
      if (!validateField(input, msgs)) valid = false;
    });
    return valid;
  }

  function validateField(input, msgs) {
    const val = input.value.trim();
    const errEl = $(`#err-${input.name || input.id.replace('field-', '')}`);

    clearFieldError(input);

    if (input.required && !val) {
      setFieldError(input, errEl, msgs.required);
      return false;
    }
    if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setFieldError(input, errEl, msgs.email);
      return false;
    }
    if (input.type === 'tel' && val && !/^[\+\d\s\-\(\)]{7,20}$/.test(val)) {
      setFieldError(input, errEl, msgs.phone);
      return false;
    }
    return true;
  }

  function setFieldError(input, errEl, msg) {
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
    if (errEl) errEl.textContent = msg;
  }

  function clearFieldError(input) {
    input.classList.remove('error');
    input.setAttribute('aria-invalid', 'false');
    const name = input.name || input.id.replace('field-', '');
    const errEl = $(`#err-${name}`);
    if (errEl) errEl.textContent = '';
  }

  function showFeedback(type, msg) {
    const fb = $('#form-feedback');
    if (!fb) return;
    fb.className = `form-feedback show ${type}`;
    fb.innerHTML = msg;
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ─── BUILD FOOTER ────────────────────────────────────────── */
  function buildFooter() {
    const c = CFG.content.footer[currentLang];
    const footer = $('footer');
    const navLinks = CFG.nav[currentLang];

    footer.innerHTML = `
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <div class="footer-logo">AquaLink<span class="logo-os">OS</span></div>
            <p class="footer-tagline">${c.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <ul style="display:flex;flex-direction:column;gap:8px">
              ${navLinks.map(l => `
                <li><a href="${l.href}" style="font-size:0.875rem;color:rgba(255,255,255,0.45);transition:color 0.2s" 
                  onmouseover="this.style.color='#38BDF8'" onmouseout="this.style.color='rgba(255,255,255,0.45)'">${l.label}</a></li>
              `).join('')}
            </ul>
          </nav>
          <div>
            <p style="font-size:0.8rem;color:rgba(255,255,255,0.4);margin-bottom:8px">Contact</p>
            <a href="mailto:${CFG.contact.email}" style="font-size:0.85rem;color:rgba(255,255,255,0.5)">${CFG.contact.email}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright">${c.copyright}</p>
          <p class="footer-disclaimer">${c.disclaimer}</p>
        </div>
      </div>
    `;
  }

  /* ─── LANGUAGE TOGGLE ─────────────────────────────────────── */
  function toggleLang() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    rebuildAll();
    document.documentElement.lang = currentLang;
    // Update title/meta per lang
    updateMeta();
  }

  function updateMeta() {
    const titles = {
      id: 'AquaLinkOS – Smart Water Management Platform untuk PDAM dan Kawasan Industri',
      en: 'AquaLinkOS – Smart Water Management Platform for Water Utilities and Industrial Estates',
    };
    const descs = {
      id: 'AquaLinkOS menghubungkan smart meter, retrofit IoT, dan platform manajemen digital untuk membantu PDAM dan pengelola kawasan industri membangun Smart Water Utility.',
      en: 'AquaLinkOS connects smart meters, IoT retrofit solutions, and digital management platforms to help water utilities and industrial estate managers build a Smart Water Utility.',
    };
    document.title = titles[currentLang];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descs[currentLang]);
  }

  /* ─── REBUILD ALL ─────────────────────────────────────────── */
  function rebuildAll() {
    buildNav();
    buildHero();
    buildKeyMessage();
    buildChallenges();
    buildEcosystem();
    buildSolution();
    buildConnectivity();
    buildPlatform();
    buildNRW();
    buildIndustrial();
    buildValue();
    buildRoadmap();
    buildAbout();
    buildContact();
    buildFooter();
    // Re-observe
    initRevealObserver();
    updateMeta();
  }

  /* ─── REVEAL OBSERVER ─────────────────────────────────────── */
  function initRevealObserver() {
    const revealEls = $$('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ─── SCROLL TO TOP ───────────────────────────────────────── */
  function initScrollTop() {
    const btn = $('#scroll-top');
    if (btn) {
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
  }

  /* ─── SMOOTH NAV LINKS ────────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  /* ─── INTRO SPLASH DISMISS HANDLER ────────────────────────── */
  function initIntroAnimation() {
    const overlay = document.getElementById('site-intro-overlay');
    if (!overlay) return;

    const dismiss = () => {
      overlay.classList.add('dismissed');
      setTimeout(() => {
        try { overlay.remove(); } catch (e) { }
      }, 450);
    };

    overlay.addEventListener('click', dismiss);
    // Automatically cleanup after CSS animation completes (~2.2s)
    setTimeout(dismiss, 2200);
  }

  /* ─── DYNAMIC NAVBAR SCROLL, PROGRESS & SCROLLSPY ─────────── */
  let navbarScrollInitialized = false;
  function initNavbarScroll() {
    if (navbarScrollInitialized) return;
    navbarScrollInitialized = true;

    let ticking = false;
    let scrollTimer = null;
    const navbar = $('#navbar');
    const sections = ['#solution', '#platform', '#use-case', '#roadmap', '#about', '#contact'];

    // Handle window resize to keep indicator aligned
    window.addEventListener('resize', () => {
      if (window.__updateNavIndicator) window.__updateNavIndicator();
    }, { passive: true });

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Active scrolling momentum class
          if (navbar) {
            navbar.classList.add('nav-scrolling');
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
              navbar.classList.remove('nav-scrolling');
            }, 140);
          }

          // Scrolled state (for minimalist island morphing)
          const isScrolled = scrollY > 35;
          if (navbar) {
            const wasScrolled = navbar.classList.contains('scrolled');
            navbar.classList.toggle('scrolled', isScrolled);
            navbar.classList.toggle('nav--at-top', !isScrolled);
            if (wasScrolled !== isScrolled && window.__updateNavIndicator) {
              setTimeout(window.__updateNavIndicator, 200);
            }
          }

          // Scroll to top button visibility
          const scrollTopBtn = $('#scroll-top');
          if (scrollTopBtn) {
            scrollTopBtn.classList.toggle('visible', scrollY > 400);
          }

          // Dynamic reading progress bar
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            const progress = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
            const fill = $('#nav-progress-fill');
            if (fill) fill.style.width = progress + '%';
          }

          // Dynamic ScrollSpy
          let activeId = '';
          if (scrollY > 100) {
            const scrollPos = scrollY + 180;
            sections.forEach(id => {
              const sec = $(id);
              if (sec && sec.offsetTop <= scrollPos) {
                activeId = id;
              }
            });
          }
          if (navbar) {
            let activeChanged = false;
            $$('.nav-links a', navbar).forEach(link => {
              const shouldBeActive = link.getAttribute('href') === activeId;
              if (link.classList.contains('active') !== shouldBeActive) {
                link.classList.toggle('active', shouldBeActive);
                activeChanged = true;
              }
            });
            if (activeChanged && window.__updateNavIndicator) {
              window.__updateNavIndicator();
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ─── INIT ────────────────────────────────────────────────── */
  function initApp() {
    rebuildAll();
    initScrollTop();
    initSmoothScroll();
    initIntroAnimation();
    initNavbarScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
