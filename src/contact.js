function createContactPage(main) {
    const body = document.createElement('div')
    body.classList.add("contact-content")
    
    //headline
    const headline = document.createElement('div')
    headline.textContent = "GIVE US A CALL"
    headline.classList.add("contact-head")
    headline.classList.add("transition-wrapper")
    body.appendChild(headline)

    //contact container
    const contactSection = document.createElement('div')
    contactSection.classList.add("contact-section")
    contactSection.classList.add("transition-wrapper")
    body.appendChild(contactSection)

    //contact list
    const contactList = document.createElement('div')
    contactList.classList.add("contact-list")
    contactSection.appendChild(contactList)    
    
    createListItem("Location", contactList)
    createItemDesc(
        "123 Template Street",
        contactList
        )
    createItemDesc(
        "Template City, Tx 78702",
        contactList
        )
    linebreak(contactList)

    createListItem("Hours", contactList)
    createItemDesc(
        "Tue-Thu, 8am - 10pm",
        contactList
        )
    createItemDesc(
        "Fri-Sun, 8am - 11pm",
        contactList
        )
    linebreak(contactList)

    createListItem("Contact", contactList)
    createItemDesc(
        "(210) 555-1234",
        contactList
        )
    createItemDesc(
        "template.placeholder@gmail.com",
        contactList
        )
    linebreak(contactList)

    //reviews
    const reviewBlock = document.createElement('div')
    reviewBlock.classList.add("review-block")
    contactSection.appendChild(reviewBlock)

    createReview(
        `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit magna eget mi auctor, vitae tincidunt erat iaculis. Duis nec." — Food Magazine`,
        reviewBlock
    )
    createReview(
        `"Sed sollicitudin congue nulla, at dignissim ex faucibus ac. Nunc molestie, ligula nec fermentum lobortis, mauris est fringilla purus, eget accumsan eros dolor vitae massa. Sed." — Hungry Times`,
        reviewBlock
    )
    createReview(
        `"Proin tristique dictum velit, ut malesuada nulla egestas ornare. Nullam blandit fringilla laoreet. Ut quis mi condimentum, ullamcorper." — OpenTable`,
        reviewBlock
    )
    
    //Append
    main.appendChild(body)
   
    setTimeout(function () {transition(headline)}, 500)
    setTimeout(function () {transition(contactSection)}, 900)
    
 
}

function createListItem(name, element) {
    const item = document.createElement('h2')
    item.classList.add("contact-list-item")
    item.id = name
    item.textContent = name
    element.appendChild(item)
}

function createItemDesc(value, element) {
    const desc = document.createElement('p')
    desc.classList.add('contact-desc')
    desc.textContent = value
    element.appendChild(desc)
}

function createReview(value, element) {
    const review = document.createElement('p')
    review.classList.add('review')
    review.textContent = value
    element.appendChild(review)
}

function transition(element) {
    element.classList.add("show")
}
function linebreak(element) {
    const lineBreak = document.createElement('br')
    lineBreak.classList.add("br")
    element.appendChild(lineBreak)
    return lineBreak
}

export default createContactPage;