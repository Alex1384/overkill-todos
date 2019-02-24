import { Action } from '@ngrx/store';
import { Item } from '../models/item.model';


export const FETCH_TODO = '[todo] fetch';
export const FETCH_TODO_SUCCESS = '[todo] fetch success';
export const FETCH_TODO_ERROR ='[todo] fetch error'
export const TODO_CREATE = '[todo] create';
export const TODO_DELETE = '[todo] delete';
export const TODO_TOGGLE = '[todo] toggle';

export class CreateTodo implements Action {
  readonly type = TODO_CREATE;
  constructor(public payload: Item) {}
}

export class DeleteTodo implements Action {
  readonly type = TODO_DELETE;
  constructor(public payload: number) {}
}

export class ToggleTodo implements Action {
  readonly type = TODO_TOGGLE;
  constructor(public payload: number) {}
}

export class FetchTodo implements Action {
  readonly type = FETCH_TODO;
}

export class FetchTodoSuccess implements Action {
  readonly type = FETCH_TODO_SUCCESS
  constructor(public payload: Item[]){}
}

export class FetchTodoError implements Action {
  readonly type = FETCH_TODO_ERROR;
  constructor(public payload: any) {}
}

export type TodosActionType = CreateTodo |
                              DeleteTodo |
                              ToggleTodo |
                              FetchTodo |
                              FetchTodoSuccess |
                              FetchTodoError;