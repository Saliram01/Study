import React from 'react';
import './App.css'
import ExpensesForm from './components/ExpensesForm'
import ExpensesTable from './components/ExpensesTable'
import { useState } from 'react';
import expensesData from './expensesData'

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email : '',
  });
  const [expenses, setExpenses] = useState(expensesData);
  const [editingRowId, seteditingRowId] = useState('');
  return (
    <div className='p-8'>
      <h1 className='font-bold text-2xl mb-2'>Track Your Expenses</h1>
        <div className='flex gap-10'>
        <ExpensesForm setExpenses={setExpenses} expense={expense} setExpense={setExpense} editingRowId={editingRowId} seteditingRowId={seteditingRowId}/>
        <ExpensesTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} seteditingRowId={seteditingRowId}/>
        </div>
    </div>
  )
}

export default App