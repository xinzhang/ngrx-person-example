import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PersonList} from './components/person-list';
import {PersonInput} from './components/person-input';
import {FilterSelect} from './components/filter-select';

import { StoreModule } from '@ngrx/store';
import {people} from "./reducers/people";
import {filter} from "./reducers/filter";

@NgModule({
  declarations: [
    AppComponent,PersonList, PersonInput, FilterSelect
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ people, filter}),
    FormsModule,
    HttpModule
  ],  
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
