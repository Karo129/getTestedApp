import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateVisitComponent } from './components/create-visit/create-visit.component';
import { ListVisitComponent } from './components/list-visit/list-visit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateVisitComponent,
    ListVisitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
