import "./styles.css";
const dropdownMenuElement = document.getElementsByClassName("menu");

function showDropdownMenu(e) {
    for(const child of e.target.children) {
        if(child.className == "option") {
            child.style.display = "block";
        }
    }
}

function hideDropdownMenu(e) {
    for(const child of e.target.children) {
        if(child.className == "option") {
            child.style.display = "none";
        }
    }
}

for(const elem of dropdownMenuElement) {
    elem.addEventListener("mouseover", showDropdownMenu);
    elem.addEventListener("mouseleave", hideDropdownMenu);
}