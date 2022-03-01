import { Component, OnInit, Pipe } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from '../../filter/filter.actions';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: filterActions.validFilters = 'all';
  filters: filterActions.validFilters[]    = ['all', 'pending', 'completed'];

  pending: number = 0;

  

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.actualFilter = state.filter;
      this.pending      = state.todos.filter( todo => !todo.complete).length
    })
  }

  changeFilter(filter: filterActions.validFilters) {
    this.store.dispatch(filterActions.setFilter({filter}));
  }

  destroyCompleted() {
    this.store.dispatch(actions.destroyCompleted());
  }



}
