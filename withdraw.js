document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const widthdrawAmount = withdrawField.value;
    const newWithdrawAmount = parseFloat(widthdrawAmount);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a number!');
        return;
    }

    const totalWithdraaw = document.getElementById('total-withdraw');
    const withdrawTotal = totalWithdraaw.innerText;
    const newWithdrawBalance = parseFloat(withdrawTotal);


    const balance = document.getElementById('balance');
    const totalBalance = balance.innerText;
    const newBalance = parseFloat(totalBalance);

    if (newWithdrawAmount > newBalance) {
        alert('insuficient balance, You cant withdraw more than you have!');
        return;
    }

    const totalWithdrawAmount = newWithdrawBalance + newWithdrawAmount;
    totalWithdraaw.innerText = totalWithdrawAmount;

    const finalBalance = newBalance - newWithdrawAmount;
    balance.innerText = finalBalance;


})