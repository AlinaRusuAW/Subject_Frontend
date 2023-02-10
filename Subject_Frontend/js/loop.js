let a = 5;
let b = 30;
let rez = 0;
for(let i=a; i<=b; i++){
   if(i % 2 == 0){
      rez += i;
   }
}
   console.log("Suma numerelor pare din intervalul indicat este: " + rez);
