// step:1 add event listener to the deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // step-2 : get the deposit amount from the deposit input
    const depositInput = document.getElementById('deposit-money');
    const depositInputMoney = depositInput.value;
    const newDepositAmount = parseFloat(depositInputMoney);
    // step:2= get the current deposit total
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositTotal = totalDeposit.innerText;
    const newDepositTotal = parseFloat(previousDepositTotal);
    const presentDepositTotal = newDepositTotal + newDepositAmount;
    // step:4 - add the total deposit amount
    totalDeposit.innerText = presentDepositTotal;
    // step-5: add deposit in the balance
    const balance = document.getElementById('balance');
    const balanceTotal = balance.innerText;
    const newBalanceTotal = parseFloat(balanceTotal);
    // step-6: calculate current total balance
    balance.innerText = newBalanceTotal + newDepositAmount;
    // step-7: clear deposit field

    depositInput.value = '';


    // const depositInputMoneyNumber = parseInt(depositInputMoney);
    // let totalDeposit = document.getElementById('total-deposit');
    // const totalDepositMoney = totalDeposit.innerText;
    // const totalDepositMoneyNumber = parseInt(totalDepositMoney);
    // const totalAmount = depositInputMoneyNumber + totalDepositMoneyNumber;
    // totalDeposit = totalAmount;
    // console.log(totalDeposit)
})