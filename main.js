// 1. Create an HTML page that contains a text area and a button labeled Create.
// 2. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('card-space');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cardOutput = input.value;
    const cardArea = document.createElement('li');
    cardArea.textContent = cardOutput;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    ul.appendChild(cardArea);
    cardArea.appendChild(removeButton);
    const backgroundButton = document.createElement('input');
    backgroundButton.type = 'color';
    const textButton = document.createElement('input');
    textButton.type = 'color';
    cardArea.appendChild(backgroundButton);
    cardArea.appendChild(textButton);

});

ul.addEventListener('click', (e) => {
    if (e.target.textContent === 'Remove') {
        const li = e.target.parentNode;
        ul.removeChild(li);
    }
});


// 3. Above the text on each card, there must be two input controls of type color.

// 4. Above the text on each card, there must be a button element labeled Delete.
// 5. When the user selects a color from the first input, then the background color of that card, and no other cards, should change to the color chosen.
// 6. When the user selects a color from the second input, then the font color of that card, and no other cards, should change to the color chosen.
// 7. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.