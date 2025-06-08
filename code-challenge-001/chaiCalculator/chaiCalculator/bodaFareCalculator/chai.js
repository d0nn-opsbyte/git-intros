function calculateChaiIngridients() {
    let numberOfcups = parseInt(prompt("How many cups of Chai would you like?"), 10);

    if((numberOfcups) <=0) {
        console.log("Try again");
    }

    const waterpercup =200;
    const milkpercup =50;
    const tealeavespercup = 2;
    const sugarpercup = 3;

  const totalWater = waterpercup * numberOfcups;
  const totalMilk = milkpercup * numberOfcups;
  const totalTeaLeaves = tealeavespercup * numberOfcups;
  const totalSugar = sugarpercup * numberOfcups;
}
