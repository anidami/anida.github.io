document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        {
            title: "3 Season",
            year: 2019,
            description: "3 Season"
        },
        {
            title: "4 Season",
            year: 2020,
            description: "4 Season"
        },
    ];

    function filterMovies(year) {
        return movies.filter(movie => movie.year > year);
    }

    const filteredMovies = filterMovies(2014); // Example: Get movies released after 2014
    console.log(filteredMovies);

    let currentIndex = 0;

    function changeDescription() {
        const modalDescription = document.querySelector("#modalDescription");
        modalDescription.textContent = movies[currentIndex].description;
        currentIndex = (currentIndex + 1) % movies.length;
    }

    setInterval(changeDescription, 5000); // Change description every 5 seconds

    // Get all the modal trigger buttons (the "Learn More" buttons)
    const modalButtons = document.querySelectorAll("[data-toggle='modal']");

    // Loop through each modal button and attach a click event listener
    modalButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            // Find the target modal's ID using the data-target attribute
            const targetModalId = button.getAttribute("data-target").substring(1); // Remove the "#" character

            // Find the corresponding modal element by its ID
            const modal = document.getElementById(targetModalId);

            // Create a new Bootstrap modal from the modal element
            const modalInstance = new bootstrap.Modal(modal);

            // Show the modal
            modalInstance.show();
        });
    });
});