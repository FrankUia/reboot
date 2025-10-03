import Image from "next/image";
import { TeamMember } from "../types/TeamMember";
import modalStyles from "../app/styles/Modal.module.css";

interface TeamMemberModalProps {
  member: TeamMember;
  onClose: () => void;
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  return (
    <div
      className={modalStyles.modalOverlay}
      onClick={onClose}
    >
      <div
        className={modalStyles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={modalStyles.modalClose}
          onClick={onClose}
        >
          ×
        </button>

        <div className={modalStyles.modalHeader}>
          <div className={modalStyles.modalImageContainer}>
            <Image
              src={member.image}
              alt={`${member.name}'s profile`}
              fill
              className={modalStyles.modalImage}
              quality={95}
            />
          </div>
          <h3 className={modalStyles.modalTitle}>{member.name}</h3>

          <div className={modalStyles.modalSocialLinks}>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={modalStyles.modalSocialLink}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className={modalStyles.modalSocialLink}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {member.tidligere_prosjekter &&
          member.tidligere_prosjekter.length > 0 && (
            <div className={modalStyles.modalSection}>
              <h4>Tidligere prosjekter</h4>
              <div className={modalStyles.techTags}>
                {member.tidligere_prosjekter.map(
                  (project, index) => (
                    <span key={index} className={modalStyles.techTag}>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "inherit",
                          textDecoration: "underline",
                        }}
                      >
                        {project.name}
                      </a>
                    </span>
                  )
                )}
              </div>
            </div>
          )}

        <div className={modalStyles.modalSection}>
          <h4>Praksisplasser</h4>
          <ul>
            {member.praksisplasser.map(
              (place: string, index: number) => (
                <li key={index}>{place}</li>
              )
            )}
          </ul>
        </div>

        <div className={modalStyles.modalSection}>
          <h4>Teknologier</h4>
          <div className={modalStyles.techTags}>
            {member.teknologier.map(
              (tech: string, index: number) => (
                <span key={index} className={modalStyles.techTag}>
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
        <div className={modalStyles.modalSection}>
          <h4>Kontakt informasjon</h4>
          <div className={modalStyles.contactInfo}>
            <div className={modalStyles.contactItem}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>{member.email}</span>
            </div>
            {member.phone && member.phone.trim() !== "" && (
              <div className={modalStyles.contactItem}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
                </svg>
                <span>{member.phone}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
