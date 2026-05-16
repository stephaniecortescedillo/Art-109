

const webcamVideo = document.querySelector("#webcam");

async function startWebcam(params) {
    try{
    const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
});

    webcamVideo.srcObject = stream;


    }catch(error){
        console.log("error accessing webcam");
    }
}
startWebcam();


///////////////////////////// Kitchen ///////////////


// Variable to track the current slide in the carousel
let currentSlide = 0;

// Function to add an item to the shopping list
function addToList(item) {
    // Get the <ul> element for the list
    const list = document.getElementById('list');
    // Create a new <li> element
    const list = document.createElement('list');
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
    // Get the selected value from the dropdown
    const selected = document.getElementById('choice-type').value;
    // Get the value from the text input, trimmed of whitespace
    const custom = document.getElementById('custom').value.trim();
    // Determine the milk type: use dropdown if selected, otherwise use text input
    const milkType = selected || custom;
    // If a valid milk type is provided, add it to the list
    if (milkType) {
        addToList(milkType);
        // Reset both the dropdown and text input
        document.getElementById('choice-type').value = '';
        document.getElementById('custom').value = '';
    }
});

// Event listeners for carousel navigation buttons
document.getElementById('prev-btn').addEventListener('click', function() {
    // Move to the previous slide if not at the first
    if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
    }
});

document.getElementById('next-btn').addEventListener('click', function() {
    // Move to the next slide if not at the last
    const totalSlides = document.querySelectorAll('.carousel img').length;
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateCarousel();
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