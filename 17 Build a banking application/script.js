let acdetails = {
  name: 'Bhanu',
  balance: 700000,
  depo: (dep) => {
    balance = this.balance + dep;
    console.log(this.balance);
  },
  with: (wit) => {
    balance = this.balance - wit;
    console.log(this.balance);
  },
};

console.log(acdetails);
acdetails.depo(70);
