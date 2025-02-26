//add reusable function here.

// get id and give a display style
function displayStyle(id, style) {
    document.getElementById(id).style.display = style;
}

// get id and give that id value
function getValueById(id) {
   const value = document.getElementById(id).value;
   return parseInt(value);
}

