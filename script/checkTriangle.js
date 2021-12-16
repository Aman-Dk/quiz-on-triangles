var result = document.querySelector('.output');
var btn = document.querySelector('#submit');
var triangleInputs = document.querySelectorAll('.inputTriangle');

function sumOfTriangle(a,b,c){
    const sum = a+b+c;
    return sum;
}

function checkForTriangle(){
    // if(triangleInputs[0].value>=0&&triangleInputs[1].value>=0&&triangleInputs[2].value>=0){
        const sumTriangle = sumOfTriangle(Number(triangleInputs[0].value),Number(triangleInputs[1].value),Number(triangleInputs[2].value));
        console.log(sumTriangle);
        if(sumTriangle === 180){
            result.innerText="Given angle forms a Triangle";
        }else{
            result.innerText="Sorry, Your angle doesn't form a Triangle";
        }

}

btn.addEventListener('click', checkForTriangle);