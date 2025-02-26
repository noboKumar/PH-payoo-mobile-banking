//add reusable function here.

function displayStyle(id, style) {
    document.getElementById(id).style.display = style;
}

function getValueById(id) {
   const value = document.getElementById(id).value;
   return value;
}