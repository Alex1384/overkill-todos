import { Item } from './../models/item.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todos.reducers';
import * as routerReducer from '@ngrx/router-store';
import {RouterStateUrl} from './router.helper';


  export const todosSelector = createFeatureSelector<TodoState>('todos');
  export const routerSelector = createFeatureSelector<routerReducer.RouterReducerState<RouterStateUrl>>('router');

  export const todoListSelector = createSelector(
    todosSelector,
    (todoState: TodoState) => todoState.datas
  );

  export const MyRouterStateSelector = createSelector(
    routerSelector,
    routerState => routerState.state
  );

  export const selectedTodoSelector = createSelector(
    todoListSelector,
    MyRouterStateSelector,
    (todos: Item[], routerState: RouterStateUrl) => {
      const todoId = routerState.params.id;
      if (todoId && todos) {
        return todos.find(t => t.id === todoId);
      } else {
        return null;
      }
    }
  );