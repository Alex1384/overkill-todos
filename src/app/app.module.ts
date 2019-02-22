import { CoreModule } from './shared/modules/core.module';
import { LayoutModule } from './shared/modules/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { TodoService } from './shared/services/todo.service';

 import { StoreModule} from "@ngrx/store" 
 import { reducers } from './shared/store/index';
 
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutModule,
    CoreModule,
     StoreModule.forRoot(reducers) 
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
