import separatorStyles from "../app/styles/Separators.module.css";

export default function ProductSection() {
  return (
    <section id="produkt" className="content-section product-section">
      <h2 className="title">Bachelor Prosjektet</h2>
      <div className={separatorStyles.titleSeparator}>
        <div className={separatorStyles.separatorLine}></div>
        <div className={separatorStyles.separatorDot}></div>
        <div className={separatorStyles.separatorLine}></div>
      </div>
      
      <div className="textarea" style={{ fontSize: "1.1rem", lineHeight: "1.8", maxWidth: "900px", textAlign: "left" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.2rem", color: "#00c9a7", fontWeight: "600", textAlign: "center" }}>
            Hva skal vi utvikle?
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "rgba(255, 255, 255, 0.9)", textAlign: "left" }}>
            Vi skal utvikle en kontekstbevisst LLM for kommunale saksbehandlere, bestående av to deler:
          </p>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
            <li style={{ marginBottom: "1.2rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              <strong style={{ color: "#00c9a7" }}>Desktop-klient:</strong> 
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> En klient som kan registrere brukerens arbeidskontekst, 
              som aktive applikasjoner, dokumenter, metadata og eventuelt innhold på skjermen, 
              og deretter la brukeren trigge hjelp fra modellen etter behov.</span>
            </li>
            <li style={{ paddingLeft: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              <strong style={{ color: "#00c9a7" }}>Backend/orchestrator:</strong> 
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> En backend som mottar kontekstdata fra klienten, 
              bearbeider og tilpasser denne informasjonen, og deretter sender forespørselen videre 
              til én eller flere spørsmål før svaret returneres tilbake til brukeren.</span>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.2rem", color: "#00c9a7", fontWeight: "600", textAlign: "center" }}>
            Viktige kvalitetsaspekter
          </h3>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              <strong style={{ color: "#00c9a7" }}>Brukervennlighet:</strong> 
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> Løsningen må være enkel å bruke og ikke forstyrre 
              den eksisterende arbeidsflyten.</span>
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              <strong style={{ color: "#00c9a7" }}>Ytelse og lav ressursbruk:</strong> 
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> Klienten skal ha minimal innvirkning 
              på systemets ytelse.</span>
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              <strong style={{ color: "#00c9a7" }}>Modularitet:</strong> 
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> Arkitekturen skal legge til rette for videreutvikling 
              og nye integrasjoner med tanke på arbeidsflyt og andre team som eventuelt skal jobbe 
              videre med prosjektet.</span>
            </li>
            <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              <strong style={{ color: "#00c9a7" }}>Stabilitet og pålitelighet:</strong> 
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> Systemet må fungere forutsigbart og 
              uten feil i daglig bruk.</span>
            </li>
            <li style={{ paddingLeft: "1.5rem", position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              <strong style={{ color: "#00c9a7" }}>Dokumentasjon:</strong> 
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> Kode og arkitektur skal være dokumentert.</span>
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.2rem", color: "#00c9a7", fontWeight: "600", textAlign: "center" }}>
            Kvalitetssikring
          </h3>
          <p style={{ marginBottom: "1.2rem", color: "rgba(255, 255, 255, 0.9)", textAlign: "left" }}>
            Ønsket kvalitet oppnås gjennom Definition of Done (DoD). Gruppen vil gjennom hver PI 
            ha en versjon av DoD. Ved første PI vil DoD se slik ut:
          </p>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.8rem", textAlign: "left" }}>
            <li style={{ marginBottom: "0.6rem", paddingLeft: "1.5rem", position: "relative", color: "rgba(255, 255, 255, 0.85)" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              Dokumentere valg av arkitektur og kartlegge begrensninger
            </li>
            <li style={{ marginBottom: "0.6rem", paddingLeft: "1.5rem", position: "relative", color: "rgba(255, 255, 255, 0.85)" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              Utarbeide liste med oversikt over relevante API-er
            </li>
            <li style={{ paddingLeft: "1.5rem", position: "relative", color: "rgba(255, 255, 255, 0.85)" }}>
              <span style={{ position: "absolute", left: 0, color: "#00c9a7", fontWeight: "bold" }}>•</span>
              Front-end prototype
            </li>
          </ul>

          <h4 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem", color: "#00c9a7", fontWeight: "600", textAlign: "center" }}>
            Plan og Backlogg
          </h4>
          <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
            <p style={{ marginBottom: "1rem" }}>
              <strong style={{ color: "#00c9a7" }}>Kvalitetssikring av plan:</strong>
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> Kontinuerlig utarbeiding i henhold til 
              PI-målsettinger og scrum-sprinter. Riktig retning sikres ved jevnlig kommunikasjon 
              mellom gruppemedlemmer og produkteier. Vi følger prinsippet om 
              tidlig varsling av forsinkelser eller problemer.</span>
            </p>
            <p style={{ marginBottom: "0" }}>
              <strong style={{ color: "#00c9a7" }}>Kvalitetssikring av backlogg:</strong>
              <span style={{ color: "rgba(255, 255, 255, 0.85)" }}> Konkrete, relevante og realistiske 
              oppgaver som justeres etter behov. Backlogg oppdateres kontinuerlig i henhold til plan.</span>
            </p>
          </div>

          <h4 style={{ fontSize: "1.3rem", marginBottom: "1rem", marginTop: "2rem", color: "#00c9a7", fontWeight: "600", textAlign: "center" }}>
            Estimater og Ressursbruk
          </h4>
          <div style={{ textAlign: "left" }}>
            <p style={{ marginBottom: "1rem", color: "rgba(255, 255, 255, 0.85)" }}>
              Hvert gruppemedlem arbeider 37,5 timer per uke, med tilgjengelighet for samarbeid 
              i perioden 10:00-15:00 på hverdager. Ved å la hvert medlem fokusere på én oppgave 
              om gangen sikrer vi tydelig ressursfordeling og bedre oversikt over progresjon. 
              Tidsestimering diskuteres i begynnelsen og underveis i sprintene.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              Ressursbruk evalueres i retrospekt ved hver sprint-review samt i PI-møte. 
              Vurderingen baseres på forholdet mellom planlagt og levert arbeid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
