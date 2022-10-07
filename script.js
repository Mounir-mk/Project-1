// timeline

//Define start & end date
let start = new Date("Sep 12, 2022").getTime();
let end = new Date("Feb 10, 2023").getTime();

//Calculate time between start and end
let totalDays = end - start;

//Calculate time spend since the start
let daysDone = new Date().getTime() - start;

//Calculate the pourcentage of time spend
let pourcentage = (daysDone * 100) / totalDays;
let reCalcPourcentage = 0;

if (pourcentage >= 0 && pourcentage <= 19) {
  reCalcPourcentage = (pourcentage / 19) * 0.5 * 100;
} else if (pourcentage > 19 && pourcentage <= 52) {
  reCalcPourcentage = ((pourcentage - 19) / 33) * 100 * 0.25 + 50;
} else if (pourcentage > 52 && pourcentage <= 100) {
  reCalcPourcentage = ((pourcentage - 52) / 48) * 100 * 0.25 + 75;
} else {
  reCalcPourcentage = 100;
}


//Select the class of the progress bar
let progressBar = document.querySelector(".progress");

//daysDone < totalDays
//  ? (progressBar.style.height = `0`)
// : (progressBar.style.height = "100%");

// Search for class circle

let allCircles = document.querySelectorAll(".circle");

if (pourcentage >= 52) {
  for (let i = 0; i < allCircles.length; i++) {
    allCircles[i].classList.toggle("complete");
  }
} else if (pourcentage >= 19) {
  for (let i = 0; i < allCircles.length - 1; i++) {
    allCircles[i].classList.toggle("complete");
  }
} else if (pourcentage >= 9.5) {
  for (let i = 0; i < allCircles.length - 2; i++) {
    allCircles[i].classList.toggle("complete");
  }
} else {
  allCircles[0].classList.toggle("complete");
}

//Scroll anime part: progress bar & Box

//document.querySelector('main').addEventListener('scroll', () => {
window.addEventListener("scroll" , () => {
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (progressBar.getBoundingClientRect().top < windowHeight / 2) {
    progressBar.style.height = `${parseInt(reCalcPourcentage)}%`;
  }
  document.querySelectorAll(".box").forEach((element) => {
    if (element.getBoundingClientRect().top < windowHeight / 2) {
      if (!element.classList.contains("scrolled")) {
        element.classList.toggle("scrolled");
      }
    }
  });
});