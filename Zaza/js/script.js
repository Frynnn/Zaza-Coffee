// Toogle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
  }
});

// Toogle class active search box
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

const search = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
  });
document.addEventListener('click', function(e){
    if(!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
  });