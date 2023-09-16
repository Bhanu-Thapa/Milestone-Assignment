let customerCart = [
  {
    unitprice: 50,
    quantity: 3,
  },
  {
    unitprice: 35,
    quantity: 2,
  },
];

let cal = () => {
  let totalCost = 0;
  for (let i = 0; i < customerCart.length; i++) {
    totalCost += customerCart[i].unitprice * customerCart[i].quantity;
  }
  console.log(totalCost);
};

cal();
