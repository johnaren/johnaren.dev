const dropDownMenu = document.getElementById("drop-down-menu");
const dropDownMenuButton = document.getElementById("drop-down-menu-button");
const dropDownMenuList = document.getElementById("drop-down-menu-list");

function displayDropDownMenu() {
	dropDownMenuList.hidden = false;
	dropDownMenu.addEventListener("mouseleave", hideDropDownMenu);
}

function hideDropDownMenu() {
	dropDownMenuList.hidden = true;
}

dropDownMenuButton.addEventListener("mouseover", displayDropDownMenu);
