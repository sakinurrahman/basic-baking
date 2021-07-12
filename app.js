  // login button event handler
  const loginBtn = document.getElementById("login");
  loginBtn.addEventListener("click", function(){
      const loginArea = document.getElementById("login-area");
      loginArea.style.display = "none";
      const transactionArea = document.getElementById("transaction-area");
      transactionArea.style.display = "block";
  });

  //Deposit and Balance update function
  const depositButton = document.getElementById("addDeposit");
  depositButton.addEventListener('click', function(){
    let newDepositAmount = getInputNumber('depositAmount');

    updateBalanceFunc('currentDeposit', newDepositAmount );
    updateBalanceFunc('currentBalance', newDepositAmount );
    document.getElementById('depositAmount').value = ""
  })
  
  // withdraw button event handler
  const withdrawBtn = document.getElementById("addWithdraw");
  withdrawBtn.addEventListener("click", function(){
    let newWithdrawAmount = getInputNumber('withdrawAmount');
    updateBalanceFunc('currentWithdraw', newWithdrawAmount );
    updateBalanceFunc('currentBalance', - newWithdrawAmount );
    document.getElementById("withdrawAmount").value = ""
  })


  let getInputNumber = (id) => {
    let amount = document.getElementById(id).value;
      let amountNumber = parseFloat(amount);
      return amountNumber;
  }

  let updateBalanceFunc = (id, userAmount) =>{
    let currentValue = document.getElementById(id).innerText;
      let currentValueNumber = parseFloat(currentValue);
        let totalAmounts = currentValueNumber + userAmount;
        document.getElementById(id).innerText = totalAmounts;
 }
