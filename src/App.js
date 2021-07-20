import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  { id: 'e5', title: "Car Insurance", amount: 799.49, date: new Date(2021, 2, 28) },
  { id: 'e6', title: "Bike", amount: 99.49, date: new Date(2020, 3, 28) },
  { id: 'e7', title: "Desktop", amount: 79.49, date: new Date(2021, 2, 28) },
  { id: 'e8', title: "Laptop", amount: 49.00, date: new Date(2020, 4, 28) },
  { id: 'e9', title: "Printer", amount: 124.25, date: new Date(2021, 3, 28) }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
    // console.log(expenses);
  };

  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
