import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Camera, Check, ChevronRight, Dumbbell, MapPin, Menu, MoveUpRight, Play, Trophy, Users, X } from 'lucide-react';
import './styles.css';

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
const assetUrl = (path) => path.startsWith('/assets/') ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path;
const Logo = ({ light = false }) => <a className={`logo ${light ? 'logo-light' : ''}`} href="#top" aria-label="Le Coin Sportif Tanger accueil"><img src={asset('logo.png')} alt="Le Coin Sportif Tanger" /></a>;
const Arrow = () => <span className="round-arrow"><ArrowUpRight size={17} /></span>;

function Visual({ className = '', image, position = 'center', children }) { return <div className={`visual ${className}`}>{image && <img src={assetUrl(image)} alt="" style={{ objectPosition: position }} />}<div className="court-lines"></div><div className="visual-label">{children || 'LE COIN SPORTIF · TANGER'}</div></div> }

const services = [
  ['01', 'Fitness & entraînement', 'Des formats pour bouger, développer votre énergie et rester régulier.', Dumbbell],
  ['02', 'Renforcement musculaire', 'Une approche progressive pour travailler votre force à votre rythme.', Trophy],
  ['03', 'Préparation physique', 'Des bases solides pour accompagner vos objectifs sportifs.', MoveUpRight],
  ['04', 'Coaching', 'Un accompagnement à découvrir selon vos besoins et vos ambitions.', Users],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    document.querySelectorAll('[style*="/assets/"]').forEach((element) => {
      element.style.backgroundImage = element.style.backgroundImage.replaceAll('url("/assets/', `url("${import.meta.env.BASE_URL}assets/`);
    });
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  const close = () => setMenu(false);
  return <div id="top">
    <header className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}><Logo /><nav className={menu ? 'open' : ''}>
      <a href="#top" onClick={close}>Accueil</a><a href="#club" onClick={close}>Le club</a><a href="#activites" onClick={close}>Activités</a><a href="#gallery" onClick={close}>Galerie</a><a href="#contact" onClick={close}>Contact</a>
      <a className="nav-cta mobile-cta" href="#contact" onClick={close}>Nous contacter <ArrowUpRight size={16}/></a>
    </nav><a className="nav-cta desktop-cta" href="#contact">Nous contacter <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button></header>

    <main>
      <section className="hero"><div className="hero-noise"></div><div className="hero-content reveal"><p className="eyebrow lime"><span></span> LE COIN SPORTIF <b>•</b> TANGER</p><h1>Votre sport,<br/><em>votre espace.</em></h1><p className="hero-lead">Bougez. Progressez. Partagez.</p><p className="hero-copy">Un espace sportif à Tanger pensé pour vous accompagner dans votre entraînement, votre progression et vos objectifs.</p><div className="actions"><a className="button button-lime" href="#contact">Nous contacter <ArrowUpRight size={18}/></a><a className="text-link" href="#club">Découvrir le club <ChevronRight size={18}/></a></div></div><div className="hero-visual"><Visual image="/assets/unnamed (5).webp" position="center 38%"><span className="play"><Play fill="currentColor" size={18}/></span> TRAINING · TANGER</Visual><div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div></div><div className="stats-card"><div><strong>Tanger</strong><span>Localisation</span></div><div><strong>Sport</strong><span>Activité</span></div><div><strong>7j/7</strong><span>Disponibilité</span></div></div><div className="hero-scroll">SCROLL <span></span></div></section>

      <section className="intro section-pad reveal"><div className="section-kicker">01 <span></span> L'EXPÉRIENCE LE COIN SPORTIF</div><h2>Tout ce qu’il faut pour<br/><span>bouger à votre rythme.</span></h2><p className="intro-side">Un lieu pensé pour celles et ceux qui veulent bouger, apprendre et progresser. Bienvenue dans votre espace sportif à Tanger.</p></section>
      <section id="activites" className="services section-pad"><div className="service-grid">{services.map(([num,title,desc,Icon]) => <article className="service-card reveal" key={title}><div className="service-top"><span className="number">{num}</span><Icon size={25} strokeWidth={1.5}/></div><div><h3>{title}</h3><p>{desc}</p></div><Arrow/></article>)}</div></section>

      <section id="club" className="about section-pad"><div className="about-visual reveal"><Visual image="/assets/unnamed (1).webp" position="center 58%">LE COIN SPORTIF · LIEU DE VIE</Visual><div className="stamp">MOVE<br/><b>WITH</b><br/>PURPOSE</div></div><div className="about-copy reveal"><div className="section-kicker">02 <span></span> À PROPOS DU CLUB</div><h2>Le sport au cœur<br/><span>de Tanger.</span></h2><p>Le Coin Sportif Tanger est un espace dédié au sport et à l’entraînement, pensé pour créer un environnement motivant où chacun peut travailler sur ses objectifs et progresser à son rythme.</p><ul><li><Check size={15}/> Une énergie motivante</li><li><Check size={15}/> Des formats pour tous les rythmes</li><li><Check size={15}/> Un espace pour progresser</li></ul><a className="button button-dark" href="#contact">Découvrir le club <ArrowUpRight size={17}/></a></div></section>

      <section id="academy" className="academy section-pad"><div className="academy-head reveal"><div><div className="section-kicker lime-text">03 <span></span> LES ACTIVITÉS</div><h2>Construisez<br/><em>votre routine.</em></h2></div><p>Des catégories sportives à explorer selon votre rythme, vos objectifs et vos envies.</p></div><div className="academy-grid">{[['01','Fitness','Pour bouger','/assets/unnamed.webp'],['02','Force & mobilité','Pour progresser','/assets/unnamed (6).webp'],['03','Préparation','Pour performer','/assets/unnamed (3).webp']].map(x=><article className="academy-card reveal" style={{backgroundImage:`linear-gradient(90deg,#091421ee,#09142199),url("${x[3]}")`}} key={x[1]}><div className="academy-index">{x[0]}</div><div><h3>{x[1]}</h3><span className="level">{x[2]} <i></i></span></div><Arrow/></article>)}</div><a className="text-link light-link" href="#contact">Découvrir les activités <ChevronRight size={18}/></a></section>

      <section id="events" className="events section-pad"><div className="split-heading reveal"><div><div className="section-kicker">04 <span></span> À L'AGENDA</div><h2>Des temps pour<br/><span>se retrouver.</span></h2></div><a className="text-link" href="#contact">Nous contacter <ChevronRight size={18}/></a></div><div className="event-grid">{[['SPORT & MOUVEMENT','Session découverte','Un premier contact avec l’entraînement dans une atmosphère sportive et conviviale.','/assets/unnamed (2).webp'],['TRAINING MOMENT','Bouger ensemble','Un moment pour retrouver l’énergie du collectif et le plaisir de l’effort.','/assets/unnamed (4).webp']].map((e,i)=><article className="event-card reveal" key={e[1]}><Visual image={e[3]} position="center 45%"><span>LE COIN SPORTIF · 0{i+1}</span></Visual><div className="event-info"><span className="event-type">{e[0]} <b>DATE À VENIR</b></span><h3>{e[1]}</h3><p>{e[2]}</p><a href="#contact">En savoir plus <ArrowUpRight size={15}/></a></div></article>)}</div></section>

      <section className="community section-pad"><div className="community-visual reveal"><Visual image="/assets/unnamed (6).webp" position="center 48%">ÉNERGIE · TANGER</Visual><div className="community-tag">MOVE<br/><b>AS A<br/>TEAM</b></div></div><div className="community-copy reveal"><div className="section-kicker lime-text">05 <span></span> L'ÉNERGIE DU CLUB</div><h2>Le sport se vit<br/><em>mieux ensemble.</em></h2><p>De l’entraînement individuel aux moments partagés, chaque séance est une occasion de créer du lien et de garder le rythme.</p><div className="community-stats"><div><strong>Active</strong><span>Énergie</span></div><div><strong>Sport</strong><span>Mouvement</span></div><div><strong>Focus</strong><span>Progression</span></div><div><strong>Team</strong><span>Partage</span></div></div></div></section>

      <section id="gallery" className="gallery section-pad"><div className="split-heading reveal"><div><div className="section-kicker">06 <span></span> L'UNIVERS</div><h2>L’univers <span>Le Coin Sportif.</span></h2></div><a className="text-link" href="#contact">Nous contacter <ArrowUpRight size={16}/></a></div><div className="gallery-grid">{[['TRAINING · 01','/assets/unnamed (5).webp','center 30%'],['ENERGY · 02','/assets/unnamed (6).webp','center 35%'],['ACTION · 03','/assets/unnamed (2).webp','center'],['CLUB LIFE · 04','/assets/unnamed (1).webp','center'],['MOMENTS · 05','/assets/unnamed (4).webp','center 40%'],['TANGER · 06','/assets/unnamed (3).webp','center']].map(([x,img,pos],i)=><div className={`gallery-item g${i+1} reveal`} key={x}><Visual image={img} position={pos}>{x}</Visual></div>)}</div><a className="button button-outline" href="#contact">Voir la galerie <ArrowUpRight size={17}/></a></section>

      <section id="instagram" className="instagram section-pad reveal"><Camera size={28} strokeWidth={1.5}/><h2>Suivez-nous<br/><em>sur Instagram.</em></h2><p>Découvrez l’univers, les actualités et les moments sportifs du club.</p><a className="button button-dark" href="#contact">Nous contacter <ArrowUpRight size={17}/></a></section>
      <section id="reservation" className="reservation"><div className="reservation-inner reveal"><div className="section-kicker">07 <span></span> À VOUS DE BOUGER</div><h2>Prêt à trouver<br/><em>votre rythme ?</em></h2><p>Contactez Le Coin Sportif Tanger et découvrez votre nouvel espace d’entraînement.</p><div className="actions"><a className="button button-lime" href="#contact">Nous contacter <ArrowUpRight size={18}/></a><a className="text-link light-link" href="#contact">Découvrir le club <ChevronRight size={18}/></a></div></div></section>
      <section id="contact" className="contact section-pad"><div className="contact-main reveal"><div className="section-kicker">08 <span></span> NOUS TROUVER</div><h2>On se retrouve<br/><span>à Tanger.</span></h2><div className="address"><MapPin size={19}/><p><strong>Le Coin Sportif Tanger</strong><br/>Association Oussoud Al Amal,<br/>Rte de Tetouan, Tanger 90000,<br/>Morocco</p></div></div><div className="contact-list reveal"><div><span>Téléphone</span><a href="tel:+212662717714">+212 662-717714</a></div><div><span>Horaires</span><p>Lundi — Jeudi · 07:00 – 23:00<br/>Vendredi · 15:00 – 23:00<br/>Samedi · 09:00 – 23:00<br/>Dimanche — Informations à venir</p></div><div><span>Réseaux</span><a href="#contact">Le Coin Sportif Tanger</a></div></div></section>
    </main>
    <footer><div className="footer-top"><Logo light/><p>Votre sport,<br/>votre espace à Tanger.</p><div className="footer-links"><div><span>Explorer</span><a href="#club">Le club</a><a href="#activites">Activités</a><a href="#gallery">Galerie</a></div><div><span>Infos</span><a href="#contact">Contact</a><a href="#contact">Horaires</a></div><div><span>Suivez-nous</span><a href="#contact"><Camera size={15}/> Instagram</a></div></div></div><div className="footer-bottom"><span>© 2026 Le Coin Sportif Tanger. Tous droits réservés.</span><span>Tanger, Maroc <span className="lime-dot"></span></span></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
