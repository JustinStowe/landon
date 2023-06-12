import React, { useEffect } from "react";
// import galleryImages from "./data/gallery_images.json";
import { useController } from "../context/useController";
function WelcomeDiv() {
  const { galleryImages, loadGalleryImages } = useController();
  // const [galleryImages, setGalleryImages] = useState([]);

  // const loadGalleryImages = async () => {
  //   const response = await fetch(
  //     "https://0kbeg1cv46.execute-api.us-east-1.amazonaws.com/Production/accessibilities"
  //   );
  //   let jsonData = await response.json();
  //   setGalleryImages(jsonData);
  // };
  useEffect(() => {
    loadGalleryImages();
  }, []);
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
}

export default WelcomeDiv;
