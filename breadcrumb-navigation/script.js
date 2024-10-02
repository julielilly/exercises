// Den givne datastruktur til breadcrumb-navigation
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Funktion til at generere breadcrumb-navigation
function generateBreadcrumb() {
  // Få fat i breadcrumb-listen fra DOM'en
  const breadcrumbList = document.getElementById("breadcrumb");

  // Gennemløb dataene og tilføj hvert punkt til listen
  bc.forEach((item, index) => {
    const li = document.createElement("li"); // Opretter et nyt listeelement

    // Hvis det ikke er det sidste element, tilføj et link
    if (index < bc.length - 1) {
      const link = document.createElement("a"); // Opretter et link-element
      link.href = item.link; // Sætter linkets URL
      link.textContent = item.name; // Sætter linkets tekst
      li.appendChild(link); // Tilføjer linket til listeelementet
    } else {
      li.textContent = item.name; // For det sidste element, tilføj kun teksten
    }

    breadcrumbList.appendChild(li); // Tilføj listeelementet til breadcrumb-listen
  });
}

// Tilføj event listener til knappen
document.getElementById("generateBtn").addEventListener("click", generateBreadcrumb);
