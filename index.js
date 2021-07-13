import anime from "./node_modules/animejs/lib/anime.es.js";

const icon = document.querySelector("#go-icon");
const first = "31.7,27.5 18.5,36.8 18.5,40.2 36.5,27.5 18.5,14.8 18.5,18.2";
const second = "2.2,27.5 40.3,30.8 24.5,53.9 53.4,27.5 24.5,1.1 40.3,24.2";
const third = "2.2,27.5 35.8,30.7 5.7,52 53.4,27.5 5.7,3 35.8,24.3";

icon.addEventListener("click", () => {
  console.log("clicked");
  const timeline = anime.timeline({
    duration: 1000,
    easing: "easeOutExpo",
  });

  timeline.add({
    targets: ".first",
    points: [
        { value: second },
         { value: third }
        ],
  });
});
