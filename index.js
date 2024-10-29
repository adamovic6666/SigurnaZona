document.addEventListener("scroll", function () {
  console.log("asdasdasd");
  const page2 = document.querySelector("#page-2");
  console.log(page2);
  const rect = page2.getBoundingClientRect();
  const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

  if (isVisible) {
    console.log("#page-2 is visible on the screen.");
  } else {
    console.log("#page-2 is not visible on the screen.");
  }
});
