let score = {
  win: 0,
  loss: 0,
  tie: 0,
  showScore: function(){
    return `Won ${this.win}, Lost ${this.loss}, Tied ${this.tie}.`;
  }
};

function cpuChoice() {
  let num = Math.random() * 3;
  if (num > 0 && num < 1) {
    return "rock";
  }
  if (num > 1 && num < 2) {
    return "paper";
  }
  if (num > 2 && num < 3) {
    return "scissor";
  }
}

function result(myChoice, cpuChoice) {
  if (myChoice == "rock") {
    if (cpuChoice == "rock") {
      score.tie++;
      return "Game tied.";
    } else if (cpuChoice == "paper") {
      score.loss++;
      return "Cpu won.";
    } else if (cpuChoice == "scissor") {
      score.win++;
      return "You won.";
    }
  } else if (myChoice == "paper") {
    if (cpuChoice == "paper") {
      score.tie++;
      return "Game tied.";
    } else if (cpuChoice == "scissor") {
      score.loss++;
      return "Cpu won.";
    } else if (cpuChoice == "rock") {
      score.win++;
      return "You won.";
    }
  }
  if (myChoice == "scissor") {
    if (cpuChoice == "scissor") {
      score.tie++;
      return "Game tied.";
    } else if (cpuChoice == "rock") {
      score.loss++;
      return "Cpu won.";
    } else if (cpuChoice == "paper") {
      score.win++;
      return "You won.";
    }
  }
}

function showResult(myChoice, pcChoice, pickWinner){
  return alert(` 
  You have chosen ${myChoice}.
  CPU has chosen ${pcChoice}.
  
  ${pickWinner}
  ${score.showScore()}
  
  `);
} 


