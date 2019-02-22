import { Item } from './../models/item.model';
import * as todosAction from './todos.action'


    const initialState = {
        datas: [
        {
            content: "Faire ses courses",
            done: false
            
        }
    ]
    };

    export interface TodoState {
    datas: Item[];
    }

    export function todosReducer( state : TodoState = initialState, action: todosAction.TodosActionType ) : TodoState {
    switch (action.type) {
        case todosAction.TODO_CREATE:
        return {
            ...state,
            datas: [...state.datas, action.payload]
        };
        
        case todosAction.TODO_DELETE :
        return {
            ...state,
            datas: state.datas.filter( (t, i) => i !==action.payload)
        };
        
        case todosAction.TODO_TOGGLE :
        const selectedTodo = state.datas[action.payload];
        selectedTodo.done = !selectedTodo.done;
        const newTodos = [...state.datas];
        newTodos[action.payload] = selectedTodo;
        return {
            ...state,
            datas: newTodos
        };

        default:
        return state;
    
        }
    }  

