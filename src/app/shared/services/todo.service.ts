
import { Item } from './../models/item.model';
import { Injectable } from '@angular/core';
import { Observable, timer} from 'rxjs'
import { map } from 'rxjs/operators'
   

    @Injectable()
    export class TodoService {
    

        constructor() { }
        
        public getTodos(): Observable<Item[]> {
            return timer(2000).pipe(
                map( () => [
                    {
                        id: '1',
                        content: 'travailler',
                        done: false,
                    },
                    {
                        id: '2',
                        content: 'Manger',
                        done: false,

                    }
                ])
            )
        }
    }