const images = [
  "Images/1765973486240.jpg",
  "Images/1765973565175.jpg",
  "Images/1765973555308.jpg",
  "Images/1765973518259.jpg",
  "Images/1765973581410.jpg",
  "Images/1765973616230.jpg"
];
const grid= document.getElementById("thumbGrid");

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
const closeBtn= document.getElementById("closeBtn");

images.forEach(src=> {
    const img=document.createElement("img");
    img.src=src;
    img.onclick = () => {
        lightbox.style.display="flex";
        lightboxImg.src=src;
    };
    grid.appendChild(img);
});
closeBtn.onclick= () => {
    lightbox.style.display="none";
};

lightbox.onclick=e=>{
        if (e.target===lightbox){
            lightbox.style.display="none";
        }
};