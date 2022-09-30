// timeline

//Define start & end date
let start = new Date("Sep 12, 2022").getTime();
let end = new Date("Feb 10, 2023").getTime();

//Calculate time between start and end 
let totalDays = end - start;

//Calculate time spend since the start
let daysDone = new Date().getTime() - start;

//Calculate the pourcentage of time spend
let pourcentage = daysDone * 100 / totalDays;

//Select the class of the progress bar
let progressBar = document.querySelector('.progress');

daysDone < totalDays ? progressBar.style.height = `${parseInt(pourcentage)}%` : progressBar.style.height = "100%";


