const reviewsContainer = document.getElementById("reviews-container");

const sheetURL =
    "https://script.google.com/macros/s/AKfycbzknoTgnCW3UII0hBGRwb5YBScxEj1MlXxJBkEG_pUYImCQ-IV_seiHLtDZf-dvgJk/exec";


fetch(sheetURL)
    .then(response => response.json())
    .then(reviews => {

        reviewsContainer.innerHTML = "";


        reviews.forEach(review => {

            const card = document.createElement("article");

            card.className = "review-card";


            const stars = document.createElement("div");

            stars.className = "review-stars";


            const rating = Number(review.rating);

            stars.textContent =
                "★".repeat(rating) +
                "☆".repeat(5 - rating);


            const text = document.createElement("p");

            text.className = "review-text";

            text.textContent = `"${review.review}"`;


            const name = document.createElement("div");

            name.className = "review-name";

            name.textContent =
                review.name || "Anonymous";


            card.appendChild(stars);

            card.appendChild(text);

            card.appendChild(name);


            reviewsContainer.appendChild(card);

        });


        if (reviews.length === 0) {

            reviewsContainer.innerHTML =
                "<p class='reviews-loading'>No reviews yet.</p>";

        }

    })


    .catch(error => {

        console.error(error);

        reviewsContainer.innerHTML =
            "<p class='reviews-loading'>Reviews could not be loaded right now.</p>";

    });