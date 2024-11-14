import React from 'react';
import './App.css'
import ExpensesForm from './components/ExpensesForm'
import ExpensesTable from './components/ExpensesTable'
import { useState } from 'react';
import expensesData from './expensesData'

function App() {
  const [expenses, setExpenses] = useState(expensesData);
  return (
    <div className='p-8'>
      <h1 className='font-bold text-2xl mb-2'>Track Your Expenses</h1>
        <div className='flex gap-10'>
        <ExpensesForm setExpenses={setExpenses}/>
        <ExpensesTable expenses={expenses}/>
        </div>
    </div>
  )
}

export default App