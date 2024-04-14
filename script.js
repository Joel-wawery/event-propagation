const list = document.getElementById("expandableList");

list.addEventListener("click", function(event) {
  // Check if clicked element is a list item (li)
  if (event.target.tagName === "LI") {
    const clickedItem = event.target;
    const subList = clickedItem.nextElementSibling; // Get the sub-list

    // Toggle visibility using classList
    subList.classList.toggle("visible");
  }
});
