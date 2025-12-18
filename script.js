
let index = 0;
const images = [
  "Images/1765973486240.jpg",
  "Images/1765973565175.jpg",
  "Images/1765973555308.jpg",
  "Images/1765973518259.jpg",
  "Images/1765973581410.jpg",
  "Images/1765973616230.jpg",
  "Images/1766072169770.jpg",
  "Images/a7e118d354154dc4853b013ffb7f2dc1.jpg"
];

/*
function typeEffect() {
  if(index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index)
    
    index++;
    setTimeout(typeEffect, 100);
  }
}*/

window.onload = function() {
    const element = document.getElementById("typing-text");
    const texts = [ "Connecting People through Photography and Videography by Capturing Moments That Last Forever.",
      "From personal captures to weddings, shows & unforgettable moments."
    ];
    let textIndex= 0;
    let charIndex=0;
    let isDeleting= false;

    const typingSpeed=80;
    const deletingSpeed=40;
    const pauseAfterTyping=2000;
    const pauseAfterDeleting=500;

    /*const cursor = this.document.createElement("span");
    cursor.textContent="|";
    cursor.style.marginLeft="4px";
    cursor.style.animation="blink is infinite";
    element.appendChild(cursor);*/

    const style = this.document.createElement("style");
    style.textContent = `@keyframes blink {
          0% { opacity:1; }
          50% { opacity:0;}
          100%{ opacity: 1;}
      }
    `;
    document.head.appendChild(style);
    function typeEffect() {
        const currentText = texts[textIndex];

        if (!isDeleting) {
          element.textContent= currentText.slice(0,charIndex + 1);
          charIndex++;

          if (charIndex ===currentText.length) {
            setTimeout(()=> (isDeleting=true),pauseAfterTyping);
          }
        }else {
          element.textContent= currentText.slice(0,charIndex-1);
          charIndex--;

          if ( charIndex===0) {
            isDeleting=false;
            textIndex = ( textIndex + 1) % texts.length;
            setTimeout(()=>{},pauseAfterDeleting);
          }
        }
        setTimeout(
          typeEffect,
          isDeleting ? deletingSpeed : typingSpeed
        );
    }
    typeEffect();
};


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
const speed = 1.0; // lower = slower, smoother

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
