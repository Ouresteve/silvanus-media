const images = [
  "Images/1765973486240.jpg",
  "Images/1765973565175.jpg",
  "Images/1765973555308.jpg",
  "Images/1765973518259.jpg",
  "Images/1765973581410.jpg",
  "Images/1765973616230.jpg"
];
const galleryGrid= document.getElementById("galleryGrid");
const viewer = document.getElementById("viewer");
const viewerImg= document.getElementById("viewerImg");
const viewerClose = document.getElementById("viewerClose");

images.forEach(src=>{
    const thumb=document.createElement("div");
    thumb.className="gallery-thumb";

    const img =document.createElement("img");
    img.src=src;

    img.addEventListener("click",()=> {
        viewer.style.display="block";
        viewerImg.src=src;
    

    });

    thumb.appendChild(img);
    galleryGrid.appendChild(thumb);
});

viewerClose.addEventListener("click",()=> {
    viewer.style.display="none";
});

viewer.addEventListener("click",e=> {
    if(e.target === viewer) {
        viewer.style.display="none";
    }
});