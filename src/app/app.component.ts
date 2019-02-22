import { State } from './shared/store/index';
import { Store, select} from '@ngrx/store';
import { TodoState } from './shared/store/todos.reducers';
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "./shared/models/item.model";
import { TodoService } from "./shared/services/todo.service";
import * as todosAction from './shared/store/todos.action'
import { map } from 'rxjs/operators'
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
  export class AppComponent {
      public todos$: Observable<Item[]> = this.store.pipe(
        select('todos'),
        map( (todoState: TodoState) => todoState.datas)
      );
      public content: string;

      constructor(private todoService: TodoService,
                  private store: Store<State>) {}



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
