//add button functionality here

// logout button function
document.getElementById("logout-btn").addEventListener("click",function(event){
    window.location.href = "index.html"
})

// default section
document.getElementById("add-money-section").style.display = "none";
document.getElementById("cashout-section").style.display = "none";
document.getElementById("transfer-money-section").style.display = "none";

// toggle: default to add money
document.getElementById("add-money").addEventListener("click", function () {
  displayStyle("add-money-section", "block");
  displayStyle("cashout-section", "none");
  displayStyle("latest-payment-section", "none");
});

// toggle: default to cashout
document.getElementById("cashout").addEventListener("click", function () {
  displayStyle("cashout-section", "block");
  displayStyle("add-money-section", "none");
  displayStyle("latest-payment-section", "none");
});

// toggle: default to transfer money
document.getElementById("transfer-money").addEventListener("click",function(){
    displayStyle("transfer-money-section", "block");
    displayStyle("cashout-section", "none");
    displayStyle("add-money-section", "none");
    displayStyle("latest-payment-section", "none");
})
