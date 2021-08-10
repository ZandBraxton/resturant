const homePage = (() => {
    
    function createPage(content) {
        const body = document.createElement('div')
        body.classList.add("home-content")
        content.appendChild(body)
        // const h1 = document.createElement('h1')
        // h1.textContent = "HELLO TEST"
        // body.appendChild(h1)
    }



    return createPage;

})();

export default homePage;