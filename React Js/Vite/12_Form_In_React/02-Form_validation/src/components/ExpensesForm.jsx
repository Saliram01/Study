import React, { useState } from "react";

function Form({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    let errorData  = {};

    if(!formData.title) {
      errorData.title = "Title is required";
    }

    if(!formData.category) {
      errorData.category = 'Category is required';
    }

    if(!formData.amount) {
      errorData.amount = 'Amount is requires';
    }

    setErrors(errorData);
    return errorData;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if(Object.keys(validateResult).length) {return;}

    setExpenses((prevState) => [...prevState,{...expense , id: crypto.randomUUID()}]);
    setExpense({
      title : '',
      category : '',
      amount : '',
    });  
  }

  const handleChange = (e) => {
    const {name , value } = e.target;
    setExpense((prev) => ({...prev, [name] : value}))
    setErrors({});
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          className="border border-black"
          value={expense.title}
          onChange={handleChange}
        />
      <p className="error">{errors.title}</p>
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="border border-black"
          value={expense.category}
          onChange={handleChange}
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
        <p className="error">{errors.category}</p>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          className="border border-black"
          value={expense.amount}
          onChange={handleChange}
        />
        <p className="error">{errors.amount}</p>
      </div>
      <button className="add-btn border border-black">Add</button>
    </form>
  );
}

export default Form;
