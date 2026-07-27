"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { type Locale, siteContent } from "./content";

const PHONE_HREF = "tel:+34644859837";
const EMAIL_HREF =
  "mailto:oscar.daganzo@gmail.com?subject=Consulta%20de%20dise%C3%B1o%20t%C3%A9cnico";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("es");
  const content = siteContent[locale];
  const whatsappMessage =
    locale === "es"
      ? "Hola Óscar, he visto tu web y me gustaría hablar de un proyecto."
      : "Hola Òscar, he vist el teu web i m'agradaria parlar d'un projecte.";
  const whatsappUrl = `https://wa.me/34644859837?text=${encodeURIComponent(
    whatsappMessage,
  )}`;
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {locale === "es" ? "Saltar al contenido" : "Saltar al contingut"}
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Oscar Daganzo, inicio">
          <span className="brand-mark" aria-hidden="true">
            OD
          </span>
          <span className="brand-copy">
            <strong>Oscar Daganzo</strong>
            <small>{content.footer.role}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#services">{content.nav.services}</a>
          <a href="#sustainability">{content.nav.approach}</a>
          <a href="#deliverables">{content.nav.deliverables}</a>
          <a href="#process">{content.nav.process}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Seleccionar idioma">
            <button
              type="button"
              aria-pressed={locale === "es"}
              onClick={() => setLocale("es")}
            >
              ES
            </button>
            <button
              type="button"
              aria-pressed={locale === "ca"}
              onClick={() => setLocale("ca")}
            >
              CA
            </button>
          </div>
          <a
            className="header-contact"
            href="#contact"
          >
            {content.nav.contact}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {content.hero.eyebrow}
            </p>
            <h1>
              {content.hero.titleLead}{" "}
              <em>{content.hero.titleAccent}</em>
              <br />
              {content.hero.titleSecond}
            </h1>
            <p className="hero-body">{content.hero.body}</p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {content.hero.primaryCta}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#services">
                {content.hero.secondaryCta}
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <p className="availability">
              <span aria-hidden="true" />
              {content.hero.availability}
            </p>
          </div>

          <div
            className="story-world"
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty(
                "--pointer-x",
                `${((event.clientX - rect.left) / rect.width - 0.5) * 2}`,
              );
              event.currentTarget.style.setProperty(
                "--pointer-y",
                `${((event.clientY - rect.top) / rect.height - 0.5) * 2}`,
              );
            }}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--pointer-x", "0");
              event.currentTarget.style.setProperty("--pointer-y", "0");
            }}
          >
            <div className="world-thread thread-one" aria-hidden="true" />
            <div className="world-thread thread-two" aria-hidden="true" />

            <figure className="portrait-piece">
              <span className="paper-tape tape-top" aria-hidden="true" />
              <span className="paper-tape tape-side" aria-hidden="true" />
              <div className="portrait-window">
                <img
                  src="/media/oscar-daganzo.webp"
                  width="900"
                  height="900"
                  alt={
                    locale === "es"
                      ? "Oscar Daganzo, diseñador técnico"
                      : "Oscar Daganzo, dissenyador tècnic"
                  }
                />
              </div>
              <figcaption>
                <span>Oscar Daganzo</span>
                <small>{content.footer.role}</small>
              </figcaption>
            </figure>

            <div className="planet-piece">
              <span className="planet-label">{content.visuals.motionStatus}</span>
              <picture>
                <source
                  media="(prefers-reduced-motion: reduce)"
                  srcSet="/media/earth-cycle-still.webp"
                />
                <img
                  src="/media/earth-cycle.gif"
                  width="480"
                  height="480"
                  alt={content.visuals.earthAlt}
                />
              </picture>
            </div>

            <div className="eco-sticker sticker-leaf" aria-hidden="true">
              <span>↗</span>
              <strong>RE·USE</strong>
            </div>
            <div className="eco-sticker sticker-idea" aria-hidden="true">
              <span>✦</span>
              <strong>IDEA</strong>
            </div>
            <div className="eco-sticker sticker-detail" aria-hidden="true">
              <span>⌁</span>
              <strong>DETAIL</strong>
            </div>
            <div className="scribble scribble-one" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="world-note">
              <span aria-hidden="true">✎</span>
              {content.blueprint.note}
            </p>
          </div>
        </section>

        <section className="principles" aria-label="Principios de trabajo">
          {content.principles.map((principle, index) => (
            <div key={principle}>
              <span>0{index + 1}</span>
              <p>{principle}</p>
            </div>
          ))}
        </section>

        <section
          className="eco-manifesto"
          aria-labelledby="eco-manifesto-title"
        >
          <div className="eco-manifesto-heading">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {content.visuals.manifestoEyebrow}
            </p>
            <p>{content.visuals.manifestoCaption}</p>
          </div>
          <h2 className="sr-only" id="eco-manifesto-title">
            {content.visuals.manifestoTitle}
          </h2>
          <figure className="eco-manifesto-frame">
            <img
              src="/media/salvamos-arboles.webp"
              width="1800"
              height="599"
              loading="lazy"
              alt={content.visuals.manifestoAlt}
            />
            <figcaption>
              <span>OD / ECO 01</span>
              <span>{content.visuals.manifestoFigureCaption}</span>
            </figcaption>
          </figure>
        </section>

        <section className="section services-section" id="services">
          <div className="section-craft section-craft-services" aria-hidden="true">
            <span className="craft-sticker craft-sticker-round">ECO</span>
            <span className="craft-sticker craft-sticker-ticket">PLAN / 01</span>
            <span className="craft-pencil">✎</span>
            <span className="craft-stitch craft-stitch-long" />
          </div>
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.services.eyebrow}</p>
              <h2>{content.services.title}</h2>
            </div>
            <p>{content.services.intro}</p>
          </div>

          <div className="services-grid">
            {content.services.items.map((item, index) => (
              <article
                className={`service-card service-card-${index + 1}`}
                key={item.number}
              >
                <div className="service-card-top">
                  <span>{item.number}</span>
                  <span className="service-sticker" aria-hidden="true">
                    {["✎", "↻", "⌗", "✓"][index]}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="sustainability-section"
          id="sustainability"
          aria-labelledby="sustainability-title"
        >
          <div className="sustainability-leaf leaf-one" aria-hidden="true" />
          <div className="sustainability-leaf leaf-two" aria-hidden="true" />

          <div className="sustainability-intro">
            <div>
              <p className="eyebrow eyebrow-light">
                {content.sustainability.eyebrow}
              </p>
              <h2 id="sustainability-title">
                {content.sustainability.title}
              </h2>
            </div>
            <div>
              <p>{content.sustainability.intro}</p>
              <blockquote>{content.sustainability.quote}</blockquote>
            </div>
          </div>

          <div className="circular-loop">
            {content.sustainability.loop.map((item, index) => (
              <article className="loop-item" key={item.number}>
                <div className="loop-number">
                  <span>{item.number}</span>
                  {index < content.sustainability.loop.length - 1 && (
                    <span className="loop-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section deliverables-section" id="deliverables">
          <div
            className="section-craft section-craft-deliverables"
            aria-hidden="true"
          >
            <span className="craft-sticker craft-sticker-file">DWG</span>
            <span className="craft-sticker craft-sticker-file craft-file-two">
              DXF
            </span>
            <span className="craft-sticker craft-sticker-check">✓ READY</span>
            <span className="craft-tape craft-tape-deliverables" />
          </div>
          <div className="section-heading deliverables-heading">
            <div>
              <p className="eyebrow">{content.deliverables.eyebrow}</p>
              <h2>{content.deliverables.title}</h2>
            </div>
            <p>{content.deliverables.intro}</p>
          </div>

          <div className="deliverables-grid">
            {content.deliverables.items.map((item) => (
              <article className="deliverable-card" key={item.number}>
                <div className="deliverable-sheet" aria-hidden="true">
                  <div className="sheet-header">
                    <span>OD / {item.number}</span>
                    <span>ESC. —</span>
                  </div>
                  <div className="sheet-drawing">
                    <span className="sheet-view sheet-view-main" />
                    <span className="sheet-view sheet-view-side" />
                    <span className="sheet-axis sheet-axis-x" />
                    <span className="sheet-axis sheet-axis-y" />
                    <span className="sheet-measure">1200</span>
                  </div>
                  <div className="sheet-footer">
                    <span>{item.label}</span>
                    <span>REV. 01</span>
                  </div>
                </div>

                <div className="deliverable-copy">
                  <p className="deliverable-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div
                    className="deliverable-formats"
                    aria-label={
                      locale === "es"
                        ? "Formatos disponibles"
                        : "Formats disponibles"
                    }
                  >
                    {item.formats.map((format) => (
                      <span key={format}>{format}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="deliverables-note">
            <span aria-hidden="true">↳</span>
            <p>{content.deliverables.note}</p>
          </div>
        </section>

        <section className="commitment-section" id="commitment">
          <div
            className="section-craft section-craft-commitment"
            aria-hidden="true"
          >
            <span className="craft-sticker craft-sticker-seal">
              <b>OD</b>
              <small>COMMITMENT</small>
            </span>
            <span className="craft-leaf craft-leaf-one" />
            <span className="craft-leaf craft-leaf-two" />
            <span className="craft-stitch craft-stitch-commitment" />
          </div>
          <div className="commitment-copy">
            <p className="eyebrow">{content.commitment.eyebrow}</p>
            <h2>{content.commitment.title}</h2>
            <p>{content.commitment.body}</p>
          </div>

          <div className="commitment-points">
            {content.commitment.points.map((point, index) => (
              <article key={point.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-craft section-craft-process" aria-hidden="true">
            <span className="craft-sticker craft-sticker-modular">
              ↻ MODULAR
            </span>
            <span className="craft-arrow">↳</span>
            <span className="craft-tape craft-tape-process" />
          </div>
          <div className="section-heading process-heading">
            <div>
              <p className="eyebrow">{content.process.eyebrow}</p>
              <h2>{content.process.title}</h2>
            </div>
          </div>

          <ol className="process-list">
            {content.process.steps.map((step) => (
              <li key={step.number}>
                <span className="process-number">{step.number}</span>
                <div className="process-marker" aria-hidden="true" />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-main">
            <p className="eyebrow eyebrow-light">{content.contact.eyebrow}</p>
            <h2>{content.contact.title}</h2>
            <p>{content.contact.body}</p>
            <div className="contact-actions">
              <a
                className="button button-light"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {content.contact.whatsapp}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={EMAIL_HREF}>
                {content.contact.email}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <address className="contact-details">
            <div>
              <span>{content.contact.phoneLabel}</span>
              <a href={PHONE_HREF}>{content.contact.phone}</a>
            </div>
            <div>
              <span>{content.contact.hoursLabel}</span>
              <strong>{content.contact.hours}</strong>
              <p>{content.contact.afterHours}</p>
              <a href={EMAIL_HREF}>{content.contact.emailAddress}</a>
            </div>
            <div>
              <span>{content.contact.locationLabel}</span>
              <strong>{content.contact.location}</strong>
            </div>
          </address>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            OD
          </span>
          <div>
            <strong>Oscar Daganzo</strong>
            <span>{content.footer.role}</span>
          </div>
        </div>
        <p>
          © {new Date().getFullYear()} · {content.footer.note}
        </p>
        <a href="#top">
          {content.footer.backToTop}
          <span aria-hidden="true">↑</span>
        </a>
      </footer>

      <a
        className="mobile-contact-bar"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        {content.contact.whatsapp}
        <span aria-hidden="true">↗</span>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Oscar Daganzo — Diseño técnico sostenible",
            description:
              "Diseño técnico modular para stands, expositores y mobiliario.",
            telephone: "+34644859837",
            email: "oscar.daganzo@gmail.com",
            areaServed: ["Gavà", "Barcelona", "Catalunya"],
            availableLanguage: ["es", "ca"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gavà",
              addressRegion: "Barcelona",
              addressCountry: "ES",
            },
            serviceType: [
              "Planos técnicos y despieces",
              "Diseño modular",
              "Preparación de archivos DWG y DXF",
              "Optimización para fabricación y CNC",
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
