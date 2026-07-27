"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  type Locale,
  projectExamples,
  siteContent,
} from "./content";

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
  const visibleProjects = projectExamples.filter((project) => project.visible);

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
          <a href="#projects">{content.nav.projects}</a>
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

          <div className="blueprint-shell">
            <div className="blueprint-card">
              <div className="blueprint-head">
                <span>{content.blueprint.label}</span>
                <span>ESC. 1:20</span>
              </div>

              <div className="technical-drawing" aria-hidden="true">
                <div className="measure measure-top">2400</div>
                <div className="measure measure-side">2000</div>
                <div className="module module-a">
                  <span>01</span>
                </div>
                <div className="module module-b">
                  <span>02</span>
                </div>
                <div className="module module-c">
                  <span>03</span>
                </div>
                <div className="joint joint-a" />
                <div className="joint joint-b" />
              </div>

              <div className="blueprint-labels">
                <span>{content.blueprint.module}</span>
                <span>{content.blueprint.transport}</span>
                <span>{content.blueprint.assembly}</span>
                <span>{content.blueprint.reuse}</span>
              </div>

              <p>{content.blueprint.note}</p>
            </div>
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

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.services.eyebrow}</p>
              <h2>{content.services.title}</h2>
            </div>
            <p>{content.services.intro}</p>
          </div>

          <div className="services-grid">
            {content.services.items.map((item) => (
              <article className="service-card" key={item.number}>
                <div className="service-card-top">
                  <span>{item.number}</span>
                  <span className="service-symbol" aria-hidden="true">
                    ⌜
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

        <section className="section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow">{content.projects.eyebrow}</p>
              <h2>{content.projects.title}</h2>
            </div>
            <p>{content.projects.intro}</p>
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <article className="project-card" key={`${project.title.es}-${index}`}>
                <div className="project-media">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.alt[locale]}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <div className="placeholder-drawing" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="placeholder-copy">
                        <strong>{content.projects.placeholder}</strong>
                        <small>{content.projects.placeholderHint}</small>
                      </div>
                    </div>
                  )}
                  <span className="project-index">0{index + 1}</span>
                </div>

                <div className="project-meta">
                  <p className="project-category">{project.category[locale]}</p>
                  <h3>{project.title[locale]}</h3>
                  <p>{project.description[locale]}</p>
                  <div className="project-tags" aria-label="Formatos y criterios">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="commitment-section" id="commitment">
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
