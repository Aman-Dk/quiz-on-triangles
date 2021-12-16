var result = document.querySelector('.output');
var btn = document.querySelector('#submit');

var base = document.querySelector('#base');
var height = document.querySelector('#height');

const calcHypotenuse = () => {
    var baseVal = Number(base.value);
    var heightVal = Number(height.value);

    if (baseVal && heightVal !== " ") {
        var sumSquares = (baseVal * baseVal) + (heightVal * heightVal);
        var hypotenuse = Math.sqrt(sumSquares);

        result.innerText = "Hypotenuse = " + hypotenuse;
    } else {
        result.innerText = "Both base and height fields are required";
    }
}

btn.addEventListener('click', calcHypotenuse);