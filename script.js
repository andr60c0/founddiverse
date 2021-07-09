document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");

  let sectionThreeTextColumn = document.querySelector("#section3 .textcolumn");

  sectionThreeTextColumn.addEventListener("mouseover", () => {
    document.querySelector(".forward").classList.remove("invisible");
    document.querySelector(".forward").classList.add("show");
  });
  sectionThreeTextColumn.addEventListener("mouseout", () => {
    document.querySelector(".forward").classList.add("skjul");
    document.querySelector(".forward").classList.remove("show");
  });
}
