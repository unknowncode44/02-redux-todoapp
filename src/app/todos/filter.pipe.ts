import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'filterTodo' // nombre del pipe
})
export class FilterPipe implements PipeTransform {

  // del arreglo de todos, quoero queamos los filtros y que retornes el arreglo con los filtros aplicados
  transform(todos: Todo[], filter: validFilters): Todo[] {

    // sil el filtro es completed retrorna solo los completos
    switch (filter) {
      // si el filtro es completed retrorna solo los completos
      case 'completed':
        return todos.filter(todo => todo.complete);
      // si es pending solo devuelve los pendings
      case 'pending':
        return todos.filter(todo => !todo.complete);
      default:
      // caso contrario devolve all
        return todos;

    }

  }
}
