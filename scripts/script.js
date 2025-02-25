document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault()
  const mobileNum = document.getElementById("mobile-number").value;
  const pinNum = document.getElementById("pin-number").value;

  const convertPinNum = parseInt(pinNum);

  if (mobileNum.length === 11) {
    if (convertPinNum === 1234) {
        window.location.href = "./main.html"
    } else{
        alert("Wrong Pin Number!")
    }
  } else{
    alert("input a valid mobile number");
  }
});
