/*
  Name: Mohamed Lamine Tourki   
  Date: 11/6/2025
*/


let snackCount = prompt("How many snacks do you want?");
if (snackCount === null) {
  console.log("No snacks requested. Exiting.");
} else {

  snackCount = Number(snackCount);

  if (Number.isNaN(snackCount) || snackCount <= 0) {
    console.log("Invalid amount. Exiting.");
  } else {
   
    let totalSnacksGiven = 0;

    for (let i = 1; i <= snackCount; i++) {
      
      const snack = prompt(`Enter snack #${i} name:`);

      
      if (snack === null) {
        console.log("Snack selection canceled. Exiting.");
        break;
      }

      
      const clean = snack.trim() === "" ? `Snack ${i}` : snack.trim();

      
      console.log(`Snack #${i}: ${clean} given to customer`);
      totalSnacksGiven++;

      if (i % 3 === 0) {
        console.log("You got a bonus snack!");
      }
    }

    
    console.log(`Total snacks actually given: ${totalSnacksGiven}`);
  }
}
