import carrots from "public/static/images/carrots.jpg";
import chili from "public/static/images/chili.jpg";
import latvia from "public/static/images/latvia.jpg";
import lemon from "public/static/images/lemon.jpg";
import onion from "public/static/images/onion.jpg";
import tomatoes from "public/static/images/tomatoes.jpg";
import veg from "public/static/images/veg.jpg";
import veg2 from "public/static/images/veg2.jpg";

const Images = [
  {
    id: 1,
    src: carrots,
    alt: "carrots",
    title: "carrots",
  },
  {
    id: 2,
    src: chili,
    alt: "chili",
    title: "chili",
  },
  {
    id: 3,
    src: latvia,
    alt: "latvia",
    title: "latvia",
  },
  {
    id: 4,
    src: lemon,
    alt: "lemon",
    title: "lemon",
  },
  {
    id: 5,
    src: onion,
    alt: "onion",
    title: "onion",
  },
  {
    id: 6,
    src: tomatoes,
    alt: "tomatoes",
    title: "tomatoes",
  },
  {
    id: 7,
    src: veg,
    alt: "veg",
    title: "veg",
  },
  {
    id: 8,
    src: veg2,
    alt: "veg2",
    title: "veg2",
  },
];

const ImagesSlider = [Images[0], Images[1], Images[6], Images[7]];
const ImagesCarousel = [Images[2], Images[3], Images[4], Images[5]];

export { Images, ImagesSlider, ImagesCarousel };
