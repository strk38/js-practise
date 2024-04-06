document.getElementById('btn-deposit').addEventListener('click', function () {
    //Deposit
    const depositField = document.getElementById("user-deposit");
    const depositAmount = depositField.value;
    //console.log(depositAmount);

    const totalDepositField = document.getElementById("deposit-total");
    const prevDepositAmount = totalDepositField.innerText;
    //console.log(prevDepositAmount);
    const newDepositAmount = parseFloat(prevDepositAmount) + parseFloat(depositAmount);
    totalDepositField.innerText = newDepositAmount;
    //console.log(newDepositAmount);

    //Balance
    const balanceField = document.getElementById("balance-total");
    const balanceAmount = balanceField.innerText;
    //console.log(balanceAmount);
    const newBalance = parseFloat(balanceAmount) + parseFloat(depositAmount);
    balanceField.innerText = newBalance;
    //console.log(newBalance);



    //clearing Input
    depositField.value = '';

})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //Withdraw
    const withdrawField = document.getElementById("user-withdraw");
    const withdrawAmount = withdrawField.value;
    //console.log(withdrawAmount);
    if (withdrawAmount != '') {
        const totalWithdrawField = document.getElementById("withdraw-total");
        const prevWithdrawAmount = totalWithdrawField.innerText;

        //console.log(prevWithdrawAmount);
        const newWithdrawAmount = parseFloat(prevWithdrawAmount) + parseFloat(withdrawAmount);
        totalWithdrawField.innerText = newWithdrawAmount;


        //Balance
        const balanceField = document.getElementById("balance-total");
        const balanceAmount = balanceField.innerText;
        //console.log(balanceAmount);
        const newBalance = parseFloat(balanceAmount) - parseFloat(withdrawAmount);
        balanceField.innerText = newBalance;
        console.log(newBalance);

        withdrawField.value = '';
    }
})