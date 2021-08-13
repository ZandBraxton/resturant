function createMenuPage(main) {
    const body = document.createElement('div')
    body.classList.add("menu-content")
    
    //menu headline
    const menuHead = document.createElement('h1')
    menuHead.textContent = "MENU"
    menuHead.classList.add("menu-head")
    menuHead.classList.add("transition-wrapper")
    body.appendChild(menuHead)

    //breaker
    const line = linebreak(body)
    line.classList.add("transition-wrapper")

    //menu contents
    const menuBody = document.createElement('div')
    menuBody.classList.add('menu-body')
    menuBody.classList.add('transition-wrapper')
    body.appendChild(menuBody)
    createSectionHeader("Breakfast", menuBody)

    menuBody.appendChild(
        createMenuSection("Breakfast")
    )
    linebreak(menuBody)
    createSectionHeader("Lunch", menuBody)

    menuBody.appendChild(
        createMenuSection("Lunch")
    )
    linebreak(menuBody)
    createSectionHeader("Dinner", menuBody)

    menuBody.appendChild(
        createMenuSection("Dinner")
    )

    
    
    // menuSection.appendChild(
    //     createMenuItem(
    //         "EGGS BENEDICT",
    //         "11",
    //         "Poached eggs, cured ham and harissa hollandaise on an English muffin"
    //         )
    //     );
    // menuSection.appendChild(
    //     createMenuItem(
    //         "VEGGIE BREAKFAST PLATE",
    //         "10",
    //         "Smashed avo, veggie sausage, mushrooms, confit tomatoes, hash brown, toasted white bloomer and eggs"
    //         )
    //     );
    //     menuSection.appendChild(
    //         createMenuItem(
    //             "MOROCCAN BREAKFAST",
    //             "13",
    //             "French toast with figs, honey, labneh and crushed hazelnuts"
    //             )
    //         );
    //     menuSection.appendChild(
    //         createMenuItem(
    //             "SALMON AND CREAM CHEESE",
    //             "7",
    //             "Smoked salmon with a lemon, dill and pepper cream cheese on a toasted wheat grain bloomer"
    //             )
    //         );
    //     menuSection.appendChild(
    //         createMenuItem(
    //             "MAPLE AND BACON PANCAKES",
    //             "11",
    //             "American-style pancakes, streaky bacon, maple syrup and maple butter"
    //             )
    //         );
    //     menuSection.appendChild(
    //         createMenuItem(
    //             "MEXICAN TOSTADA PLATE",
    //             "9.5",
    //             "Slow cooked marinated pork, avocado, refried beans and a fried egg on a flour tortilla"
    //             )
    //         );    
   
    
    

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