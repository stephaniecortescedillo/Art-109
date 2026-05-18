

// Function to add an item to the list
function addToList(item) {
    // Get the <ul> element for the list
    const list = document.getElementById('list');
    // Create a new <li> element
    const li = document.createElement('li');
    // Set the text content to the item name
    li.textContent = item;
    // Add the new item to the list in the DOM
    list.appendChild(li);
}

// Function to update the carousel position
function updateCarousel() {
    // Get the carousel element
    const carousel = document.querySelector('.carousel');
    // Calculate the transform to show the current slide
    const transformValue = -currentSlide * 120; // 120px per image (100px width + 20px margin)
    carousel.style.transform = `translateX(${transformValue}px)`;
}

// Event listener for the form submission
document.getElementById('form').addEventListener('submit', function(e) {
    // Prevent the default form submission behavior (which would reload the page)
    e.preventDefault();
    // 
    const selected = document.getElementById('choice-type').value;
    const custom = document.getElementById('custom').value.trim();
   

    const Type = selected || custom;
    if (Type) {
        addToList(Type);
        // Reset both the dropdown and text input
        document.getElementById('choice-type').value = '';
        document.getElementById('custom').value = '';
     
    }
});

// Event listeners for clicking carousel images to add to list
document.querySelectorAll('.carousel img').forEach(img => {
    img.addEventListener('click', function() {
        // Get the item name from the data-item attribute
        const item = this.getAttribute('data-item');
        // Add the item to the shopping list
        addToList(item);
    });
});