
// Display welcome message

console.log("Welcome to Beauty and Fashion Website!");

// Image click event

let images = document.querySelectorAll("article img");

images.forEach(function(image) {

    image.addEventListener("click", function() {

        alert("Welcome to Beauty & Fashion!");

    });

});
