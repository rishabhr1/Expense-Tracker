import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        //value passed from ExpenseForm which we will receive here as a parameter in new expense
        const expenseData = {
            ...enteredExpenseData, //copy in the enteredExpenseData
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData); //lifting the state up to app.js
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    //(line 13)<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> is used to communicate up
    return (
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};
export default NewExpense;
