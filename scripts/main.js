// default section
document.getElementById("add-money-section").style.display = "none";
document.getElementById("cashout-section").style.display = "none";


// toggle: default to add money
document.getElementById("add-money").addEventListener("click", function () {
  const defaultSection = document.getElementById("latest-payment-section");
  const addMoneySection = document.getElementById("add-money-section");
  
  document.getElementById("cashout-section").style.display = "none";

  defaultSection.style.display = "none";
  addMoneySection.style.display = "block";
});

// add money function
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const bankAcNum = document.getElementById("bank-ac-number").value;
    const addAmmount = document.getElementById("add-ammount").value;
    const convtAddAmmount = parseFloat(addAmmount);
    const pinNum = document.getElementById("pin-number").value;
    let convtPinNum = parseInt(pinNum);
    const mainBalance = document.getElementById("main-balance").innerText;
    let convtMainBalance = parseFloat(mainBalance);

    if (bankAcNum.length === 11) {
      if (addAmmount >= 1) {
        if (convtPinNum === 1234) {
          let sum = 0;
          sum = convtAddAmmount + convtMainBalance;
          document.getElementById("main-balance").innerText = sum;
        } else {
          alert("incorrect Pin Number!");
        }
      } else {
        alert("enter a valid ammount");
      }
    } else {
      alert("enter a valid AC. number");
    }
    // clear money input field
    document.getElementById("add-ammount").value = "";
  });
// toggle: default to add money
document.getElementById("cashout").addEventListener("click", function () {
  const defaultSection = document.getElementById("latest-payment-section");
  const addMoneySection = document.getElementById("add-money-section");
  const cashoutSection = document.getElementById("cashout-section");

  defaultSection.style.display = "none";
  addMoneySection.style.display = "none";
  cashoutSection.style.display = "block";
});

// withdraw money function
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const agentNum = document.getElementById("agent-number").value;
    const withdrawAmmount = document.getElementById("withdraw-ammount").value;
    const convtWithdrawAmmount = parseFloat(withdrawAmmount);
    const pinNum = document.getElementById("pin-number").value;
    let convtPinNum = parseInt(pinNum);
    const mainBalance = document.getElementById("main-balance").innerText;
    let convtMainBalance = parseFloat(mainBalance);

    if (agentNum.length === 11) {
      if (withdrawAmmount >= 1) {
        if (convtPinNum === 1234) {
          let sum = 0;
          sum = convtMainBalance - convtWithdrawAmmount;
          document.getElementById("main-balance").innerText = sum;
        } else {
          alert("incorrect Pin Number!");
        }
      } else {
        alert("enter a valid ammount");
      }
    } else {
      alert("enter a valid AC. number");
    }
    // clear money input field
    document.getElementById("add-ammount").value = "";
  });
