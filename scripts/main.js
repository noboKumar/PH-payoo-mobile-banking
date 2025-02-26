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
    const timeNow = new Date().toLocaleTimeString();
    const bank = document.getElementById("bank-selector").value;

    if (bankAcNum.length === 11) {
      if (addAmmount >= 1) {
        if (convtPinNum === 1234) {
          let sum = 0;
          sum = convtAddAmmount + convtMainBalance;
          document.getElementById("main-balance").innerText = sum;

          const transcationContainer = document.getElementById(
            "transction-history-container"
          );
          const div = document.createElement("div");
          div.classList.add("py-5");
          div.innerHTML = `
          <div class="flex justify-between border-2 p-4 rounded-2xl">
            <div class="flex items-center gap-4">
            <img src="./assets/wallet1.png" alt="">
            <div>
              <h1 class="text-lg font-semibold text-slate-600">Credited ${convtAddAmmount} TK from ${bank}</h1>
              <p class=" text-slate-500">${timeNow}</p>
            </div>
          </div>
          <p class="text-xl">:</p>
        </div>
          `;
          transcationContainer.appendChild(div);
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

// cashout money function
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
    const timeNow = new Date().toLocaleTimeString();

    if (withdrawAmmount > convtMainBalance) {
      alert("insufficient Balance");
      return;
    }

    if (agentNum.length === 11) {
      if (withdrawAmmount >= 1) {
        if (convtPinNum === 1234) {
          let sum = 0;
          sum = convtMainBalance - convtWithdrawAmmount;
          document.getElementById("main-balance").innerText = sum;

          const transcationContainer = document.getElementById(
            "transction-history-container"
          );
          const div = document.createElement("div");
          div.classList.add("py-5");
          div.innerHTML = `
          <div class="flex justify-between border-2 p-4 rounded-2xl">
            <div class="flex items-center gap-4">
            <img src="./assets/wallet1.png" alt="">
            <div>
              <h1 class="text-lg font-semibold text-slate-600">Debited ${convtWithdrawAmmount} TK from ${agentNum}</h1>
              <p class=" text-slate-500">${timeNow}</p>
            </div>
          </div>
          <p class="text-xl">:</p>
        </div>
          `;
          transcationContainer.appendChild(div);
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

// transfer money function
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const userNum = document.getElementById("agent-number").value;
    const transferAmmount = document.getElementById("transfer-ammount").value;
    const convtTransferAmmount = parseFloat(transferAmmount);
    const pinNum = document.getElementById("pin-number").value;
    let convtPinNum = parseInt(pinNum);
    const mainBalance = document.getElementById("main-balance").innerText;
    let convtMainBalance = parseFloat(mainBalance);
    const timeNow = new Date().toLocaleTimeString();

    if (convtTransferAmmount > convtMainBalance) {
      alert("insufficient Balance");
      return;
    }

    if (userNum.length === 11) {
      if (convtTransferAmmount >= 1) {
        if (convtPinNum === 1234) {
          let sum = 0;
          sum = convtMainBalance - convtTransferAmmount;
          document.getElementById("main-balance").innerText = sum;

          const transcationContainer = document.getElementById(
            "transction-history-container"
          );
          const div = document.createElement("div");
          div.classList.add("py-5");
          div.innerHTML = `
          <div class="flex justify-between border-2 p-4 rounded-2xl">
            <div class="flex items-center gap-4">
            <img src="./assets/wallet1.png" alt="">
            <div>
              <h1 class="text-lg font-semibold text-slate-600">Transfer ${transferAmmount} TK To ${userNum}</h1>
              <p class=" text-slate-500">${timeNow}</p>
            </div>
          </div>
          <p class="text-xl">:</p>
        </div>
          `;
          transcationContainer.appendChild(div);
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
    document.getElementById("transfer-ammount").value = "";
  });

// pay bill function
document.getElementById("pay-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const billerNum = document.getElementById("biller-number").value;
  const payAmmount = getValueById("pay-ammount");
  const pinNum = getValueById("pin-number");
  const mainBalance = document.getElementById("main-balance").innerText;
  const convtMainBalance = parseFloat(mainBalance);
  const timeNow = new Date().toLocaleTimeString();
  const bill = document.getElementById("bill-selector").value;

  if (payAmmount > convtMainBalance) {
    alert("insufficient Balance");
    return;
  }
  if (billerNum.length === 11) {
    if (pinNum === 1234) {
      let sum = 0;
      sum = convtMainBalance - payAmmount;
      setInnerText("main-balance", sum);
      const transcationContainer = document.getElementById(
        "transction-history-container"
      );
      const div = document.createElement("div");
      div.classList.add("py-5");
      div.innerHTML = `
      <div class="flex justify-between border-2 p-4 rounded-2xl">
        <div class="flex items-center gap-4">
        <img src="./assets/wallet1.png" alt="">
        <div>
          <h1 class="text-lg font-semibold text-slate-600">Paid ${payAmmount} TK for ${bill}</h1>
          <p class=" text-slate-500">${timeNow}</p>
        </div>
      </div>
      <p class="text-xl">:</p>
    </div>
      `;
      transcationContainer.appendChild(div);
    } else {
      alert("Incorrect Password!");
    }
  } else {
    alert("Enter a Valid Number");
  }
  document.getElementById("pay-ammount").value = "";
  document.getElementById("biller-number").value = "";
});
