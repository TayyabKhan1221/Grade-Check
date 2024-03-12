let greetingWelcome = prompt("Enter Your Name");
document.getElementById("greetingWelcome").innerText =
  "Welcome " + greetingWelcome;

document.getElementById("checkPer").addEventListener("click", function (event) {
  event.preventDefault();

  let inp = parseInt(document.getElementById("inp-per").value);
  let answer = document.getElementById("grade");

  if (inp > 100 || isNaN(inp)) {
    answer.innerHTML = "Please Enter Number 0 to 100";
  } else if (inp >= 80 && inp <= 100) {
    answer.innerHTML = "Your Grade Is A+";
  } else if (inp >= 70 && inp <= 79) {
    answer.innerHTML = "Your Grade Is A";
  } else if (inp >= 60 && inp <= 69) {
    answer.innerHTML = "Your Grade Is B";
  } else if (inp >= 50 && inp <= 59) {
    answer.innerHTML = "Your Grade Is C";
  } else if (inp >= 40 && inp <= 49) {
    answer.innerHTML = "Your Grade Is D";
  } else {
    answer.innerHTML = "You Are Fail";
  }
});
