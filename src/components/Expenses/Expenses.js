import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={props.expenses.at(0).title}
        amount={props.expenses.at(0).amount}
        date={props.expenses.at(0).date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses.at(1).title}
        amount={props.expenses.at(1).amount}
        date={props.expenses.at(1).date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses.at(2).title}
        amount={props.expenses.at(2).amount}
        date={props.expenses.at(2).date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses.at(3).title}
        amount={props.expenses.at(3).amount}
        date={props.expenses.at(3).date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
