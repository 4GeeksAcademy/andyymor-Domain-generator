const randomDomanin = () => {
  let pronoun = ["The", "our"];
  let adj = ["Wonderful", "gargantuan", "vituparative"];
  let domamin = [".com", ".net", ".org"];

  for (let i = 0; i < pronoun.length; i++)
    for (let x = 0; x < adj.length; x++)
      for (let z = 0; z < domamin.length; z++)
        console.log(pronoun[i] + adj[x] + domamin[z]);
};

console.log(randomDomanin());
