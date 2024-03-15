console.log("HELLO WORLD");

let B = false,
  I = false,
  N = false,
  G = false,
  O = false;

  ;
function newNumber(maxNumber) {
  // Addition = "+"
  // Subtractipon = "-"
  // Multiplacation = "*"
  // Divission = "/"
  // Remainder ="%"
  let x = Math.floor(Math.random() * maxNumber) + 1;
  

// if ... else if ... else statement
// Conditional operator:
// GTE > =, LTE < =, EQ =, NEQ ! =, AND &, OR ||
if (x <= 15) {
  console.log(`New number ${x} belong to "B"`);
  B = true
}else if (x >= 16 & x <= 30) {
 console.log(`New number ${x} belong to "I"`);
 I = true
} else if (x >=31 && x <=45) {
  console.log(`New number ${x} belong to "N"`);
  N = true
} else if (x >= 46 && x <=60){ 
  console.log(`New number ${x} belong to "G"`);
  G = true
} else if (x >=61 && x <=75) { 
  console.log(`New number ${x} belong to "O"`);
  O = true

}

if (B == true && I == true && N == true && G == true && O == true) {
  console.log('BINGO!!!');
   }
}

newNumber(75);
