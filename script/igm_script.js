function changeSizeImage(im) {
  var bigsize = "400";
  var smallsize = "100";
  console.log(im.height);
  if (im.height == bigsize) {
    im.height = smallsize;
    console.log(im.height);
  } else im.height = bigsize;
}

const menuElement = document.querySelector("#menu");

document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY < 500) {
    menuElement.classList.add("top-munu");
  } else menuElement.classList.remove("top-munu");
});
