import React from "react";

import './NewExpense.css'
import expenses from "../Expenses/Expenses";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {


    const saveExpensDateHandler =(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.objectExpense(expenseData)
    };
    return (
        <div className={"new-expense"}>
            <ExpenseForm onSaveExpensData={saveExpensDateHandler}/>
        </div>
    )
}
export default NewExpense