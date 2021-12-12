simpleFunction();

function simpleFunction(){
    console.log('Simple function');
}

function showIt(text) {
    console.log('Otrzymany tekst to: ' + text);
}

showIt('Jakiś tekst');

function sumOfTwo(a, b) {
    var sum = a + b;
    console.log("Suma dodawania to: " + sum);
}
sumOfTwo(2,2);

function returnTekst(){
    return 'Jakiś tekst';
}
var text = returnTekst();
console.log(text);

function f(p1){
    console.log('Jaden parametr: ' + p1);
}
f(5);
function f(p1, p2){
    console.log('Dwa parametry: ' + p1 + ' ' + p2);
}

f(1,2);