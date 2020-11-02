// Scripts for nav section
const navSection = document.querySelector(".nav-section");
const navBtn = document.querySelector(".nav-btn");
const closeNavDiv = document.querySelector(".cancel_div");
const closeNavIcon = document.querySelector(".cancel-icon");
const closeAsideBar = document.querySelector(".cancel-icon");
const hamBurger = document.querySelector(".nav-btn");
const asideBar = document.querySelector(".aside");

function openNav() {
  asideBar.classList.add("open");
  closeNavIcon.style.display = "block";
  navBtn.style.opacity = "0";
}

function closeNav() {
  asideBar.classList.remove("open");
  closeNavIcon.style.display = "none";

  navBtn.style.opacity = "1";
}
