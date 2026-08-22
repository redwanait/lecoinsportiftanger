import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Camera, Check, ChevronRight, MapPin, Menu, MoveUpRight, Play, Trophy, Users, X } from 'lucide-react';
import './styles.css';

const Logo = ({ light = false }) => <a className={`logo ${light ? 'logo-light' : ''}`} href="#top" aria-label="Padel Tanger accueil"><img src="/assets/logo.png" alt="Padel Tanger" /></a>;
const Arrow = () => <span className="round-arrow"><ArrowUpRight size={17} /></span>;

function Visual({ className = '', image, position = 'center', children }) { return <div className={`visual ${className}`}>{image && <img src={image} alt="" style={{ objectPosition: position }} />}<div className="court-lines"></div><div className="visual-label">{children || 'PADEL TANGER'}</div></div> }

const services = [
  ['01', 'Padel Events', 'Des événements et rencontres pour jouer, progresser et partager.', Trophy],
  ['02', 'Kids Academy', 'Une initiation au padel pensée pour les plus jeunes.', Users],
  ['03', 'Ladies Academy', 'Des sessions adaptées pour apprendre et progresser dans une ambiance conviviale.', Check],
  ['04', 'Padel Coaching', 'Un accompagnement personnalisé pour améliorer votre jeu.', MoveUpRight],
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  const close = () => setMenu(false);
  return <div id="top">
    <header className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}><Logo /><nav className={menu ? 'open' : ''}>
      <a href="#club" onClick={close}>Le club</a><a href="#activites" onClick={close}>Nos activités</a><a href="#academy" onClick={close}>Academy</a><a href="#events" onClick={close}>Événements</a><a href="#gallery" onClick={close}>Galerie</a><a href="#contact" onClick={close}>Contact</a>
      <a className="nav-cta mobile-cta" href="#reservation" onClick={close}>Réserver un terrain <ArrowUpRight size={16}/></a>
    </nav><a className="nav-cta desktop-cta" href="#reservation">Réserver un terrain <ArrowUpRight size={16}/></a><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button></header>

    <main>
      <section className="hero"><div className="hero-noise"></div><div className="hero-content reveal"><p className="eyebrow lime"><span></span> PADEL CLUB <b>•</b> TANGER</p><h1>Le Padel,<br/><em>autrement.</em></h1><p className="hero-lead">Jouez. Progressez. Partagez.</p><p className="hero-copy">Découvrez Padel Tanger, un espace dédié au padel, à la performance et aux bons moments entre passionnés.</p><div className="actions"><a className="button button-lime" href="#reservation">Réserver un terrain <ArrowUpRight size={18}/></a><a className="text-link" href="#club">Découvrir le club <ChevronRight size={18}/></a></div></div><div className="hero-visual"><Visual image="/assets/hero.jpg" position="center 38%"><span className="play"><Play fill="currentColor" size={18}/></span> COURT CENTRAL · TANGER</Visual><div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div></div><div className="stats-card"><div><strong>+1000</strong><span>Passionnés</span></div><div><strong>24/7</strong><span>Cours & coaching</span></div><div><strong>∞</strong><span>Events & tournaments</span></div></div><div className="hero-scroll">SCROLL <span></span></div></section>

      <section className="intro section-pad reveal"><div className="section-kicker">01 <span></span> L'EXPÉRIENCE PADEL TANGER</div><h2>Tout ce qu’il faut pour<br/><span>vivre le Padel à fond.</span></h2><p className="intro-side">Un lieu pensé pour celles et ceux qui veulent bouger, apprendre et se retrouver. Bienvenue dans votre nouveau terrain de jeu.</p></section>
      <section id="activites" className="services section-pad"><div className="service-grid">{services.map(([num,title,desc,Icon]) => <article className="service-card reveal" key={title}><div className="service-top"><span className="number">{num}</span><Icon size={25} strokeWidth={1.5}/></div><div><h3>{title}</h3><p>{desc}</p></div><Arrow/></article>)}</div></section>

      <section id="club" className="about section-pad"><div className="about-visual reveal"><Visual image="/assets/coaching.jpg" position="center 58%">PADEL TANGER · LIEU DE VIE</Visual><div className="stamp">PLAY<br/><b>TOGETHER</b><br/>TANGER</div></div><div className="about-copy reveal"><div className="section-kicker">02 <span></span> À PROPOS DU CLUB</div><h2>Plus qu’un terrain.<br/><span>Une communauté.</span></h2><p>Padel Tanger rassemble les passionnés de padel autour du sport, de la progression et du partage.</p><ul><li><Check size={15}/> Une ambiance conviviale</li><li><Check size={15}/> Des activités pour tous les niveaux</li><li><Check size={15}/> Des événements toute l’année</li></ul><a className="button button-dark" href="#contact">Découvrir Padel Tanger <ArrowUpRight size={17}/></a></div></section>

      <section id="academy" className="academy section-pad"><div className="academy-head reveal"><div><div className="section-kicker lime-text">03 <span></span> ACADEMY</div><h2>Progressez<br/><em>à votre rythme.</em></h2></div><p>Des programmes pensés pour chaque joueur, chaque envie, chaque niveau.</p></div><div className="academy-grid">{[['01','Kids Academy','Débutant','/assets/kids.jpg'],['02','Ladies Academy','Intermédiaire','/assets/court.jpg'],['03','Coaching','Avancé','/assets/coach.jpg']].map(x=><article className="academy-card reveal" style={{backgroundImage:`linear-gradient(90deg,#091421ee,#09142199),url("${x[3]}")`}} key={x[1]}><div className="academy-index">{x[0]}</div><div><h3>{x[1]}</h3><span className="level">{x[2]} <i></i></span></div><Arrow/></article>)}</div><a className="text-link light-link" href="#contact">Voir les programmes <ChevronRight size={18}/></a></section>

      <section id="events" className="events section-pad"><div className="split-heading reveal"><div><div className="section-kicker">04 <span></span> À L'AGENDA</div><h2>Les prochains<br/><span>rendez-vous.</span></h2></div><a className="text-link" href="#contact">Tous les événements <ChevronRight size={18}/></a></div><div className="event-grid">{[['PADEL EVENT','Journée Initiation','Une journée pour découvrir le padel dans une ambiance sportive et conviviale.','/assets/event.jpg'],['TOURNAMENT','Match Point','Des matchs, de l’intensité et le plaisir de se challenger ensemble.','/assets/action.jpg']].map((e,i)=><article className="event-card reveal" key={e[1]}><Visual image={e[3]} position="center 45%"><span>PADEL TANGER · 0{i+1}</span></Visual><div className="event-info"><span className="event-type">{e[0]} <b>DATE À VENIR</b></span><h3>{e[1]}</h3><p>{e[2]}</p><a href="#contact">En savoir plus <ArrowUpRight size={15}/></a></div></article>)}</div></section>

      <section className="community section-pad"><div className="community-visual reveal"><Visual image="/assets/community.jpg" position="center 48%">COMMUNAUTÉ · TANGER</Visual><div className="community-tag">PADEL<br/><b>IS A<br/>TEAM<br/>SPORT</b></div></div><div className="community-copy reveal"><div className="section-kicker lime-text">05 <span></span> LA COMMUNAUTÉ</div><h2>Le Padel se joue<br/><em>mieux ensemble.</em></h2><p>Des rencontres spontanées aux grands événements, chaque partie est une occasion de créer du lien.</p><div className="community-stats"><div><strong>Active</strong><span>Communauté</span></div><div><strong>Events</strong><span>Moments partagés</span></div><div><strong>Academy</strong><span>Pour progresser</span></div><div><strong>Coaching</strong><span>Pour performer</span></div></div></div></section>

      <section id="gallery" className="gallery section-pad"><div className="split-heading reveal"><div><div className="section-kicker">06 <span></span> L'UNIVERS</div><h2>L’univers <span>Padel Tanger.</span></h2></div><a className="text-link" href="#instagram">Instagram <ArrowUpRight size={16}/></a></div><div className="gallery-grid">{[['COURT · 01','/assets/hero.jpg','center 30%'],['PLAYERS · 02','/assets/community.jpg','center 35%'],['ACTION · 03','/assets/action.jpg','center'],['CLUB LIFE · 04','/assets/coaching.jpg','center'],['MOMENTS · 05','/assets/event.jpg','center 40%'],['TANGER · 06','/assets/court.jpg','center']].map(([x,img,pos],i)=><div className={`gallery-item g${i+1} reveal`} key={x}><Visual image={img} position={pos}>{x}</Visual></div>)}</div><a className="button button-outline" href="#instagram">Voir la galerie <ArrowUpRight size={17}/></a></section>

      <section id="instagram" className="instagram section-pad reveal"><Camera size={28} strokeWidth={1.5}/><h2>Suivez-nous<br/><em>sur Instagram.</em></h2><p>Découvrez les dernières actualités, événements et moments du club.</p><a className="button button-dark" href="#contact">@padeltanger <ArrowUpRight size={17}/></a></section>
      <section id="reservation" className="reservation"><div className="reservation-inner reveal"><div className="section-kicker">07 <span></span> À VOUS DE JOUER</div><h2>Prêt à entrer<br/><em>sur le terrain ?</em></h2><p>Réservez votre terrain et rejoignez la communauté Padel Tanger.</p><div className="actions"><a className="button button-lime" href="#contact">Réserver maintenant <ArrowUpRight size={18}/></a><a className="text-link light-link" href="#contact">Nous contacter <ChevronRight size={18}/></a></div></div></section>
      <section id="contact" className="contact section-pad"><div className="contact-main reveal"><div className="section-kicker">08 <span></span> NOUS TROUVER</div><h2>On se retrouve<br/><span>à Tanger.</span></h2><div className="address"><MapPin size={19}/><p><strong>Padel Tanger</strong><br/>Tanger, Maroc</p></div></div><div className="contact-list reveal"><div><span>Téléphone</span><a href="tel:0666528787">06 66 52 87 87</a><a href="tel:0615118933">06 15 11 89 33</a></div><div><span>À venir</span><p>Horaires d’ouverture<br/>Google Maps · WhatsApp</p></div><div><span>Réseaux</span><a href="#instagram">Instagram @padeltanger</a></div></div></section>
    </main>
    <footer><div className="footer-top"><Logo light/><p>Le padel, autrement.<br/>Une communauté à Tanger.</p><div className="footer-links"><div><span>Explorer</span><a href="#club">Le club</a><a href="#activites">Nos activités</a><a href="#academy">Academy</a></div><div><span>Rendez-vous</span><a href="#events">Événements</a><a href="#gallery">Galerie</a><a href="#contact">Contact</a></div><div><span>Suivez-nous</span><a href="#instagram"><Camera size={15}/> Instagram</a></div></div></div><div className="footer-bottom"><span>© 2026 Padel Tanger. Tous droits réservés.</span><span>Tanger, Maroc <span className="lime-dot"></span></span></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
