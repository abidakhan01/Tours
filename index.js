let image1 = "./assets/img1.jpg";
let image2 = "./assets/img2.jpg";
let image3 = "./assets/img3.jpg";
let image4 = "./assets/img4.jpg";
let image5 = "./assets/img5.jpg";
let image6 = "./assets/img6.jpg";

let arr = [
  {
    image: image6,
    titleOne: "$6.4324",
    titleTwo: "Best Of Salzburg & Vienna In 8 Days Tour",
    titleThree:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
  },
  {
    image: image3,
    titleOne: "$65.4624",
    titleTwo: "Best Of Paris In 7 Days Tour",
    titleThree:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    image: image4,
    titleOne: "$1.43624",
    titleTwo: "Best Of Ireland In 14 Days Tour",
    titleThree:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    image: image5,
    titleOne: "$23.65",
    titleTwo: "Best Of Ireland In 14 Days Tour",
    titleThree:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    image: image2,
    titleOne: "$62.654",
    titleTwo: "Best Of Ireland In 14 Days Tour",
    titleThree:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    image: image1,
    titleOne: "$45.624",
    titleTwo: "Best Of Ireland In 14 Days Tour",
    titleThree:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
];

let title = document.getElementById("head");
title.innerHTML += `<h1 class ="Tours">Our Tour </h1><hr>`;

for (let i = 0; i < arr.length; i++) {
  let card = document.getElementById("main");
  card.innerHTML += ` <div class="container">
<img class="img" src="${arr[i].image}" alt="" />
<h5 class="para">${arr[i].titleOne}</h5>
<div class="heading">
  <h3 class="head">${arr[i].titleTwo}</h3>
  <p class="para1">${arr[i].titleThree} <span class="more-content hidden">${arr[i].titleThree}</span>
  <button class="btno22">Read More</button></P>
</div>
  <button class="btn2">Not intrested</button>
</div>`;
  let button = document.querySelectorAll(".btn2");

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
      let btn0 = button[i].closest(".container");
      if (btn0) {
        btn0.remove();
      }
      if (document.querySelectorAll(".container").length === 0) {
        head.style.display = "none";
        card.innerHTML += `<div class="secmain">
        <h2 class="headying">NO Tours Left </h2>
        <button id ="btnn">Refresh</button>
        </div>`;
      }
      let card22 = document.getElementById("btnn");
      card22.addEventListener("click", () => {
        location.reload();
      });
    });
  }
}
let buttons = document.querySelectorAll(".btno22");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let moreContent = buttons[i].previousElementSibling;
    moreContent.classList.toggle("hidden");
    buttons[i].textContent = moreContent.classList.contains("hidden")
      ? "see more"
      : "see less";
  });
}
