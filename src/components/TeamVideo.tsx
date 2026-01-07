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
        padding: "0 2rem"
      }}
    >
      {/* Video wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
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
    </section>
  );
}
