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

console.log(`number is ${num}, Cpu chose ${cpuChoice()}`);

function result(myChoice, cpuChoice) {
  if (myChoice == "rock") {
    if (cpuChoice == "rock") {
      return "Game tied.";
    } else if (cpuChoice == "paper") {
      return "Cpu won.";
    } else if (cpuChoice == "scissor") {
      return "You won.";
    }
  } else if (myChoice == "paper") {
    if (cpuChoice == "paper") {
      return "Game tied.";
    } else if (cpuChoice == "scissor") {
      return "Cpu won.";
    } else if (cpuChoice == "rock") {
      return "You won.";
    }
  }
  if (myChoice == "scissor") {
    if (cpuChoice == "scissor") {
      return "Game tied.";
    } else if (cpuChoice == "rock") {
      return "Cpu won.";
    } else if (cpuChoice == "paper") {
      return "You won.";
    }
  }
}
