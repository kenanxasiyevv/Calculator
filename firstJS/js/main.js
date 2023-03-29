var date = new Date();
var hour = date.getHours();
var bgcolor = document.getElementById('colors')

if (hour >= 0 && hour <= 6) {
    alert("Geceniz Xeyre!")
    bgcolor.style.backgroundColor = '#000';
}

else if (hour >= 7 && hour <= 12) {
    alert("Sabahiniz Xeyir!")
    bgcolor.style.backgroundColor = 'aqua';
}

else if (hour >= 18 && hour <= 23) {
    alert("Axsaminiz Xeyir!")
    bgcolor.style.backgroundColor = '#0C184D';
}

else {
    alert("Gunortaniz Xeyir!")
    bgcolor.style.backgroundColor = 'yellow';
}


function Add() {
    var firstnumber = parseFloat(document.getElementById('inp').value);
    var secondnumber = parseFloat(document.getElementById('inp2').value);
    var tag = document.getElementById('result');
    var result = firstnumber + secondnumber;
    tag.innerHTML = result
}

function Difference() {
    var firstnumber = document.getElementById('inp').value;
    var secondnumber = document.getElementById('inp2').value;
    var tag = document.getElementById('result');
    var result = firstnumber - secondnumber;
    tag.innerHTML = result
}

function Multiply() {
    var firstnumber = document.getElementById('inp').value;
    var secondnumber = document.getElementById('inp2').value;
    var tag = document.getElementById('result');
    var result = firstnumber * secondnumber;
    tag.innerHTML = result

}

function Division() {
    var firstnumber = document.getElementById('inp').value;
    var secondnumber = document.getElementById('inp2').value;
    var tag = document.getElementById('result');
    var result = firstnumber / secondnumber;
    tag.innerHTML = result

    if (result % 1 >= 0) {
        tag.innerHTML = result.toFixed(2)
    }
}