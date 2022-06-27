const mainHeading = document.querySelector(".mainheading");

const randext = new window.Randext.default({
  element: mainHeading,
  interval: 40,
  ignore: "-_,;:./()[]{}<>'\"`#$%&@€!?",
  style: ["small", "underlined", "strong"],
  callback: () => {
    setTimeout(() => {
      mainHeading.classList.toggle("main90");
      mainHeading.innerText = "😇";
      setTimeout(() => {
        mainHeading.classList.toggle("main90");
        mainHeading.classList.toggle("main70");
        mainHeading.innerText = "Вы этого не видели.";
        setTimeout(() => {
          mainHeading.classList.toggle("main70");
          mainHeading.classList.toggle("main60");
          mainHeading.innerText = "Привет, я Влад.";
          document.querySelector(".fixedtext").style.display = "block";
          document.body.style.overflowY = "scroll";
        }, 2000);
      }, 2000);
    }, 2000);
  },
});
const progressbar = new ProgressBar.Line(".progressbar", {
  strokeWidth: 1,
  easing: "easeInOut",
  duration: 9500,
  color: "#80c980",
  trailColor: "#e0e0e0",
  trailWidth: 1,
  svgStyle: { width: "100%", height: "100%" },
});
window.scrollTo(0, 0);
randext.start();

progressbar.animate(1);

setTimeout(() => {
  document.querySelector(".progressbar").remove();
}, 9500);
document.querySelector(".normalize").onclick = () => {
  document.querySelector(".normalize").remove();
  document.querySelector(".chsv").innerHTML = `<h2>Я фуллстек-разработчик.</h2>
    <h2>Знаю HTML, CSS, JavaScript и TypeScript.</h2>
    <h2>Использую React и NodeJS.</h2>`;
};
