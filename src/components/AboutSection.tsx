import separatorStyles from "../app/styles/Separators.module.css";

export default function AboutSection() {
  return (
    <section id="about" className="content-section about-section">
      <h2 className="title">Om Oss</h2>
      <div className={separatorStyles.titleSeparator}>
        <div className={separatorStyles.separatorLine}></div>
        <div className={separatorStyles.separatorDot}></div>
        <div className={separatorStyles.separatorLine}></div>
      </div>
      <p
        className="textarea"
        style={{ fontSize: "1.3rem", lineHeight: "1.8", maxWidth: "900px" }}
      >
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
  );
}
