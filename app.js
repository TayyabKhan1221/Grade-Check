let gradeCheck = document.querySelector("#grade-check");
let totalMarks = document.querySelector("#Total-Marks");
let totalObtainMarks = document.querySelector("#total-obtain-marks");
let showGrade = document.querySelector("#result");

gradeCheck.addEventListener("submit", (event) => {
  event.preventDefault();

  let user_totalmarks = totalMarks.value;
  let user_obtainmarks = totalObtainMarks.value;
  let percentage = (user_obtainmarks / user_totalmarks) * 100;
  if (percentage >= 80) {
    showGrade.innerText = "Congratulations!\nYour Grade is A+ 😍";
  } else if (percentage >= 70) {
    showGrade.innerText = "Congratulations!\nYour Grade is A 😍";
  } else if (percentage >= 60) {
    showGrade.innerText = "Congratulations!\nYour Grade is B 😊";
  } else if (percentage >= 50) {
    showGrade.innerText = "keep Working Hard!\nYour Grade is C 😐";
  } else if (percentage >= 40) {
    showGrade.innerText = "You Must Work Hard!\nYour Grade is D ☹️";
  } else {
    showGrade.innerText = "Better Luck Next Time!\nYou are Fail ☹️";
  }
});