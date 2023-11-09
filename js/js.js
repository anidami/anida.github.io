let menu = document.querySelector('#menu-btn'), navbar = document.querySelector('.header .navbar');
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("song");
    window.addEventListener('click', function () {
        setTimeout(function () {
            audio.play();
        }, 2000);
    });
}), menu.onclick = () => {
    menu.classList.toggle('fa-times'), navbar.classList.toggle('active')
}, window.onscroll = () => {
    menu.classList.remove('fa-times'), navbar.classList.remove('active')
};
const season5Episodes = [{episodeNumber: 1, releaseDate: "3 September 2021"}, {
    episodeNumber: 2, releaseDate: "10 September 2021"
}, {episodeNumber: 3, releaseDate: "17 September 2021"}, {
    episodeNumber: 4, releaseDate: "24 September 2021"
}, {episodeNumber: 5, releaseDate: "1 November 2021"}, {episodeNumber: 6, releaseDate: "8 November 2021"}];
const seasonsContainer = document.querySelector(".seasons-container");
for (const episode of season5Episodes) {
    const episodeInfo = document.createElement("p");
    episodeInfo.textContent = `Episode ${episode.episodeNumber} release date: ${episode.releaseDate}`;
    seasonsContainer.appendChild(episodeInfo);
}
document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        {
            title: "The Avengers",
            year: 2012,
            description: "The Avengers"
        },
        {
            title: "Avengers: Age of Ultron",
            year: 2015,
            description: "Avengers: Age of Ultron"
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
