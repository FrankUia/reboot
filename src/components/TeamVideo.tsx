export default function TeamVideo() {
  return (
    <section
      className="team-video-section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "4rem auto",
        maxWidth: "900px",
        padding: "0 2rem",
        gap: "4rem"
      }}
    >
      {/* First Video */}
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            aspectRatio: "16/9",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            border: "1px solid var(--border-color)"
          }}
        >
          <iframe
            src="https://drive.google.com/file/d/1vzvK2f2OzThhaHWJ329nfBKhIKDIeNx6/preview"
            width="100%"
            height="100%"
            style={{
              border: "none"
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Team Video Presentation"
          />
        </div>

        {/* Caption */}
        <p
          style={{
            marginTop: "0.75rem",
            fontSize: "0.9rem",
            color: "#555",
            textAlign: "center"
          }}
        >
          Film klippet av Nina Strand
        </p>
      </div>

      {/* Second Video - Status 1 */}
      <div style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#333"
          }}
        >
          Status 1
        </h2>
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            aspectRatio: "16/9",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            border: "1px solid var(--border-color)"
          }}
        >
          <iframe
            src="https://drive.google.com/file/d/1qrnF49yuTcrJ7dz5MmZ1gcBnX5LOCHXZ/preview"
            width="100%"
            height="100%"
            style={{
              border: "none"
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Status 1 Video"
          />
        </div>
      </div>
    </section>
  );
}
