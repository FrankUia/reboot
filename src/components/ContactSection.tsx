import separatorStyles from "../app/styles/Separators.module.css";

export default function ContactSection() {
  return (
    <section id="kontakt" className="content-section">
      <h2 className="title">Kontakt oss</h2>
      <div className={separatorStyles.titleSeparator}>
        <div className={separatorStyles.separatorLine}></div>
        <div className={separatorStyles.separatorDot}></div>
        <div className={separatorStyles.separatorLine}></div>
      </div>

      <div
        style={{
          background: "var(--card-bg)",
          borderRadius: "1rem",
          padding: "3rem",
          border: "1px solid var(--border-color)",
          backdropFilter: "blur(8px)",
          maxWidth: "700px",
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="var(--accent)"
            style={{ marginBottom: "1rem" }}
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>

        <p
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            color: "var(--text-secondary)",
            marginBottom: "2rem",
          }}
        >
          Er du interessert i å vite mer eller har noen spørsmål?
        </p>

        <div
          style={{
            background: "rgba(0, 208, 132, 0.1)",
            border: "1px solid rgba(0, 208, 132, 0.3)",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            display: "inline-block",
          }}
        >
          <p style={{ margin: "0", fontSize: "1.2rem", fontWeight: "600" }}>
            Kontakt:
            <a
              href="mailto:stinestr@uia.no"
              style={{
                color: "var(--accent)",
                textDecoration: "none",
                marginLeft: "0.5rem",
                fontSize: "1.3rem",
              }}
            >
              stinestr@uia.no
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
