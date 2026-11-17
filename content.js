
const readMore = document.getElementById("readMore");
const moreContent = document.getElementById("moreContent");

readMore.addEventListener("click", function() {

    moreContent.classList.toggle("hidden");

    if (moreContent.classList.contains("hidden")) {
        readMore.textContent = "Read More";
    } else {
        readMore.textContent = "Read Less";
    }

});
