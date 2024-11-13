import React, { useState } from "react";

function Form({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses((prevState) => [...prevState,{...expense , id: crypto.randomUUID()}]);
    setExpense({
      title : '',
      category : '',
      amount : '',
    });  

    // const expenses = {...getFormData(e.target),id:crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expenses])
    // e.target.reset();
  };

  // function getFormData(form) {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for(let  [key,values] of formData) {
  //       data[key] = values;
  //   }
  //   return data;
  // }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          className="border border-black"
          value={expense.title}
          onChange={(e) => setExpense((prev) => ({...prev, title : e.target.value}))}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="border border-black"
          value={expense.category}
          onChange={(e) => setExpense((prev) => ({...prev, category : e.target.value}))}
        >
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          className="border border-black"
          value={expense.amount}
          onChange={(e) => setExpense((prev) => ({...prev, amount : e.target.value}))}
        />
      </div>
      <button className="add-btn border border-black">Add</button>
    </form>
  );
}

export default Form;
