const weddingPackages= [
    {
        title: "Classic Wedding",
        price:"Ksh 25,000.00",
        features:[
            "A4 mount",
            "1 Photographer",
            "300 Professionally Edited photos",
            "Full Video Coverage",
            "8GB Flash Disk",
            "Cloud Storage"
        ]
    },
    {
        title:"Standard Wedding",
        price: "Ksh 55,000.00",
        features: [
            "A3 Mount",
            "2 Photographers",
            "2 Videographers",
            "400 Professionally Edited photos",
            "Drone services",
            "Full Wedding Day Video Coverage",
            "16GB Flash Disk",
            "Cloud Storage"
        ],
        highlight: true
    },
    {
        title:"Premium Wedding",
        price: "Ksh 95000.00",
        features: [
            "A2 Mount",
            "2 Photographers",
            "2 Videographers",
            "600 Professionally Edited photos",
            "30 Pages Photobook",
            "Drone services",
            "32GB Flash drive",
            "Full Wedding Day Video Coverage",
            "Cloud Storage"
        ]
    }

];

const personalPackages=[
    {
        title:"Portrait Session",
        price:"Ksh 1000.00",
        features: [
            "1 hour Session",
            "Studio or Outdoor",
            "10 Professionally Edited Photos",
            "Online Gallery"
        ],
        highlight: true
    },
    {
        title: "Event Coverage",
        price:" From Ksh 10,000.00",
        features: [
            "Professional editing",
            "Online Gallery",
            
        ]
    }
];

function createPackageCard(pkg){
    return`
    <div class="package-card ${pkg.highlight ? "featured":""}">
    <h3>${pkg.title}</h3>
    <p class="price">${pkg.price}</p>
    <ul>
        ${pkg.features.map(feature =>`<li>${feature}</li>`).join("")}
    </ul>
    <a href="https://wa.me/254795637895" class="cta">Book Now </a>
    </div>
     `;
}

document.addEventListener("DOMContentLoaded",()=>{
    const weddingContainer= document.getElementById("wedding-packages");
    const personalContainer= document.getElementById("personal-packages");
    weddingPackages.forEach(pkg=> {
        weddingContainer.innerHTML += createPackageCard(pkg);
    });
    personalPackages.forEach(pkg  => {
        personalContainer.innerHTML += createPackageCard(pkg);
    });
});