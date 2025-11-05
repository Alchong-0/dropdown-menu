import "./styles.css";
const dropdownMenuElement = document.getElementsByClassName("menu");

function showDropdownMenu(e) {
    e.currentTarget.getElementsByClassName("dropdown-content")[0].classList.add("show");
}

function hideDropdownMenu(e) {
    e.currentTarget.getElementsByClassName("dropdown-content")[0].classList.remove("show");
}

for(const elem of dropdownMenuElement) {
    elem.addEventListener("mouseover", showDropdownMenu);
    elem.addEventListener("mouseleave", hideDropdownMenu);
}