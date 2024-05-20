var ageInYears = prompt("How old are you in years?");
var ageInDays = Number(ageInYears) * 365;
alert("You are approximately " + ageInDays + " days old!");
document.getElementById("age-in-years").textContent = "You are " + ageInYears + " years old!";
document.getElementById("age-in-days").textContent = "You are approximately " + ageInDays + " days old!";
