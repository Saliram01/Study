import React, { useState } from "react";
import InputField from "./InputField";
import SelectMenu from "./SelectMenu";

/* Example of email validation : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test("saliram@gmail.com") */
function Form({ setExpenses,expense,setExpense ,editingRowId , seteditingRowId}) {
  const [errors, setErrors] = useState({});

  const validateConfig = {
    title : [
      {required :true, message : 'Please enter title'},
      {minLength : 2, message : 'Title should be at lest 2 character'}
    ],
    category : [{required : true, message : 'Please select a category'}],
    amount : [
      {
        required : true,
        message : 'Please enter an amount',
      },
      {
        pattern : /^(0|[1-9]\d*)$/,
        message : 'Please enter valid number'
      }
    ],
    email : [
      {required : true, message : 'Please enter an email'},
      {pattern : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Please enter a valid email'}
    ]
  }

  const validate = (formData) => {
    let errorData = {};

    Object.entries(formData).forEach(([key,value]) => {
      validateConfig[key].some((rule) => {
        if(rule.required && !value) {
          errorData[key] = rule.message;
          return true;
        }
        if(rule.minLength && value.length < rule.minLength) {
          errorData[key] = rule.message;
          return true;
        }

        if(rule.pattern && !rule.pattern.test(value)) {
          errorData[key] = rule.message;
          return true;
        }
      })
    })

    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if(editingRowId) {
      setExpenses((preState) => 
        preState.map((prevExpense) => {
          if(prevExpense.id === editingRowId) {
            return {...expense, id: editingRowId}
          }
          return prevExpense;
        })
      )
      seteditingRowId('');
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <InputField Label="Title" id="title" name="title" value={expense.title} onChange={handleChange}
      errors={errors.title}/>

      <SelectMenu Label="Category" id="category" name="category" value={expense.category} onChange={handleChange}
      options ={['Grocery','Clothes','Bills','Education','Medicine']}
      defaultOption="Select Category"
      errors={errors.category}/>

      <InputField Label="Amount" id="amount" name="amount" value={expense.amount} onChange={handleChange} errors={errors.amount}/>

      <InputField Label="Email" id="email" name="email" value={expense.email} onChange={handleChange} errors={errors.email}/>

      <button className="add-btn border border-black">{editingRowId ? 'Save' : 'Add'}</button>
    </form>
  );
}

export default Form;
