//add button functionality here

// logout button function
document
  .getElementById("logout-btn")
  .addEventListener("click", function (event) {
    window.location.href = "index.html";
  });

// default section
document.getElementById("add-money-section").style.display = "none";
document.getElementById("cashout-section").style.display = "none";
document.getElementById("transfer-money-section").style.display = "none";
document.getElementById("bonus-section").style.display = "none";
document.getElementById("pay-bill-section").style.display = "none";
document.getElementById("transction-section").style.display = "none";

// toggle: default to add money
document.getElementById("add-money").addEventListener("click", function () {
  displayStyle("add-money-section", "block");
  displayStyle("latest-payment-section", "none");
  displayStyle("cashout-section", "none");
  displayStyle("transfer-money-section", "none");
  displayStyle("bonus-section", "none");
  displayStyle("pay-bill-section", "none");
  displayStyle("transction-section", "none");
});

// toggle: default to cashout
document.getElementById("cashout").addEventListener("click", function () {
  displayStyle("add-money-section", "none");
  displayStyle("latest-payment-section", "none");
  displayStyle("cashout-section", "block");
  displayStyle("transfer-money-section", "none");
  displayStyle("bonus-section", "none");
  displayStyle("pay-bill-section", "none");
  displayStyle("transction-section", "none");
});

// toggle: default to transfer money
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    displayStyle("add-money-section", "none");
    displayStyle("latest-payment-section", "none");
    displayStyle("cashout-section", "none");
    displayStyle("transfer-money-section", "block");
    displayStyle("bonus-section", "none");
    displayStyle("pay-bill-section", "none");
    displayStyle("transction-section", "none");
  });

// toggle: default to transfer money
document.getElementById("bonus").addEventListener("click", function () {
  displayStyle("add-money-section", "none");
  displayStyle("latest-payment-section", "none");
  displayStyle("cashout-section", "none");
  displayStyle("transfer-money-section", "none");
  displayStyle("bonus-section", "block");
  displayStyle("pay-bill-section", "none");
  displayStyle("transction-section", "none");
});

// toggle: default to pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
  displayStyle("add-money-section", "none");
  displayStyle("latest-payment-section", "none");
  displayStyle("cashout-section", "none");
  displayStyle("transfer-money-section", "none");
  displayStyle("bonus-section", "none");
  displayStyle("pay-bill-section", "block");
  displayStyle("transction-section", "none");
});

// toggle: default to transaction
document.getElementById("Transactions").addEventListener("click", function () {
  displayStyle("add-money-section", "none");
  displayStyle("latest-payment-section", "none");
  displayStyle("cashout-section", "none");
  displayStyle("transfer-money-section", "none");
  displayStyle("bonus-section", "none");
  displayStyle("pay-bill-section", "none");
  displayStyle("transction-section", "block");
});
