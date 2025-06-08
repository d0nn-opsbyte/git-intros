function estimateTransactionFee() {
    let amounttosend = prompt("Enteramount");

     if (isNaN(amounttosend) || amounttosend <= 0) {
    console.log("Please enter a valid  amount.");
     }
     
     let basicFee = 0.015 * amounttosend;
  let transactionFee;

  if (basicFee < 10) {
    transactionFee = 10;
  } else if (basicFee > 70) {
    transactionFee = 70;
  } else {
    transactionFee = basicFee;
  } 

     let totalDebitAmount = amounttosend + transactionFee;
}
