'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Brush,
  CheckCircle2,
  ChevronRight,
  Gift,
  Heart,
  Instagram,
  Laser,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Play,
  Scissors,
  Shirt,
  Sparkles,
  Star,
  Truck,
  WandSparkles,
  X,
} from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = '18297083388';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hola Zafy Graf, me gustaría cotizar un trabajo personalizado.'
)}`;

const services = [
  {
    title: 'Bordados',
    description: 'Logotipos, gorras, uniformes y más con terminación premium.',
    icon: Scissors,
    tone: 'pink',
  },
  {
    title: 'DTF / Sublimación',
    description: 'Impresión de alta calidad para textiles, marcas y eventos.',
    icon: Palette,
    tone: 'blue',
  },
  {
    title: 'Uniformes',
    description: 'Soluciones empresariales, escolares, deportivas y promocionales.',
    icon: Shirt,
    tone: 'yellow',
  },
  {
    title: 'Láser',
    description: 'Grabados en madera, acrílico, metal y artículos personalizados.',
    icon: Laser,
    tone: 'dark',
  },
  {
    title: 'Promocionales',
    description: 'Mugs, termos, llaveros, lapiceros y regalos corporativos.',
    icon: Gift,
    tone: 'pink',
  },
  {
    title: 'Personalización',
    description: 'Creamos piezas únicas a partir de tu idea, marca o evento.',
    icon: WandSparkles,
    tone: 'blue',
  },
];

const work = [
  {
    title: 'Bordado corporativo',
    category: 'Bordados',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mugs personalizados',
    category: 'Sublimación',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Textiles con identidad',
    category: 'DTF',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Regalos para marcas',
    category: 'Promocionales',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Uniformes profesionales',
    category: 'Textil',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Detalles hechos a medida',
    category: 'Personalización',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  },
];

const catalog = [
  ['Tazas', '☕'],
  ['Gorras', '🧢'],
  ['Camisetas', '👕'],
  ['Llaveros', '🔑'],
  ['Termos y vasos', '🥤'],
  ['Artículos en madera', '🪵'],
  ['Regalos', '🎁'],
  ['Y mucho más', '✨'],
];

const testimonials = [
  {
    name: 'Yanelis Campusano',
    text: 'Excelente calidad y servicio. Mis uniformes quedaron espectaculares. Súper recomendados.',
  },
  {
    name: 'Cliente empresarial',
    text: 'Muy profesionales, atentos y con trabajos de gran calidad. El resultado superó lo esperado.',
  },
  {
    name: 'Cliente satisfecha',
    text: 'Me encantaron mis artículos personalizados. Buen precio, excelente atención y entrega impecable.',
  },
];

function PaintBlob({ className }: { className: string }) {
  return <span className={`paint-blob ${className}`} aria-hidden="true" />;
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#inicio" className="brand" aria-label="Zafy Graf - Inicio">
            <img src="/zafy-logo.jpg" alt="Zafy Graf" />
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#trabajos">Trabajos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a className="btn btn-pink nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Cotizar ahora
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mobile-nav"
          >
            {['inicio', 'servicios', 'catalogo', 'trabajos', 'nosotros', 'contacto'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                {item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-pink">
              <MessageCircle size={18} /> Cotizar ahora
            </a>
          </motion.nav>
        )}
      </header>

      <section id="inicio" className="hero">
        <PaintBlob className="blob-blue blob-one" />
        <PaintBlob className="blob-pink blob-two" />
        <PaintBlob className="blob-yellow blob-three" />

        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-copy"
          >
            <div className="hero-kicker">IDEAS QUE SE CONVIERTEN EN REALIDAD</div>
            <h1>
              Impresión, bordados y personalización con <span>calidad profesional</span>
            </h1>
            <p>
              Damos vida a tus ideas con bordados, impresión, láser y artículos personalizados.
              Calidad, creatividad y compromiso en cada detalle.
            </p>

            <div className="hero-actions">
              <a className="btn btn-pink btn-large" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} /> Cotizar ahora
              </a>
              <a className="btn btn-outline btn-large" href="#trabajos">
                <Play size={19} /> Ver nuestros trabajos
              </a>
            </div>

            <div className="hero-proof">
              <div><Truck /><span>Servicio en<br />República Dominicana</span></div>
              <div><BadgeCheck /><span>Calidad<br />garantizada</span></div>
              <div><Heart /><span>Ideas<br />personalizadas</span></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="hero-showcase"
          >
            <div className="showcase-card showcase-main">
              <div className="shirt-mockup">
                <div className="shirt-sleeve left" />
                <div className="shirt-sleeve right" />
                <div className="shirt-neck" />
                <div className="mini-logo">ZG</div>
              </div>
              <span className="floating-note note-one">Tu marca<br />a otro nivel</span>
            </div>

            <div className="product-float mug-card">
              <span className="product-emoji">☕</span>
              <b>Tazas</b>
              <small>Personalizadas</small>
            </div>
            <div className="product-float cap-card">
              <span className="product-emoji">🧢</span>
              <b>Gorras</b>
              <small>Bordadas</small>
            </div>
            <div className="product-float laser-card">
              <span className="product-emoji">🔑</span>
              <b>Láser</b>
              <small>Grabado premium</small>
            </div>

            <div className="service-tags">
              <span>BORDADOS</span>
              <span>DTF / SUBLIMACIÓN</span>
              <span>LÁSER</span>
              <span>UNIFORMES</span>
              <span>ARTÍCULOS PROMOCIONALES</span>
              <span>Y MUCHO MÁS...</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="section services-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionEyebrow>LO HACEMOS REALIDAD</SectionEyebrow>
              <h2>Nuestros Servicios</h2>
            </div>
            <p>Soluciones de personalización para empresas, emprendedores y personas que buscan algo único.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  className={`service-card tone-${service.tone}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="service-icon"><Icon /></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-arrow"><ArrowRight size={18} /></span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="trabajos" className="section portfolio-section">
        <PaintBlob className="blob-blue portfolio-blob" />
        <div className="container">
          <div className="portfolio-top">
            <div className="portfolio-copy">
              <SectionEyebrow>NUESTRO TRABAJO HABLA</SectionEyebrow>
              <h2>Trabajos<br />Realizados</h2>
              <p>Cada proyecto cuenta una historia. Aquí puedes apreciar una muestra de lo que hacemos.</p>
              <a className="btn btn-pink" href="https://www.instagram.com/zafygraf/" target="_blank" rel="noreferrer">
                Ver más trabajos <ArrowRight size={18} />
              </a>
            </div>

            <div className="portfolio-grid">
              {work.map((item, index) => (
                <motion.a
                  key={item.title}
                  href="https://www.instagram.com/zafygraf/"
                  target="_blank"
                  rel="noreferrer"
                  className={`work-card ${index === 0 ? 'work-tall' : ''}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.015 }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="work-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                    <ChevronRight />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="section catalog-section">
        <div className="container catalog-layout">
          <div className="catalog-copy">
            <SectionEyebrow>EXPLORA NUESTRAS IDEAS</SectionEyebrow>
            <h2>Catálogo de<br />Productos</h2>
            <p>Descubre opciones personalizables ideales para empresas, eventos, regalos y ocasiones especiales.</p>
            <a className="btn btn-pink" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar catálogo <ArrowRight size={18} />
            </a>
          </div>

          <div className="catalog-grid">
            {catalog.map(([title, emoji], index) => (
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="catalog-card"
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -7, rotate: index % 2 === 0 ? -1 : 1 }}
              >
                <span>{emoji}</span>
                <b>{title}</b>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="nosotros" className="section trust-section">
        <div className="container">
          <div className="trust-intro">
            <div>
              <SectionEyebrow>LA CONFIANZA NOS IMPULSA</SectionEyebrow>
              <h2>Lo que dicen<br />nuestros clientes</h2>
            </div>
            <div className="trust-pill"><Sparkles /> Creatividad + precisión + buena atención</div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
                <p>“{testimonial.text}”</p>
                <div className="testimonial-person">
                  <div className="avatar">{testimonial.name.charAt(0)}</div>
                  <div><b>{testimonial.name}</b><span>Cliente Zafy Graf</span></div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="container contact-banner">
          <PaintBlob className="blob-yellow contact-blob-yellow" />
          <PaintBlob className="blob-blue contact-blob-blue" />
          <div className="contact-copy">
            <span className="script-title">Hablemos de tu idea</span>
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>Cuéntanos qué necesitas y te ayudamos a convertirlo en algo que se vea tan bien como lo imaginaste.</p>
          </div>
          <a className="btn whatsapp-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={21} /> Enviar mensaje
          </a>
          <div className="contact-features">
            <span><CheckCircle2 /> Respuesta rápida</span>
            <span><BadgeCheck /> Trabajo profesional</span>
            <span><Heart /> Atención personalizada</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/zafy-logo.jpg" alt="Zafy Graf" />
            <div><b>Zafy Graf</b><span>Bordados, impresión, láser y personalización.</span></div>
          </div>
          <div className="footer-info">
            <span><MapPin /> Bajos de Haina, San Cristóbal, República Dominicana</span>
            <a href="tel:+18297083388"><Phone /> 829 708 3388</a>
            <a href="mailto:zafygraf@gmail.com"><Mail /> zafygraf@gmail.com</a>
          </div>
          <div className="footer-social">
            <b>Síguenos</b>
            <a href="https://www.instagram.com/zafygraf/" target="_blank" rel="noreferrer"><Instagram /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Zafy Graf. Todos los derechos reservados.</span>
          <span>Ideas que se convierten en realidad <Heart size={14} fill="currentColor" /></span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Cotizar por WhatsApp">
        <MessageCircle />
        <span>Cotizar</span>
      </a>
    </main>
  );
}
