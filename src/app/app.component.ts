import { Component } from '@angular/core';

import {Store, provideStore} from '@ngrx/store';

import {PersonList} from './components/person-list';
import {PersonInput} from './components/person-input';
import {FilterSelect} from './components/filter-select';

import {people} from "./reducers/people";
import {filter} from "./reducers/filter";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	public people;
	  private id = 0;

    constructor(	private _store : Store<any>	){
		this.people = Observable.combineLatest(
			_store.select('people'),
			_store.select('filter'),
			(people : any[], filter:any) => {
				return people.filter(filter);
			}
		)
    //this.people = _store.select('people');
	}

	addPerson(name){
		this._store.dispatch({type: "ADD_PERSON", payload: {
			id: ++this.id,
			name,
			guests: 0,
			attending: false
		}})
	}

	addGuest({id}){
		this._store.dispatch({type: "ADD_GUESTS", payload: id});
	}

	removeGuest({id}){
		this._store.dispatch({type: "REMOVE_GUESTS", payload: id});
	}

	removePerson({id}){
		this._store.dispatch({type: "REMOVE_PERSON", payload: id});
	}


	toggleAttending({id}){
		this._store.dispatch({type: "TOGGLE_ATTENDING", payload: id});
	}

	updateFilter(filter){
		this._store.dispatch({type: filter});
	}

}
