document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 3000); // Replace with your actual data loading logic and time
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    function hideLoader() {

        loader.style.display = "none";
        content.style.overflow = "hidden";
    }

    function showContent() {

        content.style.display = "block";
    }
});
const btn = document.getElementById("chatting-btn");
const img = document.getElementById("arrow-img");

btn.addEventListener("mouseover", function() {
    img.src = "./assets/images/right-arrow-orange.png";
});

btn.addEventListener("mouseout", function() {
    img.src = "./assets/images/right-arrow.png";
});
