import React from 'react'

function Context_Menu({menuPosition, setMenuPosition,expenses, setExpenses, rowId,setExpense,seteditingRowId}) {
    if(!menuPosition.left) return;
    
  return (
    <div className='context-menu' style={{...menuPosition}}>
        <div onClick={() => {
            const {title, category, amount} = expenses.find((exp) => exp.id === rowId)
            setExpense({title,category,amount})
            seteditingRowId(rowId);
            setMenuPosition({});
        }}>Edit</div>
        
        <div onClick={() => {
            setExpenses((pre) => pre.filter((exp) => exp.id != rowId));
            setMenuPosition({});
        }}>Delete</div>
    </div>
  )
}

export default Context_Menu 