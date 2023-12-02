const products = [
  {
    id: 1,
    image: "1-asus zenbook pro duo.png",
    description:
      "Asus Zenbook Pro Duo Oled Pantalla Touch 17 16gb Ram 1tb Ssd Color Celestial Blue",
    price: 2.364932,
  },
  {
    id: 2,
    image: "1-rog strix g16.png",
    description:
      "Notebook Gamer ROG Strix g16 Pantalla 16 16gb Ram 1tb Ssd 16 Rtx 4070 8gb ",
    price: 2.167999,
  },
  {
    id: 3,
    image: "1-thinkpad Yoga X1.png",
    description:
      "Notebook Thinkpad X1 Yoga 6ta generacion Pantalla 14 512gb Ssd 16gb Win 11 Pro",
    price: 1.235,
  },
  {
    id: 4,
    image: "1-asus zenbook pro duo.png",
    description:
      "Asus Zenbook Pro Duo Oled Pantalla Touch 17 16gb Ram 1tb Ssd Color Celestial Blue",
    price: 2.364932,
  }
];

const indexcontrollers = {
  home: function (req, res) {
    res.render("index", { title: "ElectroGroup", products });
  },
  about: function (req, res) {
    res.render("about", { title: "about", about });
  },
  contact: function (req, res) {
    res.render("contact", { title: "contact", contact });
  },
};

module.exports = indexcontrollers;
