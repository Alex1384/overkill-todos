import { todoListSelector, selectedTodoSelector } from './../shared/store/selectors';
import { State } from './../shared/store/index';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Item } from "../shared/models/item.model";
import { TodoService } from "../shared/services/todo.service";
import * as todosAction from '../shared/store/todos.action'
import { map } from 'rxjs/operators'
import { TodoState } from '../shared/store/todos.reducers';
import { Store, select} from '@ngrx/store';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public todos$: Observable<Item[]> = this.store.pipe(
    (select(todoListSelector)  
  ));

  public selectedTodo$: Observable<Item> = this.store.pipe(select(selectedTodoSelector));
  
  public content: string;
  public description: string;
  public selectedTodo: Item;

  constructor(private todoService: TodoService,
              private store: Store<State>) {}


  ngOnInit() {
    this.store.dispatch(new todosAction.FetchTodo());
  }

  public addTodo() {
  this.store.dispatch(new todosAction.CreateTodo({ content: this.content, done: false }));
  this.content = "";
  }

  public toggleTodo(index: number) {
  this.store.dispatch(new todosAction.ToggleTodo(index));
  }

  public deleteTodo(index: number) {
    this.store.dispatch(new todosAction.DeleteTodo(index));
  }

}
