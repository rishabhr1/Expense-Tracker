import React, {useState} from 'react';
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "Car Insurance",
        amount: 294.12,
        date: new Date(2020, 9, 28),
    },
    {
        id: "e3",
        title: "Grocery",
        amount: 68.12,
        date: new Date(2020, 10, 26),
    },
    {
        id: "e4",
        title: "Maintenance",
        amount: 244.12,
        date: new Date(2020, 5, 11),
    },
];
const App=()=> {
    const [expenses, setExpenses]=useState(DUMMY_EXPENSES);
    const addExpenseHandler=expense=>{
        setExpenses((prevExpenses)=>{
            return [expense, ...prevExpenses];
        });
    };
    //console.log(expenses);
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expense items={expenses}></Expense>
            
        </div>
    );
}

export default App;
