import React from 'react'

function TodoItem({title,date,btnName}) {
  return (
    <div className="container text-center">
        <div className="row">
            <div className="col-6 text-start">{title}</div>
            <div className="col-4 text-start">{date}</div>
            <div className="col-2"><button type="button" className="btn btn-outline-danger my-1 w-100">{btnName}</button></div>
          </div>
      </div>
  )
}

export default TodoItem