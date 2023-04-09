import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={filteredYear} onChangeFilter={changeHandler} />
        {props.expenses
          .filter((expense) => {
            return expense.date.getFullYear() === parseInt(filteredYear);
          })
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
