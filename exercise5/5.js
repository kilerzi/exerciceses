const salary = 1000;
const rent = 375;
const bills = 250;

const totalExpenses = rent + bills;
const amountLeft = salary - totalExpenses;

console.log(`Bob's total expenses: ${totalExpenses} EUR`);
console.log(`Amount left for the rest of the month: ${amountLeft} EUR`);

//ne sum siguren dali trebase so function ili obicno zatoa gi napraviv devete
function calculateExpenses(salary, rent, bills) {
  const totalExpenses = rent + bills;
  const amountLeft = salary - totalExpenses;

  console.log(`Bob's total expenses: ${totalExpenses} EUR`);
  console.log(`Amount left for the rest of the month: ${amountLeft} EUR`);
}

const salary1 = 1000;
const rent1 = 375;
const bills1 = 250;

calculateExpenses(salary1, rent1, bills1);
