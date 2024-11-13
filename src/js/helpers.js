import signImage from "../assets/images/sign.jpeg";
import ventracImage from "../assets/images/ventrac.jpg";
import plowImage from "../assets/images/plow.webp";
import stripes2 from "../assets/images/stripes2.webp";
import stripes3 from "../assets/images/stripes3.webp";

const imageMap = {
  "sign.jpeg": signImage,
  "ventrac.jpg": ventracImage,
  "plow.webp": plowImage,
  "stripes2.webp": stripes2,
  "stripes3.webp": stripes3,
};

export function loadImage(imageName) {
  if (imageMap[imageName]) {
    return imageMap[imageName];
  } else {
    console.error(`Image not found: ${imageName}`);
    return null;
  }
}
