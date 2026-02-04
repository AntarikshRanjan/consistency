// Rock Paper Scissors
function rps(u, c) {
  if (u === "rock" && c === "paper") return "computer winner";
  if (u === "rock" && c === "scissor") return "user winner";
  if (u === "rock" && c === "rock") return "draw";

  if (u === "paper" && c === "paper") return "draw";
  if (u === "paper" && c === "rock") return "user winner";
  if (u === "paper" && c === "scissor") return "computer winner";

  if (u === "scissor" && c === "paper") return "user winner";
  if (u === "scissor" && c === "rock") return "computer winner";
  if (u === "scissor" && c === "scissor") return "draw";

  return "give valid input";
}

console.log(rps("rock", "scissor"));
