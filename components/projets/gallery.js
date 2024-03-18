import { useState, useCallback } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import "react-bnb-gallery/dist/style.css";
import Image from "next/image";

const LightBoxGallery = props => {
  const pictures = props.pictures;

  const IMAGES = pictures.map((gallerie, key) => {
    // console.log(gallerie);
    return {
      photo: gallerie[1],
      key: key,
      thumbnail: gallerie[2],
      caption: gallerie[0],
    };
  });

  //console.log(IMAGES);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);

  const openLightbox = key => {
    setCurrentImage(key);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    //setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div id="gallery_container">
      <h3>Galerie</h3>
      <div className="gallerie">
        {IMAGES.map((image, key) => (
          <figure style={{ width: "100%", height: "150px", margin: 0 }} key={key}>
            <Image src={image.photo} layout="fill" objectFit="cover" onClick={() => openLightbox(image.key)} />
          </figure>
        ))}
      </div>
      {/* <Gallery photos={IMAGES} onClick={e => openLightbox(e)} className="gallerie" /> */}
      <ReactBnbGallery activePhotoIndex={currentImage} show={isOpen} photos={IMAGES} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default LightBoxGallery;
