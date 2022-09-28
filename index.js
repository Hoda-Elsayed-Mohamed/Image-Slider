const imgWrapper = document.querySelector(".image-container");
const imgEls = document.querySelectorAll("img");
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

var image = 1;
var pause;
nextBtn.addEventListener("click", () => {
  image++;
  clearTimeout(pause);
  sliding();
});

prevBtn.addEventListener("click", () => {
  image--;
  clearTimeout(pause);
  sliding();
});

sliding();

function sliding() {
  if (image > imgEls.length ) {
    image = 1;
  } else if (image < 1) {
    image = imgEls.length;
  }
  imgWrapper.style.transform = `translateX(-${(image-1) * 500}px)`;
 pause =setTimeout(() => {
    image++;
    sliding();
}, 3000);

}

