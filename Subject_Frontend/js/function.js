let clickButton = document.getElementById("button");
clickButton.addEventListener("click", 

function determineDayOfTheWeek(dayNumber) {

  let day = Number(document.getElementById("numberDay").value);

  switch (day) {
    case 1:
      alert("Luni!");
      break;
    case 2:
      alert("Marti!");
      break;
    case 3:
      alert("Miercuri!");
      break;
    case 4:
      alert("Joi!");
      break;
    case 5:
      alert("Vineri!");
      break;
    case 6:
      alert("Simbata!");
      break;
    case 7:
      alert("Duminica!");
      break;
    default:
      alert("Numarul introdus de dvs este un numar inafara intervalului propus.");
      break;
  }
})