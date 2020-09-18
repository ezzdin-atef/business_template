const user = document.getElementById("user");
const dropdown = document.querySelector("#user .dropdown");

user.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display == "none" ? "block" : "none";
});