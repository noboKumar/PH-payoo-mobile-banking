//add reusable function here.

// get id and give a display style
function displayStyle(id, style) {
    document.getElementById(id).style.display = style;
}

// get id and give that id value
function getValueById(id) {
   const value = document.getElementById(id).value;
   const convertValue = parseInt(value)
   return convertValue;
}

// set innerText
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
