import './style.css'
import homePage from './home.js';
import testPage from './pageload.js';

const content = document.querySelector("#content")

const header = (() => {
    const navBar = document.createElement('nav')
    const ul = document.createElement('ul')
    const logo = document.createElement('h1')
    navBar.id = "navbar"
    ul.id = "nav-ul"
    navBar.appendChild(ul)
    ul.appendChild(logo)
    logo.textContent = "RESTAURANT"
    logo.classList.add("logo")
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li')
        li.classList.add("nav-list")
        switch(i) {
            case 0:
                li.id = "home"
                li.textContent = "Home"
                break;
            case 1:
                li.id = "menu"
                li.textContent = "Menu"
                break;
            case 2:
                li.id = "contact"
                li.textContent = "Contact"
                break;
        }
        ul.appendChild(li)
    }

    content.appendChild(navBar)

})();

homePage(content)