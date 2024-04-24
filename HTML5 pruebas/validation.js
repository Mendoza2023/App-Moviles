function onlyNumberKey(evt) {
    const KEY_SPACE=32;
    const KEY_CERO=48;
    const KEY_NINE=57;
    
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode >= KEY_SPACE && (ASCIICode < KEY_CERO || ASCIICode > KEY_NINE))
        return false;
    return true;
}