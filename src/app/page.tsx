"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import sidebarStyles from './styles/Sidebar.module.css';
import modalStyles from './styles/Modal.module.css';
import cardStyles from './styles/InfoCards.module.css';
import separatorStyles from './styles/Separators.module.css';
import galleryStyles from './styles/Gallery.module.css';

interface TeamMember {
  name: string;
  image: string;
  description: string;
  linkedin: string;
  github: string;
  email: string;
  phone: string;
  tidligere_prosjekter: string[];
  praksisplasser: string[];
  teknologier: string[];
}

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  // Gallery images - add your images here
  const galleryImages = [
    { 
      src: "/gallery/techpoint.jpg", 
      alt: "TechPoint konferanse 2025",
      description: "En gjeng som lar seg inspirere på konferanse!"
    },
    { 
      src: "/gallery/techpoint2.jpg",
      alt: "TechPoint konferanse 2025",
      description: "Fullt fokus og god stemning på konferansen! (Vi tok oss noen kreative friheter, Frank var syk den dagen 😉)"
    },
    { 
      src: "/gallery/techpoint3.jpg", 
      alt: "TechPoint konferanse 2025",
      description: "En fornøyd gjeng på Techpoint!"
    },
    { 
      src: "/gallery/cryptography.jpg", 
      alt: "IS-214 Cryptography Competition 2025",
      description: "Gruppen får utdelt premie for førsteplass under kryptografi-konkurransen i faget IS-214"
    },

  ];

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const teamMembers = [
    {
      name: "Frank Hovet",
      image: "/medlem_bilder/Frank.jpg",
      description:
        "26 år, med bachelor i sykepleie. Brenner for backend-utvikling og systemarkitektur, med særlig interesse for programmering i Python",
      linkedin: "https://www.linkedin.com/in/frank-hovet/",
      github: "https://github.com/FrankUia",
      email: "frankh@uia.no",
      phone: "+47 46 95 69 34",
      tidligere_prosjekter: ["Prosjekt 1", "Prosjekt 2"],
      praksisplasser: ["Kristiansand Kommune - Internship"],
      teknologier: ["Python", "Supabase", "MVC ASP.Net", "React"]
    },
    {
      name: "Jon Engravslia Aarebakk",
      image: "/medlem_bilder/Jon.jpg",
      description:
        "Spesielt interessert i systemutvikling, systemarkitektur, backend-utvikling og volleyball. Jeg har mest erfaring med web-dev.",
      linkedin: "https://www.linkedin.com/in/jon-engravslia-aarebakk/",
      github: "https://github.com/JonAarebakk",
      email: "jonea@uia.no",
      phone: "+47 94 98 60 94",
      tidligere_prosjekter: ["Prosjekt 1", "Prosjekt 2"],
      praksisplasser: ["Bedrift A", "Bedrift B"],
      teknologier: ["Teknologi 1", "Teknologi 2", "Teknologi 3"]
    },
    {
      name: "Kata-Loore Tamm",
      image: "/medlem_bilder/Kata.png",
      description:
        "Trives best med prosjekter som involverer hele utviklingsløpet, fra planlegging og databasedesign til implementering av backend og utvikling av frontend.",
      linkedin: "https://www.linkedin.com/in/katalooretamm",
      github: "https://github.com/KataLoore",
      email: "kata.tamm@example.com",
      phone: "+47 555 12 345",
      tidligere_prosjekter: ["Prosjekt 1", "Prosjekt 2"],
      praksisplasser: ["Bedrift A", "Bedrift B"],
      teknologier: ["Teknologi 1", "Teknologi 2", "Teknologi 3"]
    },
    {
      name: "Stine",
      image: "/medlem_bilder/stine.JPEG",
      description:
        "26 år, har fra tidligere en bachelor i sykepleie. Mine interresser er systemutvikling, databaser, UX design og frontend.",
      linkedin: "https://www.linkedin.com/in/stine-strand",
      github: "https://github.com/stinest-uia",
      email: "stinestr@uia.no",
      phone: "",
      tidligere_prosjekter: ["Prosjekt 1", "Prosjekt 2"],
      praksisplasser: ["Phonero - IT og utvikling"],
      teknologier: ["HTML og CSS", "React", "MVC ASP.NET", "PostgreSQL"]
    },
    {
      name: "Jørgen",
      image: "/medlem_bilder/Jørgen.jpg",
      description: "28 år, har tidligere bachelor i psykologi. Interesse for databasesystemer, og backend utvikling i C#. Lærer meg Python for øyeblikket.",
      linkedin: "https://www.linkedin.com/in/j%C3%B8rgen-ege-893063369/?originalSubdomain=no",
      github: "https://github.com/JorgenEge",
      email: "jorgee17@uia.no",
      phone: "+47 95 90 94 40",
      tidligere_prosjekter: ["Prosjekt 1", "Prosjekt 2"],
      praksisplasser: ["Bedrift A", "Bedrift B"],
      teknologier: ["Teknologi 1", "Teknologi 2", "Teknologi 3"]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progressPercent = Math.max(15, (scrollTop / docHeight) * 100); // Minimum 15% visibility
      
      const progressBar = document.querySelector(`.${sidebarStyles.progressBar}`) as HTMLElement;
      if (progressBar) {
        progressBar.style.height = `${progressPercent}%`;
      }

      // Update active section based on scroll position
      const sidebarLinks = document.querySelectorAll(`.${sidebarStyles.sidebarLink}`);
      let currentSection = 'hjem';
      
      // Simple approach: check scroll position relative to document height
      const sectionScrollPercent = (scrollTop / (docHeight || 1)) * 100;
      
      if (sectionScrollPercent > 75) {
        currentSection = 'kontakt';  // Bottom = contact section
      } else if (sectionScrollPercent > 55) {
        currentSection = 'about';  // About section
      } else if (sectionScrollPercent > 25) {
        currentSection = 'team';   // Team section  
      } else {
        currentSection = 'hjem';   // Top = home section
      }

      // Remove active class from all links
      sidebarLinks.forEach(link => link.classList.remove(sidebarStyles.active));
      
      // Add active class to current section
      const activeLink = document.querySelector(`[data-section="${currentSection}"]`);
      if (activeLink) {
        activeLink.classList.add(sidebarStyles.active);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className={sidebarStyles.sidebar}>
        <div className={sidebarStyles.sidebarContent}>
          <div className={sidebarStyles.sidebarBrand}>
            <Image
              src="/reboot.png"
              alt="Reboot Logo"
              width={120}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={sidebarStyles.sidebarNavigation}>
            <div className={sidebarStyles.scrollProgress}>
              <div className={sidebarStyles.progressBar}></div>
            </div>
            <div className={sidebarStyles.sidebarLinks}>
              <a href="#hjem" className={sidebarStyles.sidebarLink} data-section="hjem">
                <span className="link-indicator"></span>
                Hjem
              </a>
              <a href="#team" className={sidebarStyles.sidebarLink} data-section="team">
                <span className="link-indicator"></span>
                Vårt Team
              </a>
              <a href="#about" className={sidebarStyles.sidebarLink} data-section="about">
                <span className="link-indicator"></span>
                Om oss
              </a>
              <a href="#kontakt" className={sidebarStyles.sidebarLink} data-section="kontakt">
                <span className="link-indicator"></span>
                Kontakt oss
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div id="hjem"></div>
        <header className="header">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
            <Image
              src="/reboot.png"
              alt="Bachelorprosjekt 2025"
              width={500}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          </div>


          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
            Vi er gruppe 16 og består av 5 studenter som sammen skal gjennomføre vårt bachelorprosjekt ved Universitetet i Agder.
          </p>

        </header>

        <section id="team" className={cardStyles.teamContainer}>
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className={cardStyles.teamMember} onClick={() => setSelectedMember(member)}>
              <div className={cardStyles.memberImageContainer}>
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    fill
                    className={cardStyles.memberImage}
                    quality={95}
                    priority
                  />
                ) : (
                  <div className={cardStyles.memberImage}>
                    <span>No Image</span>
                  </div>
                )}
              </div>
              <h3 className={cardStyles.memberName}>{member.name}</h3>
              <p className={cardStyles.memberDescription}>{member.description}</p>
              <div className={cardStyles.socialLinks}>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardStyles.socialLink}
                  title="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardStyles.socialLink}
                  title="GitHub"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMember(member);
                  }}
                  className={cardStyles.socialLink}
                  title="Kontakt informasjon"
                >
                  <Image
                    src="/contact-info.svg"
                    alt="Contact info"
                    width={20}
                    height={20}
                    className={cardStyles.contactIcon}
                  />
                </button>
              </div>
            </div>
          ))}
          <div className={cardStyles.row2}>
            {teamMembers.slice(3).map((member, index) => (
              <div key={index + 3} className={cardStyles.teamMember} onClick={() => setSelectedMember(member)}>
                <div className={cardStyles.memberImageContainer}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name}'s profile`}
                      fill
                      className={cardStyles.memberImage}
                      quality={95}
                      priority
                    />
                  ) : (
                    <div className={cardStyles.memberImage}>
                      <span>No Image</span>
                    </div>
                  )}
                </div>
                <h3 className={cardStyles.memberName}>{member.name}</h3>
                <p className={cardStyles.memberDescription}>{member.description}</p>
                <div className={cardStyles.socialLinks}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardStyles.socialLink}
                    title="LinkedIn"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardStyles.socialLink}
                    title="GitHub"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                    className={cardStyles.socialLink}
                    title="Kontakt informasjon"
                  >
                    <Image
                      src="/contact-info.svg"
                      alt="Contact info"
                      width={20}
                      height={20}
                      className={cardStyles.contactIcon}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section id="gallery" className="content-section">
          <div className={galleryStyles.galleryContainer}>
            <div className={galleryStyles.imageGallery}>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`${galleryStyles.galleryImage} ${
                    index === currentImageIndex ? galleryStyles.active : ''
                  }`}
                  onClick={() => setModalImageIndex(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
              <div className={galleryStyles.galleryIndicators}>
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`${galleryStyles.indicator} ${
                      index === currentImageIndex ? galleryStyles.activeIndicator : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section about-section">
          <h2 className="title">Om Oss</h2>
          <div className={separatorStyles.titleSeparator}>
            <div className={separatorStyles.separatorLine}></div>
            <div className={separatorStyles.separatorDot}></div>
            <div className={separatorStyles.separatorLine}></div>
          </div>
          <p className="textarea" style={{ fontSize: '1.3rem', lineHeight: '1.8', maxWidth: '900px' }}>
            Vi er en gjeng med studenter som har samarbeidet gjennom store deler
            av bacheloren. Våre felles verdier er viktige for oss; respekt for
            hverandre, engasjement i prosjektarbeid, nysgjerrighet og ikke minst
            god humor skaper et sterkt samhold som gjør at vi trives godt
            sammen. Vi legger vekt på samarbeid og problemløsning, og vi er
            overbevist om at vi får til mer når vi spiller hverandre gode. Hver
            av oss har ulike styrker og interesser. Noen foretrekker
            effektivitet og iterativt arbeid, mens andre legger vekt på
            grundighet fra steg en. Det er forskjellene våre som styrker teamet
            og gjør at vi kontinuerlig lærer av hverandre.
          </p>
        </section>

        {/* Commented out Veien videre section - kept for future reference
        <section id="veien-videre" className="content-section">
          <h2 className="title">Veien videre</h2>
          <div className={separatorStyles.variantFuture}>
            <div className={separatorStyles.separatorLineWave}></div>
            <div className={separatorStyles.separatorIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className={separatorStyles.separatorLineWave}></div>
          </div>
          <div className={cardStyles.infoCards}>
            <div className={cardStyles.infoCard}>
              <div className={cardStyles.infoIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.81 7.25l5.54 5.54c.78.78 2.05.78 2.83 0L16.97 7l-2.68-2.68-4.24 4.24c-.39.39-1.02.39-1.41 0L2.81 2.83c-.78.78-.78 2.05 0 2.83l5.54 5.54zm18.38 2.27c.78.78.78 2.05 0 2.83l-5.54 5.54c-.78.78-2.05.78-2.83 0L7.03 17l2.68-2.68 4.24 4.24c.39.39 1.02.39 1.41 0l5.83-5.83c.78-.78.78-2.05 0-2.83L15.66 4.17c-.78-.78-2.05-.78-2.83 0L7.29 9.71c-.78.78-.78 2.05 0 2.83z"/>
                </svg>
              </div>
              <h3>Placeholder Tittel 1</h3>
              <p>Dette er placeholder tekst for fremtidige planer. Innhold kommer senere.</p>
            </div>
            <div className={cardStyles.infoCard}>
              <div className={cardStyles.infoIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3>Placeholder Tittel 2</h3>
              <p>Dette er placeholder tekst for erfaring og kompetanse. Innhold kommer senere.</p>
            </div>
            <div className={cardStyles.infoCard}>
              <div className={cardStyles.infoIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"/>
                </svg>
              </div>
              <h3>Placeholder Tittel 3</h3>
              <p>Dette er placeholder tekst for arbeidslivet og karriere. Innhold kommer senere.</p>
            </div>
          </div>
        </section>
        */}

        <section id="kontakt" className="content-section">
          <h2 className="title">Kontakt oss</h2>
          <div className={separatorStyles.titleSeparator}>
            <div className={separatorStyles.separatorLine}></div>
            <div className={separatorStyles.separatorDot}></div>
            <div className={separatorStyles.separatorLine}></div>
          </div>
          
          <div style={{ 
            background: 'var(--card-bg)', 
            borderRadius: '1rem', 
            padding: '3rem', 
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(8px)',
            maxWidth: '700px',
            margin: '2rem auto',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="var(--accent)" style={{ marginBottom: '1rem' }}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            
            <p style={{ 
              fontSize: '1.3rem', 
              lineHeight: '1.8', 
              color: 'var(--text-secondary)', 
              marginBottom: '2rem'
            }}>
              Er du interessert i å vite mer eller har noen spørsmål?
            </p>
            
            <div style={{ 
              background: 'rgba(0, 208, 132, 0.1)', 
              border: '1px solid rgba(0, 208, 132, 0.3)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              display: 'inline-block'
            }}>
              <p style={{ margin: '0', fontSize: '1.2rem', fontWeight: '600' }}>
                Kontakt: 
                <a 
                  href="mailto:stinestr@uia.no" 
                  style={{ 
                    color: 'var(--accent)', 
                    textDecoration: 'none',
                    marginLeft: '0.5rem',
                    fontSize: '1.3rem'
                  }}
                >
                  stinestr@uia.no
                </a>
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2025 Bachelorprosjekt - Universitetet i Agder</p>
        </footer>
      </main>

      {/* Modal for team member details */}
      {selectedMember && (
        <div className={modalStyles.modalOverlay} onClick={() => setSelectedMember(null)}>
          <div className={modalStyles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={modalStyles.modalClose} onClick={() => setSelectedMember(null)}>×</button>
            
            <div className={modalStyles.modalHeader}>
              <div className={modalStyles.modalImageContainer}>
                <Image
                  src={selectedMember.image}
                  alt={`${selectedMember.name}'s profile`}
                  fill
                  className={modalStyles.modalImage}
                  quality={95}
                />
              </div>
              <h3 className={modalStyles.modalTitle}>{selectedMember.name}</h3>
              
              <div className={modalStyles.modalSocialLinks}>
                {selectedMember.linkedin && (
                  <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className={modalStyles.modalSocialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {selectedMember.github && (
                  <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className={modalStyles.modalSocialLink}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            <div className={modalStyles.modalSection}>
              <h4>Tidligere prosjekter</h4>
              <ul>
                {selectedMember.tidligere_prosjekter.map((project: string, index: number) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>

            <div className={modalStyles.modalSection}>
              <h4>Praksisplasser</h4>
              <ul>
                {selectedMember.praksisplasser.map((place: string, index: number) => (
                  <li key={index}>{place}</li>
                ))}
              </ul>
            </div>

            <div className={modalStyles.modalSection}>
              <h4>Teknologier</h4>
              <div className={modalStyles.techTags}>
                {selectedMember.teknologier.map((tech: string, index: number) => (
                  <span key={index} className={modalStyles.techTag}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={modalStyles.modalSection}>
              <h4>Kontakt informasjon</h4>
              <div className={modalStyles.contactInfo}>
                <div className={modalStyles.contactItem}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>{selectedMember.email}</span>
                </div>
                {selectedMember.phone && selectedMember.phone.trim() !== "" && (
                  <div className={modalStyles.contactItem}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"/>
                    </svg>
                    <span>{selectedMember.phone}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {modalImageIndex !== null && (
        <div className={galleryStyles.imageModalOverlay} onClick={() => setModalImageIndex(null)}>
          <div className={galleryStyles.imageModalContainer} onClick={(e) => e.stopPropagation()}>
            <button
              className={galleryStyles.closeButton}
              onClick={() => setModalImageIndex(null)}
            >
              ×
            </button>
            <div className={galleryStyles.imageModalContent}>
              <Image
                src={galleryImages[modalImageIndex].src}
                alt={galleryImages[modalImageIndex].alt}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={galleryStyles.imageDescription}>
              {galleryImages[modalImageIndex].description}
            </div>
            <div className={galleryStyles.modalNavigation}>
              <button
                className={galleryStyles.navButton}
                onClick={() => setModalImageIndex(
                  modalImageIndex === 0 ? galleryImages.length - 1 : modalImageIndex - 1
                )}
                title="Previous image"
              >
                &#8249;
              </button>
              <span className={galleryStyles.imageCounter}>
                {modalImageIndex + 1} / {galleryImages.length}
              </span>
              <button
                className={galleryStyles.navButton}
                onClick={() => setModalImageIndex(
                  modalImageIndex === galleryImages.length - 1 ? 0 : modalImageIndex + 1
                )}
                title="Next image"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
