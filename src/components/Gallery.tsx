import Image from "next/image";
import { useState, useEffect } from "react";
import galleryStyles from "../app/styles/Gallery.module.css";

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface GalleryProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function Gallery({ images, onImageClick }: GalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="content-section">
      <div className={galleryStyles.galleryContainer}>
        <div className={galleryStyles.imageGallery}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${galleryStyles.galleryImage} ${
                index === currentImageIndex ? galleryStyles.active : ""
              }`}
              onClick={() => onImageClick(index)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
          <div className={galleryStyles.galleryIndicators}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${galleryStyles.indicator} ${
                  index === currentImageIndex
                    ? galleryStyles.activeIndicator
                    : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
