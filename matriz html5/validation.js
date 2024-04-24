
function editCell() {
  const input = document.createElement("input");
  input.type = "number";
  input.value = this.innerHTML;
  input.addEventListener("blur", saveCell);
  this.innerHTML = "";
  this.appendChild(input);
  input.focus();
}

function saveCell() {
  const value = parseInt(this.value) || 0;
  this.parentNode.innerHTML = value;
}
  
function onlyNumberKey(evt) {
    const KEY_SPACE=32;
    const KEY_CERO=48;
    const KEY_NINE=57;
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode >=KEY_SPACE && (ASCIICode < KEY_CERO || ASCIICode > KEY_NINE))
        return false;
    return true;
}