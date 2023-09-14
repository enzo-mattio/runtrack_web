let button = document.querySelector(".main__button");
let articles = document.querySelectorAll(".main__article");
let isHidden = false;

button.addEventListener("click", () => {
    if (isHidden) {
        articles.forEach(article => {
            article.style.display = "block";
        });
        isHidden = false;
    } else {
        articles.forEach(article => {
            article.style.display = "none";
        });
        isHidden = true;
    }
});