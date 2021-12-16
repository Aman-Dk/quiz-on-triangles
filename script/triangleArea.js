var result = document.querySelector('.output');
var btn = document.querySelector('#submit');

var base = document.querySelector('#base');
var height = document.querySelector('#height');

function calcArea(b,h){
    var area = (b*h)/2;
    return area;
}

function calculateAreaOfTriangle(){
    var baseVal = Number(base.value);
    var heightVal = Number(height.value);

    if(baseVal && heightVal !==" "){
        var area = calcArea(baseVal,heightVal);

        result.innerText = "Area of Triangle is " + area + " square cm";
    }else{
        result.innerText = "Both base and height fields are required";
    }
}

btn.addEventListener('click', calculateAreaOfTriangle);