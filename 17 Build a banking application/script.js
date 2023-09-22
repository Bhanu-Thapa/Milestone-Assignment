let acdetails = {
  name: 'Bhanu',
  balance: 700000,
  depo: function (dep) {
    this.balance = this.balance + dep;
    console.log(`Balance after deposite ${this.balance}`);
  },
  with: function (wit) {
    if (this.balance <= 0 || this.balance < wit) {
      console.log('not enough money, check your balance');
    } else {
      this.balance = this.balance - wit;
      console.log(`Balance after withdrawal ${this.balance}`);
    }
  },
};

acdetails.depo(70);
acdetails.with(80000);
