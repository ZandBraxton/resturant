const homePage = (() => {
    
    function createPage(content) {
        const body = document.createElement('div')
        body.classList.add("home-content")
        
        const headline = document.createElement('div')
        headline.textContent = "PARADISE IS JUST A VISIT AWAY"
        headline.classList.add("headline")
        
        const subHeadline = document.createElement('div')
        subHeadline.textContent = "Reserve your table today"
        subHeadline.classList.add('sub-headline')
        headline.appendChild(subHeadline)
        
        content.appendChild(body)
        content.appendChild(headline)

    }



    return createPage;

})();

export default homePage;