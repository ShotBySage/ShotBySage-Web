document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".photo-gallery img");

    /* Create lightbox */

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const lightboxImage = document.createElement("img");
    lightboxImage.className = "lightbox-image";

    const closeButton = document.createElement("button");
    closeButton.className = "lightbox-close";
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("aria-label", "Close image");

    const previousButton = document.createElement("button");
    previousButton.className = "lightbox-arrow lightbox-previous";
    previousButton.innerHTML = "&#10094;";
    previousButton.setAttribute("aria-label", "Previous image");

    const nextButton = document.createElement("button");
    nextButton.className = "lightbox-arrow lightbox-next";
    nextButton.innerHTML = "&#10095;";
    nextButton.setAttribute("aria-label", "Next image");

    lightbox.appendChild(closeButton);
    lightbox.appendChild(previousButton);
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(nextButton);

    document.body.appendChild(lightbox);


    /* Track current image */

    let currentImage = 0;


    /* Open image */

    function openLightbox(index) {

        currentImage = index;

        lightboxImage.src = images[currentImage].src;
        lightboxImage.alt = images[currentImage].alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    }


    /* Close lightbox */

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";
    }


    /* Change image */

    function showImage(index) {

        if (index < 0) {
            currentImage = images.length - 1;
        } else if (index >= images.length) {
            currentImage = 0;
        } else {
            currentImage = index;
        }

        lightboxImage.src = images[currentImage].src;
        lightboxImage.alt = images[currentImage].alt;
    }


    /* Click gallery images */

    images.forEach((image, index) => {

        image.addEventListener("click", () => {
            openLightbox(index);
        });

    });


    /* Buttons */

    closeButton.addEventListener("click", closeLightbox);

    previousButton.addEventListener("click", () => {
        showImage(currentImage - 1);
    });

    nextButton.addEventListener("click", () => {
        showImage(currentImage + 1);
    });


    /* Click outside image */

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });


    /* Keyboard */

    document.addEventListener("keydown", (event) => {

        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowLeft") {
            showImage(currentImage - 1);
        }

        if (event.key === "ArrowRight") {
            showImage(currentImage + 1);
        }

    });

});