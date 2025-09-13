// Global variable for the brand name, accessible anywhere
let brandName = "Sling Chic";

document.addEventListener('DOMContentLoaded', () => {

    /* Part 2: JavaScript Functions — Scope, Parameters & Return Values */

    // Function to calculate a discount, demonstrating parameters and a return value
    function calculateDiscountedPrice(originalPrice, discountPercentage) {
        let discount = originalPrice * (discountPercentage / 100); // This is a local variable
        let finalPrice = originalPrice - discount; // This is also a local variable
        return finalPrice.toFixed(2); // Return a formatted string
    }

    // Function to demonstrate global vs. local scope
    function displayBrandInfo() {
        let tagline = "Your Style. Our Passion."; // This is a local variable, only accessible inside this function
        console.log(`Global variable access: Welcome to ${brandName}!`);
        console.log(`Local variable access: ${tagline}`);
    }

    // Use a reusable function to get and display a new price
    const originalPriceElement = document.querySelector('.price');
    if (originalPriceElement) {
        const originalPrice = parseFloat(originalPriceElement.textContent);
        const discountedPrice = calculateDiscountedPrice(originalPrice, 20); // 20% discount
        originalPriceElement.innerHTML = `<span class="text-sm line-through text-gray-400">$${originalPrice.toFixed(2)}</span> <span class="text-green-600 font-bold">$${discountedPrice}</span>`;
    }

    // Call the function to demonstrate scope
    displayBrandInfo();
    console.log("Attempting to access local 'tagline' variable outside the function:");
    try {
        console.log(tagline);
    } catch (e) {
        console.error("Error:", e.message);
    }

    /* Part 3: Combining CSS Animations with JavaScript */

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const modal = document.getElementById('animation-modal');
    const animatedCircle = document.getElementById('animated-circle');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Add event listeners to all 'add to cart' buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Use JS to trigger the CSS animation
            // First, remove the circle class to ensure the animation can re-run
            animatedCircle.classList.remove('circle');
            // Force a reflow to restart the animation
            setTimeout(() => {
                animatedCircle.classList.add('circle');
            }, 10);
            
            // Show the modal by removing the 'hidden' class
            modal.classList.remove('hidden');
        });
    });

    // Close the modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

});
