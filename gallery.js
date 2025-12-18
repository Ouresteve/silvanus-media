const images = [
  "Images/1765973486240.jpg",
  "Images/1765973565175.jpg",
  "Images/1765973555308.jpg",
  "Images/1765973518259.jpg",
  "Images/1765973581410.jpg",
  "Images/1765973616230.jpg",
  "Images/1765973686377.jpg",
  "Images/1765973707686.jpg",
  "Images/1765973805283.jpg",
  "Images/1765973833739.jpg",
  "Images/1765973845484.jpg",
  "Images/1765973857737.jpg",
  "Images/1765973890803.jpg",
  
  "Images/1765973901293.jpg",
  "Images/1765973930023.jpg",
  "Images/1766072060426.jpg",
  "Images/1766072124248.jpg",
  "Images/1766072169770.jpg",
  "Images/1766072174953.jpg",
  "Images/1766072185557.jpg",
  
  "Images/1766072079172.jpg"
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