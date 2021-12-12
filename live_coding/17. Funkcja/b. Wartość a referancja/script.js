var numerVal = 5;
numerVal = 4;

function rewrite(param){
    console.log('Wartość wewnątrz funkcji: ' + param);
    param = 10;
    console.log('Wartość wewnątrz funkcji: ' + param);
}

rewrite(numerVal);
console.log(numerVal);

var numerArray = [1, 2, 3];

function rewrite2(arr) {
    console.log(arr);
    arr[1] = 1000;
    console.log(arr);
}

rewrite2(numerArray);
console.log(numerArray);



console.log('-----------------------');
console.log('1' == 1);
console.log('1' === 1);