import './style.css';
import loadPage from './pageload.js'
import createHomePage from './home.js';
import createMenuPage from './menu.js';



const content = document.querySelector("#content")
const main = document.createElement('div')
main.id = "menu"
main.classList.add("main")
main.classList.add("transition-wrapper")
main.classList.add("show")

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
    const navSpacer = document.createElement('div')
    navSpacer.classList.add("nav-spacer")
    navSpacer.textContent = "&nbsp;"
    content.appendChild(navSpacer)
    content.appendChild(main)

    const tab = document.querySelectorAll('.nav-list')
    tab.forEach(tab => {
        tab.addEventListener('click', () => {
            let change = tab.id
            tabSwitch(change, main.id)
        })
    })

    function tabSwitch(change, state) {
        if (change === state) {
            return
        }
        main.classList.remove('show')
        setTimeout(function () {removePage()}, 500)
        setTimeout(function () {loadPage(change, main)}, 600)
        setTimeout(function () {transition(main)}, 600)
        main.id = change

    }

    function removePage() {
         while (main.firstChild) {
             main.removeChild(main.lastChild)
         }
        }

    function transition(element) {
        element.classList.add("show")
    }
    
        
})();

loadPage(main.id, main)