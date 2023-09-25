document.getElementById('withdraw_btn').addEventListener('click', function () {
   
    const currrentWithdrawAmount = getValueByTextBox('withdraw_box');
  //  console.log(currrentWithdrawAmount);

    const previousTotalBalance = getInnerTextValue('pre_balance');
   // console.log(previousTotalBalance);

    if (currrentWithdrawAmount <= previousTotalBalance) {
        
          const previousWithdrawValue = getInnerTextValue('pre_withdraw');
        //   console.log(previousWithdrawValue);

    const totalWithdraw = previousWithdrawValue + currrentWithdrawAmount;
        console.log(totalWithdraw);
        
        const newTotalBalance = previousTotalBalance - currrentWithdrawAmount;

        setInnerText('pre_withdraw', totalWithdraw);
        setInnerText('pre_balance', newTotalBalance);     
    }
    else
    {
        alert('not enough money..please deposit first');
        }   
})