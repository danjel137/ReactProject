import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses =(props)=>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };


    return(
        <div className="App">
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(exp=>(
                    <ExpenseItem
                    key={exp.id}
                    date={exp.date}
                    title={exp.title}
                    amount={exp.amount}
                    />
                ))}

            </Card>
        </div>
    )
}

export default Expenses