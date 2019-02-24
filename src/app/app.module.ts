import { CoreModule } from './shared/modules/core.module';
import { LayoutModule } from './shared/modules/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { TodoService } from './shared/services/todo.service';

import { StoreModule} from "@ngrx/store"; 
import { reducers } from './shared/store/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EffectsModule} from '@ngrx/effects'
import { TodosEffects } from './shared/store/todos.effects';
import { RouterModule} from '@angular/router'
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { MyRouterStateSerializer } from './shared/store/router.helper';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    CoreModule,
  
     StoreModule.forRoot(reducers), 
     StoreDevtoolsModule.instrument({
      name: 'to do'
    }),
    
    EffectsModule.forRoot([TodosEffects]),
    RouterModule.forRoot([
      {
        path: 'todo', component: TodoListComponent
      },
      {
        path: '', redirectTo: 'Todo', pathMatch: 'full'
      },
      {
        path: 'todo/:id', component: TodoListComponent
      }
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
    
  ],
  providers: [
    TodoService,
    {provide: RouterStateSerializer ,useClass : MyRouterStateSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
