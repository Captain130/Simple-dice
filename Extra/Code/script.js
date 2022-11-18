var roll = document.getElementById("roll");
roll.addEventListener("click", Start);

function Start() {
  var list_image = ["Extra/Picture/dice-01.svg", "Extra/Picture/dice-02.svg", "Extra/Picture/dice-03.svg", "Extra/Picture/dice-04.svg", "Extra/Picture/dice-05.svg", "Extra/Picture/dice-06.svg"];
  var number_list= ['your roll is 1', 'your roll is 2', 'your roll is 3', 'your roll is 4', 'your roll is 5', 'your roll is 6']
  var Random = Math.floor(Math.random() * 6);
  document.getElementById("image").setAttribute("src", list_image[Random]);
  document.getElementById("number").innerHTML = number_list[Random]
}
