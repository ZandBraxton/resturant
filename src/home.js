const homePage = (() => {
    
    function createPage(content) {
        const body = document.createElement('div')
        body.classList.add("home-content")
        
        //Headline
        const headline = document.createElement('div')
        headline.textContent = "PARADISE IS JUST A VISIT AWAY"
        headline.classList.add("headline")
        
        //Subheadline
        const subHeadline = document.createElement('div')
        subHeadline.textContent = "Reserve your table today"
        subHeadline.classList.add('sub-headline')
        headline.appendChild(subHeadline)
        
        //Book table button
        const reserveBtn = document.createElement('button')
        reserveBtn.classList.add('reserve')
        reserveBtn.value = "#"
        reserveBtn.textContent = "Book Table"
        headline.appendChild(reserveBtn)

        //about body
        const aboutPage = document.createElement('div')
        aboutPage.classList.add('about-page')
        
        //Description
        const desc = document.createElement('div')
        desc.classList.add('home-desc')
        desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem sapien, ultricies sit amet condimentum eget, scelerisque et erat. Duis vitae nibh lectus. Aenean ullamcorper iaculis arcu vel hendrerit. Pellentesque justo odio, elementum ac elit in, iaculis eleifend nisl. Nunc non consectetur dolor. Donec quam metus, dictum vel consectetur quis, bibendum sed orci. Donec vel sagittis lectus, blandit egestas erat. Quisque tincidunt eros mi, vitae suscipit neque imperdiet eget. Curabitur quam velit, lacinia ut metus sed, volutpat scelerisque leo. Phasellus sed purus at velit condimentum rutrum in in mauris. "
        aboutPage.appendChild(desc)

        //Append
        content.appendChild(body)
        content.appendChild(headline)
        content.appendChild(aboutPage)

    }



    return createPage;

})();

export default homePage;