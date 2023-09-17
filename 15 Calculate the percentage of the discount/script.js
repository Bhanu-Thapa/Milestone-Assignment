let product = 500;
let dis = 20;

let fun = () => {
  let disprice = product - (product / 100) * 20;
  console.log(`Original Price ${product}`);
  console.log(`Discount Price ${disprice}`);
};

fun();
