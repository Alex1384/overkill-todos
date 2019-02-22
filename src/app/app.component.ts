import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './shared/models/item.model';
import { TodoService } from './shared/services/todo.service';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 
 public todos$: Observable<Item[]> = this.todoService.todos$.asObservable();
 public content: string;
 public itemContent: string;

 constructor(private todoService: TodoService) {}

 public addTodo() {
  this.todoService.addTodo({ content: this.content, done: false });
  this.itemContent ="";
  }
 

 public toggleTodo(index: number) {
   this.todoService.toggleTodo(index);
 }

 public deleteTodo(index: number) {
   console.log(index);
   this.todoService.deleteTodo(index);
 }

}

