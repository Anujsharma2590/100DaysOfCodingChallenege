

var clickBtn = document.querySelector("#roll");
clickBtn.addEventListener("click", function () {
    let num = Math.floor(Math.random() * 6) + 1;
    let diceBox = document.querySelector("#die");
    diceBox.textContent = num;
    switch(num) {
  case 1:
     diceBox.style.color = "red";
    break;
  case 2:
    diceBox.style.color = "green";
    break;
case 3:
     diceBox.style.color = "yellow";
    break;
  case 4:
    diceBox.style.color = "orange";
    break;
case 5:
     diceBox.style.color = "purple";
    break;
  case 6:
    diceBox.style.color = "blue";
    break;
}
      
});
