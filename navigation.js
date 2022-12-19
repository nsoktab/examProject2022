dropdown_ids = ["dropdown_about", "dropdown_nature"];
active_dropdown = null;

function handle_dropdowns() {
  for (const dropdown_id of dropdown_ids) {
    let dropdown = document.querySelector("#" + dropdown_id);
    if (dropdown_id == active_dropdown) {
      dropdown.querySelector(".dropdown-content").classList.add("active");
    } else {
      dropdown.querySelector(".dropdown-content").classList.remove("active");
    }
  }
}

for (const dropdown_id of dropdown_ids) {
  let dropdown = document.querySelector("#" + dropdown_id);

  dropdown.addEventListener("click", function onClick() {
    dropdown.querySelector(".dropdown-content").classList.toggle("active");
    if (active_dropdown == dropdown_id) {
      active_dropdown = null;
    } else {
      active_dropdown = dropdown_id;
    }
    handle_dropdowns();
  });
}
