// Modal functionality for image
var modal = document.getElementById("modal");
var img = document.getElementById("friendPic");
var closeBtn = document.querySelector(".close");

// Show the modal when the image is clicked
img.onclick = function() {
    modal.style.display = "block";  // Open the modal
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";  // Hide the modal
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";  // Close the modal when clicking outside
    }
}

// Handle Wish Form Submission and Show Thank You Pop-up
document.getElementById("wishForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting traditionally
    document.getElementById("thankYouPopup").style.display = "block"; // Show the thank you pop-up
});

// Close Thank You Pop-up
document.querySelector(".close-popup").addEventListener("click", function() {
    document.getElementById("thankYouPopup").style.display = "none"; // Hide the thank you pop-up
});





