function rps(user,computer){
    if(user===computer) return "draw";
    if(user==="rock" && computer==="scissor") return "user wins";
    if(user==="paper" && computer==="rock") return "user wins";
    if(user==="scissor" && computer==="paper") return "user wins";
    else return "computer wins";
}
console.log(rps("rock","scissor"));