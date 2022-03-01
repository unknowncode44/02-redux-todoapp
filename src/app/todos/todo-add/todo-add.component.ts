import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput: FormControl;

  constructor( private store: Store<AppState>) { 
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  agregar(){

    // si no hay nada escrito no hace nada (valida con el validator.required)
    if (this.txtInput.invalid) {return;} 

    // para agregar nueva tarea hacemos dispatch de la accion createTodo y le pasamos
    // valor del txtInput:
    this.store.dispatch(actions.createTodo({ text: this.txtInput.value }));

    // limpia el campo de ingreso de tareas
    this.txtInput.reset(); 
    
  }

}
