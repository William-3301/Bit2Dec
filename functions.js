function bin_to_dec() { 
    var bits = document.getElementById('bits').value
    var number = parseInt((bits + '').replace(/[^01]/gi, ''), 2);
    if (isNaN(number) == false){
        document.getElementById('number').srcdoc= number}
    else{
        alert("Enter a valid binary number");
    }
}

