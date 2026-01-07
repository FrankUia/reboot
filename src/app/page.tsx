"use client";

import { useEffect, useState } from "react";
import { TeamMember } from "../types/TeamMember";
import sidebarStyles from "./styles/Sidebar.module.css";

// Components
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TeamVideo from "../components/TeamVideo";
import TeamMembers from "../components/TeamMembers";
import Gallery from "../components/Gallery";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import TeamMemberModal from "../components/TeamMemberModal";
import ImageModal from "../components/ImageModal";

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  // Gallery images
  const galleryImages: GalleryImage[] = [
    {
      src: "/gallery/techpoint.jpg",
      alt: "TechPoint konferanse 2025",
      description: "En gjeng som lar seg inspirere på konferanse!",
    },
    {
      src: "/gallery/techpoint2.jpg",
      alt: "TechPoint konferanse 2025",
      description:
        "Fullt fokus og god stemning på konferansen! (Vi tok oss noen kreative friheter, Frank var syk den dagen 😉)",
    },
    {
      src: "/gallery/techpoint3.jpg",
      alt: "TechPoint konferanse 2025",
      description: "En fornøyd gjeng på Techpoint!",
    },
    {
      src: "/gallery/cryptography.jpg",
      alt: "IS-214 Cryptography Competition 2025",
      description:
        "Gruppen får utdelt premie for førsteplass under kryptografi-konkurransen i faget IS-214",
    },
  ];

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Frank Hovet",
      image: "/medlem_bilder/Frank.jpg",
      description:
        "26 år, med bachelor i sykepleie. Brenner for backend-utvikling og systemarkitektur, med særlig interesse for programmering i Python",
      linkedin: "https://www.linkedin.com/in/frank-hovet/",
      github: "https://github.com/FrankUia",
      email: "frankh@uia.no",
      phone: "+47 46 95 69 34",
      tidligere_prosjekter: [
        {
          name: "IS-218 Kartverket",
          href: "https://github.com/simholmen/IS218-gruppe5-oppgave5",
        },
        {
          name: "IS-202 Kartverket",
          href: "https://github.com/adrianoien/KartverketApplikasjon",
        },
      ],
      praksisplasser: ["Kristiansand Kommune - Internship"],
      teknologier: ["Python", "Supabase", "MVC ASP.Net", "React"],
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
      tidligere_prosjekter: [
        {
          name: "Gruppe 6 Kartverket",
          href: "https://github.com/JonAarebakk/Gruppe6_kartverket",
        },
      ],
      praksisplasser: ["La Famiglia - Utvikle ny nettside"],
      teknologier: ["JavaScript", "React", "MVC ASP.NET", "PostgreSQL"],
    },
    {
      name: "Kata-Loore Tamm",
      image: "/medlem_bilder/Kata.png",
      description:
        "Trives best med prosjekter som involverer hele utviklingsløpet, fra planlegging og databasedesign til implementering av backend og utvikling av frontend.",
      linkedin: "https://www.linkedin.com/in/katalooretamm",
      github: "https://github.com/KataLoore",
      email: "katalooret@uia.no",
      phone: "",
      tidligere_prosjekter: [
        {
          name: "Gruppe 6 Kartverket",
          href: "https://github.com/JonAarebakk/Gruppe6_kartverket",
        },
      ],
      praksisplasser: ["Phonero"],
      teknologier: ["PHP", "Python", "PostgreSQL", ".NET"],
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
      tidligere_prosjekter: [
        {
          name: "Gruppe 6 Kartverket",
          href: "https://github.com/JonAarebakk/Gruppe6_kartverket",
        },
        {
          name: "Personlig portefølje",
          href: "https://stine060199.myportfolio.com/",
        },
      ],
      praksisplasser: ["Phonero - IT og utvikling"],
      teknologier: ["HTML og CSS", "React", "MVC ASP.NET", "PostgreSQL"],
    },
    {
      name: "Jørgen",
      image: "/medlem_bilder/Jørgen.jpg",
      description:
        "28 år, har tidligere bachelor i psykologi. Interesse for databasesystemer, og backend utvikling i C#. Lærer meg Python for øyeblikket.",
      linkedin:
        "https://www.linkedin.com/in/j%C3%B8rgen-ege-893063369/?originalSubdomain=no",
      github: "https://github.com/JorgenEge",
      email: "jorgee17@uia.no",
      phone: "+47 95 90 94 40",
      tidligere_prosjekter: [
        {
          name: "Gruppe 6 Kartverket",
          href: "https://github.com/JonAarebakk/Gruppe6_kartverket",
        },
      ],
      praksisplasser: ["La Famiglia - Utvikle ny nettside"],
      teknologier: ["PostgreSQL", "C#", "Python", "PHP", "MVC ASP.NET"],
    },
  ];

  // Handle modal functions
  const handleImageModalNext = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex(
        modalImageIndex === galleryImages.length - 1 ? 0 : modalImageIndex + 1
      );
    }
  };

  const handleImageModalPrevious = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex(
        modalImageIndex === 0 ? galleryImages.length - 1 : modalImageIndex - 1
      );
    }
  };

  // Scroll progress and navigation effect
  useEffect(() => {
    const handleScroll = () => {
      // Update progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progressPercent = Math.max(15, (scrollTop / docHeight) * 100); // Minimum 15% visibility

      const progressBar = document.querySelector(
        `.${sidebarStyles.progressBar}`
      ) as HTMLElement;
      if (progressBar) {
        progressBar.style.height = `${progressPercent}%`;
      }

      // Update active section based on scroll position
      const sidebarLinks = document.querySelectorAll(
        `.${sidebarStyles.sidebarLink}`
      );
      let currentSection = "hjem";

      // Simple approach: check scroll position relative to document height
      const sectionScrollPercent = (scrollTop / (docHeight || 1)) * 100;

      if (sectionScrollPercent > 75) {
        currentSection = "kontakt"; // Bottom = contact section
      } else if (sectionScrollPercent > 55) {
        currentSection = "about"; // About section
      } else if (sectionScrollPercent > 25) {
        currentSection = "team"; // Team section
      } else {
        currentSection = "hjem"; // Top = home section
      }

      // Remove active class from all links
      sidebarLinks.forEach((link) =>
        link.classList.remove(sidebarStyles.active)
      );

      // Add active class to current section
      const activeLink = document.querySelector(
        `[data-section="${currentSection}"]`
      );
      if (activeLink) {
        activeLink.classList.add(sidebarStyles.active);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content">
        <div id="hjem"></div>
        <Header />
        <TeamVideo />
        <TeamMembers 
          teamMembers={teamMembers}
          onMemberSelect={setSelectedMember}
        />
        <Gallery 
          images={galleryImages}
          onImageClick={setModalImageIndex}
        />
        <AboutSection />
        <ContactSection />

        <footer className="footer">
          <p>© 2025 Bachelorprosjekt - Universitetet i Agder</p>
        </footer>
      </main>

      {/* Modals */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      {modalImageIndex !== null && (
        <ImageModal
          images={galleryImages}
          currentIndex={modalImageIndex}
          onClose={() => setModalImageIndex(null)}
          onNext={handleImageModalNext}
          onPrevious={handleImageModalPrevious}
        />
      )}
    </div>
  );
}
