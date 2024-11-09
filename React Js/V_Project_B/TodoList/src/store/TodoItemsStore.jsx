import {useState, createContext } from 'react'

export const TodoItemsContext = createContext(
    {
        addTodoItems: [],
        addNewItem: () => {},
        deleteItems: () => {},
    }
);

function TodoItemsContextProvider({children}) {
    const [addTodoItems, setTodoItems] = useState([]);

    const addNewItem = (itemName,itemDueDate) => {
        setTodoItems((currentValue) => [...currentValue,{name : itemName, date: itemDueDate}]);
    }
  
    function deleteItems(TodoItemName) {
      setTodoItems(addTodoItems.filter((itm) =>itm.name != TodoItemName));
    }
  
    return (
        <TodoItemsContext.Provider value={{addTodoItems,addNewItem,deleteItems}}>
            {children}
        </TodoItemsContext.Provider>
    )
}

export default TodoItemsContextProvider;

