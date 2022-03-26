const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};


menu.addEventListener('click', mobileMenu);


function show(value) {
    document.querySelector(".text-box").value = value;
}

let dropdown = document.querySelector(".navbar__links")
let dropdown2 = document.querySelector(".dropdown")
dropdown.onclick = function() {
    console.log("hello world");
    dropdown.classList.toggle("active")
    dropdown2.classList.toggle("active")
}


let a = document.querySelectorAll(".itema")
a.forEach((el) => el.onclick = function() {
    let b = document.querySelectorAll(".active-link");

    el.classList.add('active-link');
    b.forEach((e) =>
        e.classList.remove('active-link')
    );
});