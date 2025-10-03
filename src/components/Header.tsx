import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/reboot.png"
          alt="Bachelorprosjekt 2025"
          width={500}
          height={200}
          style={{ objectFit: "contain" }}
        />
      </div>

      <p
        style={{
          fontSize: "1.4rem",
          lineHeight: "1.8",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        Vi er gruppe 16 og består av 5 studenter som sammen skal gjennomføre
        vårt bachelorprosjekt ved Universitetet i Agder.
      </p>
    </header>
  );
}
