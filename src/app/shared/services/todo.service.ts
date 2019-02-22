    import { Injectable } from '@angular/core';
    import { BehaviorSubject } from 'rxjs';
    import { Item } from '../models/item.model';

    @Injectable()
    export class TodoService {
    
        itemContent : string = "";

        todos$: BehaviorSubject<Item[]> = new BehaviorSubject([
        
        {
        content: "hello",
        done: false
        },

        {
        content: "bye bye",
        done: false
        }
    ]);

    constructor() { }

    public addTodo(todo: Item) {
        this.todos$.next([ ...this.todos$.value, todo]);
    }
    
    public deleteTodo(index: number) {
        this.todos$.next(this.todos$.value.filter((v, i) => i !== index));
    } 

    public toggleTodo(index: number) {
        const currentTodos = this.todos$.value;
        currentTodos[index].done = !currentTodos[index].done;
        this.todos$.next(currentTodos);
    } 

    }