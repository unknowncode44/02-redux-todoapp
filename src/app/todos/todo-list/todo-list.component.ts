import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { validFilters } from 'src/app/filter/filter.actions';


import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  // 2do creamdos un arreglo de Todo[] vacio
  todos: Todo[] = [];
  // creamos argumentos para manipular filtros
  actualFilter: validFilters; // pasaremos este argumento al html para que muestre lista filtrada


  // 1ro inyectamos el store<appstate> dentro del todo-list
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // 3ro en la funcion ngInit nos subscribimos a los todos y a los filtros.
    this.store.subscribe(({ todos, filter}) => {
      this.todos        = todos;
      this.actualFilter = filter;
    });
    
    
  
  
  }

}
