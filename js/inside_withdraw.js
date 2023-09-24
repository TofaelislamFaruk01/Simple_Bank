
document.getElementById('withdraw_btn').addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw_box');
        const withdrawAmountStng=withdraw.value;
 //   console.log(withdrawAmountStng);
    const withdrawAmount = parseFloat(withdrawAmountStng);
   // console.log(typeof (withdrawAmount));
    
    //convert pre: withdraw

    const preWdraw = document.getElementById('pre_withdraw');
    const preWithdrawStng = preWdraw.innerText;
const preWithdraw = parseFloat(preWithdrawStng);
   // console.log(preWithdraw);
    const currrentWithdraw = preWithdraw + withdrawAmount;
    // console.log(currrentWithdraw );

    //------------

     const preBal = document.getElementById('pre_balance');
    const preBalanceStng = preBal.innerText;
const preBalance = parseFloat(preBalanceStng);
    // console.log(preBalance);
    if (withdrawAmount <= preBalance) {
        const currrentBalance = preBalance - withdrawAmount;
    // console.log(currrentBalance);
    
        preBal.innerText = currrentBalance;
        
         preWdraw.innerText = currrentWithdraw;
    withdraw.value = '';
    }
    else
    {
        alert('Not enough money!!!please deposit first...');
        withdraw.value = '';

        }
    

    //------------------------
    
   

    //convert pre: balance

    

})
