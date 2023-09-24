
document.getElementById('deposit_btn').addEventListener('click', function () {
    const depo = document.getElementById('deposit_box');
        const depositAmountStng=depo.value;
 //   console.log(depositAmountStng);
    const depositAmount = parseFloat(depositAmountStng);
   // console.log(typeof (depositAmount));
    
    //convert pre: deposit 

    const preDepo = document.getElementById('pre_deposit');
    const preDepositStng = preDepo.innerText;
const preDeposit = parseFloat(preDepositStng);
   // console.log(preDeposit);
    const currrent_deposit = preDeposit + depositAmount;
    // console.log(currrent_deposit);
    
    preDepo.innerText = currrent_deposit;
    depo.value = '';

    //convert pre: balance

     const preBal = document.getElementById('pre_balance');
    const preBalanceStng = preBal.innerText;
const preBalance = parseFloat(preBalanceStng);
   // console.log(preBalance);
    const currrentBalance = preBalance + depositAmount;
    // console.log(currrentBalance);
    
    preBal.innerText = currrentBalance;

})
