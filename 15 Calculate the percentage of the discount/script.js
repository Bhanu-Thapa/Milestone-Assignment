let product = 500;
let disprice = 400;

let fun = () => {
  let dis = (100 * (product - disprice)) / product;
  console.log(`${dis}%`);
};

fun();
