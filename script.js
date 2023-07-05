
var iconData = [
  { name: "Icon 1", imageUrl: "icon1.png" },
  { name: "Icon 2", imageUrl: "icon2.png" },
  { name: "Icon 3", imageUrl: "icon3.png" },
  // Add more icon data objects as needed
];

function searchIcons() {
  var searchTerm = document.querySelector(".search-input").value.toLowerCase();
  var filteredIcons = iconData.filter(function(icon) {
    return icon.name.toLowerCase().includes(searchTerm);
  });

  displayIcons(filteredIcons);
}

function displayIcons(icons) {
  var iconContainer = document.getElementById("iconContainer");
  iconContainer.innerHTML = "";

  icons.forEach(function(icon) {
    var iconDiv = document.createElement("div");
    iconDiv.className = "bank-icon";
    iconDiv.style.backgroundImage = "url(" + icon.imageUrl + ")";
    iconContainer.appendChild(iconDiv);
  });
}
