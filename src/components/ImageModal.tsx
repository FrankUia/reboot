import Image from "next/image";
import galleryStyles from "../app/styles/Gallery.module.css";

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface ImageModalProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function ImageModal({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrevious 
}: ImageModalProps) {
  return (
    <div
      className={galleryStyles.imageModalOverlay}
      onClick={onClose}
    >
      <div
        className={galleryStyles.imageModalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={galleryStyles.closeButton}
          onClick={onClose}
        >
          ×
        </button>
        <div className={galleryStyles.imageModalContent}>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className={galleryStyles.imageDescription}>
          {images[currentIndex].description}
        </div>
        <div className={galleryStyles.modalNavigation}>
          <button
            className={galleryStyles.navButton}
            onClick={onPrevious}
            title="Previous image"
          >
            &#8249;
          </button>
          <span className={galleryStyles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </span>
          <button
            className={galleryStyles.navButton}
            onClick={onNext}
            title="Next image"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
