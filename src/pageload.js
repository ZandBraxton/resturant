import createHomePage from './home.js'
import createMenuPage from './menu.js';
import createContactPage from './contact.js';


function loadPage(state, main) {
    switch (state) {
        case "home":
            createHomePage(main)
            break;
        case "menu":
            createMenuPage(main)
            break;
        case "contact":
            createContactPage(main)
            break;
    }
};

export default loadPage;