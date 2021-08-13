function createMenuPage(main) {
    const body = document.createElement('div')
    body.classList.add("menu-content")
    
    //menu headline
    const menuHead = document.createElement('h1')
    menuHead.textContent = "MENU"
    menuHead.classList.add("menu-head")
    menuHead.classList.add("transition-wrapper")
    body.appendChild(menuHead)

    //header breaker
    const line = linebreak(body)
    line.classList.add("transition-wrapper")

    //menu contents
    const menuBody = document.createElement('div')
    menuBody.classList.add('menu-body')
    menuBody.classList.add('transition-wrapper')
    body.appendChild(menuBody)

    //breakfast
    createSectionHeader("Breakfast", menuBody)
    menuBody.appendChild(
        createMenuSection("Breakfast")
    )
    linebreak(menuBody)
    //lunch
    createSectionHeader("Lunch", menuBody)
    menuBody.appendChild(
        createMenuSection("Lunch")
    )
    linebreak(menuBody)
    //dinner
    createSectionHeader("Dinner", menuBody)
    menuBody.appendChild(
        createMenuSection("Dinner")
    )
    //Append
    main.appendChild(body)
    setTimeout(function () {transition(menuHead)}, 500)
    setTimeout(function () {transition(line)}, 800)
    setTimeout(function () {transition(menuBody)}, 1000)
    
}

function transition(element) {
    element.classList.add("show")
}

function createSectionHeader(name, element) {
    const sectionHeader = document.createElement('div')
    sectionHeader.classList.add('section-header')
    sectionHeader.textContent = name
    element.appendChild(sectionHeader)
    // return sectionHeader
}

function createMenuSection(name) {
    const menuSection = document.createElement('div')
    menuSection.classList.add('menu-section')
    menuSection.id = name
    switch(name) {
       case "Breakfast":
           menuSection.appendChild(
                createMenuItem(
                    "EGGS BENEDICT",
                    "11",
                    "Poached eggs, cured ham and harissa hollandaise on an English muffin"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "VEGGIE BREAKFAST PLATE",
                    "10",
                    "Smashed avo, veggie sausage, mushrooms, confit tomatoes, hash brown, toasted white bloomer and eggs"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "MOROCCAN BREAKFAST",
                    "13",
                    "French toast with figs, honey, labneh and crushed hazelnuts"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "SALMON AND CREAM CHEESE",
                    "7",
                    "Smoked salmon with a lemon, dill and pepper cream cheese on a toasted wheat grain bloomer"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "MAPLE AND BACON PANCAKES",
                    "11",
                    "American-style pancakes, streaky bacon, maple syrup and maple butter"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "MEXICAN TOSTADA PLATE",
                    "9.5",
                    "Slow cooked marinated pork, avocado, refried beans and a fried egg on a flour tortilla"
                    )
                );    
            break
        case "Lunch":
            menuSection.appendChild(
                createMenuItem(
                    "PORK CUBAN SANDWICH",
                    "13",
                    "Slow cooked marinated pork, cured ham, gherkin and mature Cheddar in toasted white bloomer slices"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "FISH FINGER SANDWICH",
                    "14",
                    "Breaded fish goujons with pico de gallo, baby gem and tartar sauce in a bun"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "SOFT SHELL CRAB BURGER",
                    "14",
                    "Tempura soft shell crab, spring onion, chilli, red cabbage slaw and cayenne ranch sauce."
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "SMOKED GRAVY BURGER",
                    "13",
                    "Grilled beef patty, pulled beef, red onion, gherkin, smoked gravy butter and Giraffe burger sauce"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "CLASSIC CHEESE BURGER",
                    "13",
                    "Grilled beef patty, smoked Cheddar cheese, red onion, crispy fried onions and special burger sauce. Add bacon"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "PINK CAESAR SALAD",
                    "10",
                    "Baby gem, croutons, tomatoes, Parmigiano Reggiano, chopped beetroot boiled egg and smoked Caesar salad dressing"
                    )
                );    
            break
        case "Dinner":
            menuSection.appendChild(
                createMenuItem(
                    "JAPANESE KATSU CURRY",
                    "16",
                    "Breaded chicken in a creamy katsu sauce, spring onion and chilli. Served with veg and noodles"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "THAI DUCK STIR FRY",
                    "18",
                    "Shredded duck and noodles with crispy onions, sweet chilli jam and Asian slaw in a teriyaki sauce. Swap duck for prawns"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "HOISIN DUCK NOODLE SALAD",
                    "17",
                    "Sweet and sticky shredded duck, chargrilled pineapple, carrots, cucumber and vermicelli noodles in a soy and ginger dressing"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "STEAK AND CHIPS",
                    "17",
                    "8oz British sirloin steak served with chipotle butter, confit tomatoes, crispy onions and lemon and pepper seasoned fries"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "HANGING KEBABS",
                    "17",
                    "Grilled swinging kebabs served with Greek salad, hummus and flatbread"
                    )
                );
            menuSection.appendChild(
                createMenuItem(
                    "KOREAN BBQ CHICKEN",
                    "15",
                    "Sticky crispy fried chicken with vermicelli noodles, grated carrots, slaw and spring onion."
                    )
                );    
            break
    }
    return menuSection
}


function createMenuItem (name, amount, ingredients) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')
    menuItem.textContent = name
    const price = document.createElement('span')
    price.classList.add('menu-price')
    price.textContent = amount
    menuItem.appendChild(price)

    const menuIngredient = document.createElement('div')
    menuIngredient.classList.add("menu-ingredient")
    menuIngredient.textContent = ingredients
    menuItem.appendChild(menuIngredient)
    return menuItem
}

function linebreak(element) {
    const lineBreak = document.createElement('hr')
    lineBreak.classList.add("break")
    element.appendChild(lineBreak)
    return lineBreak
}

export default createMenuPage;