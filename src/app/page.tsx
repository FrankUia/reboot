import "./styles.css";
import Image from "next/image";

export default function Home() {
  const teamMembers = [
    {
      name: "Medlem 1",
      role: "Rolle",
      image: "/medlem_bilder/Frank.jpg",
      description:
        "Din bakgrunn, tekniske interesser og ambisjon for bachelorprosjektet...",
    },
    {
      name: "Jon Engravslia Aarebakk",
      role: "Rolle",
      image: "/medlem_bilder/Jon.jpg",
      description:
        "Spesielt interessert i systemutvikling, systemarkitektur, backend-utvikling og volleyball. Jeg har mest erfaring med web-dev.",
    },
    {
      name: "Kata-Loore Tamm",
      role: "Rolle",
      image: "/medlem_bilder/Kata.png",
      description: "Trives best med prosjekter som involverer hele utviklingsløpet, fra planlegging og databasedesign til implementering av backend og utvikling av frontend.",
    },
    {
      name: "Stine",
      role: "Rolle",
      image: "/medlem_bilder/stine.JPEG",
      description: "26 år, har fra tidligere en bachelor i sykepleie. Mine interresser er systemutvikling, databaser, UX design og frontend.",
    },
    {
      name: "Jørgen",
      role: "Rolle: Databasesystem Administrator",
      image: "/medlem_bilder/JørgenMango.jpg",
      description: "Interesse for databasesystemer, og backend utvikling i C#.",
    },
  ];

  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <span className="nav-brand">Bachelorprosjekt</span>
          <div className="nav-links">
            <a href="#hjem" className="nav-link">
              Hjem
            </a>
            <a href="#team" className="nav-link">
              Vårt Team
            </a>
            <a href="#about" className="nav-link">
              Om Prosjektet
            </a>
          </div>
        </div>
      </nav>

      <main className="main">
        <header className="header">
          <h1 className="title">Bachelorprosjekt 2025</h1>
          <p>
            Vi er en gruppe på 5 studenter som sammen skal gjennomføre vårt
            bachelorprosjekt ved Universitetet i Agder.
          </p>
        </header>

        <section id="team" className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="profile-image-container">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    fill
                    className="profile-image"
                  />
                ) : (
                  <div className="profile-image">
                    <span>No Image</span>
                  </div>
                )}
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <textarea
                className="textarea"
                placeholder="Din bakgrunn, tekniske interesser og ambisjon for bachelorprosjektet..."
                rows={6}
              />
            </div>
          ))}
        </section>

        <section id="about" className="team-card">
          <h2 className="title">Om Prosjektet</h2>
          <textarea
            className="textarea"
            placeholder="Beskriv prosjektet, gruppens mål og ambisjoner, teknologivalg, og eventuelle samarbeidspartnere..."
            rows={8}
          />
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Bachelorprosjekt - Universitetet i Agder</p>
      </footer>
    </div>
  );
}
