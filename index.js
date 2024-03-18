console.log("HELLO WORLD");

let B = false,
  I = false,
  N = false,
  G = false,
  O = false;

  let Bnumber, Inumber, Nnumber, Gnumber, Onumber;



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
  Bnumber = x;
}else if (x >= 16 & x <= 30) {
 console.log(`New number ${x} belong to "I"`);
 I = true
 Inumber = x;
} else if (x >=31 && x <=45) {
  console.log(`New number ${x} belong to "N"`);
  N = true
  Nnumber = x;
} else if (x >= 46 && x <=60){ 
  console.log(`New number ${x} belong to "G"`);
  G = true
  Gnumber = x;
} else if (x >=61 && x <=75) { 
  console.log(`New number ${x} belong to "O"`);
  O = true
  Onumber = x;                                                          

}

if (B == true && I == true && N == true && G == true && O == true) {
  console.log('BINGO!!!');
  console.table({
    B: Bnumber,
    I: Bnumber,
    N: Bnumber,
    G: Bnumber,
    O: Bnumber,

    });
   }
}

newNumber(75);

// LOOPS
let counter = 5;
//for( counter =0; counter < 3; counter -= 1) {
  //  console.log(`current counter is ${counter}`);
  //   // if (counter == 2) break;
  //  newNumber(75);
  //}
  
  //while (counter >= 0){
  //  console.log(`While Current counter is ${counteer}`);
  //    //  if (counter == 2) break;
  
  //  newNumber(75);
  //  counter--;
  //}

  while (!B || !I || !N || !G || !O){
    newNumber(75);
  }