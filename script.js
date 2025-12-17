const text = "Connecting People through Photography and Videography by Capturing Moments That Last Forever.";
let index = 0;
const images = [
  "Images/1765973486240.jpg",
  "Images/1765973565175.jpg",
  "Images/1765973555308.jpg",
  "Images/1765973518259.jpg",
  "Images/1765973581410.jpg",
  "Images/1765973616230.jpg"
];


function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index)
    while (index==80){
        document.getElementById("typing-text").textContent -= text.charAt(index);
        index--;
    }
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;


const sliderTrack = document.getElementById("sliderTrack");

// duplicate images for seamless looping
const sliderImages = images.concat(images);

sliderImages.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Silvanus Media Photography";
  sliderTrack.appendChild(img);
});

let position = 0;
const speed = 0.4; // lower = slower, smoother

function moveSlider() {
  position -= speed;
  sliderTrack.style.transform = `translateX(${position}px)`;

  // reset when half passed (because we duplicated)
  if (Math.abs(position) >= sliderTrack.scrollWidth / 2) {
    position = 0;
  }

  requestAnimationFrame(moveSlider);
}

moveSlider();
