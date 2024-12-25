import { useReducer , createContext } from 'react';

export const TodoItemsContext = createContext(
    {
        addTodoItems: [],
        addNewItem: () => {},
        deleteItems: () => {},
    }
);

function TodoItemsContextProvider({children}) {
    
    // USING useState
    // const [addTodoItems, setTodoItems] = useState([]);
    // const addNewItem = (itemName,itemDueDate) => {
        
    //     setTodoItems((currentValue) => [...currentValue,{name : itemName, date: itemDueDate}]);
    // }
  
    // function deleteItems(TodoItemName) {
    //     console.log(TodoItemName);
    //   setTodoItems(addTodoItems.filter((itm) =>itm.name != TodoItemName));
    // }

    // USING useReducer

    const todoItemReducer = (currentTodoItem, action) => {

        let newTodoItem = currentTodoItem;

        if(action.type === 'NEW_ITEM') {
            newTodoItem = [...currentTodoItem,{name : action.payload.itemName, date : action.payload.itemDueDate}]
        }
        

        else if (action.type === "DEL_ITEM") {
            newTodoItem = currentTodoItem.filter((itm) =>itm.name != action.payload.itemName);
        }
        return newTodoItem;
    }

    const [addTodoItems, dispatch] = useReducer(todoItemReducer, []);
  
    const addNewItem = (itemName, itemDueDate) => {
        dispatch({type : "NEW_ITEM",payload : {itemName,itemDueDate}});
    };

    const deleteItems = (todoItemName) => {
        dispatch({type : "DEL_ITEM",payload : {itemName : todoItemName}});
    };

    return (
        <TodoItemsContext.Provider value={{addTodoItems,addNewItem,deleteItems}}>
            {children}
        </TodoItemsContext.Provider>
    )
}

export default TodoItemsContextProvider;

