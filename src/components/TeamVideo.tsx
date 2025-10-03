export default function TeamVideo() {
  return (
    <section className="team-video-section" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "4rem auto",
      maxWidth: "900px",
      padding: "0 2rem"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "800px",
        aspectRatio: "16/9",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
        border: "1px solid var(--border-color)"
      }}>
        <iframe
          src="https://drive.google.com/file/d/18jQHlf95cbUYuS4TbZCNjgiMvsEWX6Gq/preview"
          width="100%"
          height="100%"
          style={{
            border: "none",
            borderRadius: "1rem"
          }}
          allow="autoplay; encrypted-media"
          title="Team Video Presentation"
        />
      </div>
    </section>
  );
}
