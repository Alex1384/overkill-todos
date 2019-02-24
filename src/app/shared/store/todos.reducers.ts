import { Item } from './../models/item.model';
import * as todosAction from './todos.action'


    const initialState = {
        datas: null,
        loading: false,
        loaded: false,
        error: null
    };

    export interface TodoState {
    datas: Item[];
    loading: boolean,
    loaded: boolean,
    error: any
    }

    export function todosReducer( state : TodoState = initialState, action: todosAction.TodosActionType ) : TodoState {
    switch (action.type) {
        case todosAction.FETCH_TODO :
            return {
                ...state,
                loading: true
            };
        case todosAction.FETCH_TODO_SUCCESS :
            return {
                ...state,
                datas: action.payload,
                loading: false,
                loaded: true,
                error: null
            };
        case todosAction.FETCH_TODO_ERROR :
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            };
        
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

