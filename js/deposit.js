


document.getElementById('deposit_btn').addEventListener('click', function () {
   
    const currentDepositAmount = getValueByTextBox('deposit_box');
    console.log(currentDepositAmount);

    const previousDepositValue = getInnerTextValue('pre_deposit');
    console.log(previousDepositValue);
    
    const TotalDeposit = previousDepositValue + currentDepositAmount;
    console.log(TotalDeposit);

     const previousTotalBalance = getInnerTextValue('pre_balance');
    // console.log(previousTotalBalance);
    
    const newTotalBalance = previousTotalBalance + currentDepositAmount;
    console.log(newTotalBalance);

    setInnerText('pre_deposit', TotalDeposit);
    setInnerText('pre_balance', newTotalBalance);

})