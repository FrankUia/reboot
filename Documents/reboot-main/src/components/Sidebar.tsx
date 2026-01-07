import Image from "next/image";
import sidebarStyles from "../app/styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarContent}>
        <div className={sidebarStyles.sidebarBrand}>
          <Image
            src="/reboot.png"
            alt="Reboot Logo"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={sidebarStyles.sidebarNavigation}>
          <div className={sidebarStyles.scrollProgress}>
            <div className={sidebarStyles.progressBar}></div>
          </div>
          <div className={sidebarStyles.sidebarLinks}>
            <a
              href="#hjem"
              className={sidebarStyles.sidebarLink}
              data-section="hjem"
            >
              <span className="link-indicator"></span>
              Hjem
            </a>
            <a
              href="#team"
              className={sidebarStyles.sidebarLink}
              data-section="team"
            >
              <span className="link-indicator"></span>
              Vårt Team
            </a>
            <a
              href="#about"
              className={sidebarStyles.sidebarLink}
              data-section="about"
            >
              <span className="link-indicator"></span>
              Om oss
            </a>
            <a
              href="#produkt"
              className={sidebarStyles.sidebarLink}
              data-section="produkt"
            >
              <span className="link-indicator"></span>
              Bachelor Prosjektet
            </a>
            <a
              href="#kontakt"
              className={sidebarStyles.sidebarLink}
              data-section="kontakt"
            >
              <span className="link-indicator"></span>
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
