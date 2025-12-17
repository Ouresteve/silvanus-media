const text = "About Silyvanus Media";

let index=0
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;
