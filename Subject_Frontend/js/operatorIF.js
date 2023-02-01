let a = 6;
let b = 3;
let c = 10;

// afisam valoarea variabilelor
console.log("Valoarea variabilei a: " + a);
console.log("Valoarea variabilei b: " + b);
console.log("Valoarea variabilei c: " + c);

let numarMax = Math.max(a, b, c);
let numarMin = Math.min(a, b, c);
console.log("Numarul maxim este " + numarMax);
console.log("Numarul minim este " + numarMin);

console.log("--------------");

// determinam numarul maxim si minim cu ajutorul operatorului if

let max;
if(a >= b && a >= c) {
    max = a;
}
else if (b >= a && b >= c) {
    max = b;
}
else {
    max = c;
}
console.log("Numarul maxim este " + max);


let min;
if(a <= b && a <= c) {
    min = a;
}
else if (b <= a && b <= c) {
    min = b;
}
else {
    min = c;
}
console.log("Numarul minim este " + min);