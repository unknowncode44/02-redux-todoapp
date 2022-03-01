import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import * as actions from './todo.actions';


export const initialState: Todo[] = [
  new Todo("Cortar el pasto"),
  new Todo("Limpiar el bano"),
  new Todo("Aspirar el sillon"),
  new Todo("Lavar las fundas")
];

const _todoReducer = createReducer(
  initialState,

  //## Crear item ##
  //* en esta expresion retornamos un nuevo arreglo con las llaves []/
  //* usamos ...state para segmentar el arreglo del state actual en "TODOS" separados/
  //* new Todo(text) para hacer que se agregue un nuevo modelo de "TODO"/
  // ## HACEMOS ESTO PARA NO MUTAR EL STATE! por ejemplo si utilizaramos push, podriamos mutar el estado
  on(actions.createTodo, (state, { text }) => [...state, new Todo(text)]), //*



  // ## Marcar item de la lista como completo ##
  on(actions.toggle, (state, { id }) => {

    // para no mutar el estado pasamos el arreglo de todos por un map
    return state.map(todo => {
      // con el clon que obtenemos con el map trabajamos segmentando
      if (todo.id === id) { // si el id del todo es igual al id marcado
        return {
          ...todo, // segmentamos el todo para no mutar el objeto
          complete: !todo.complete // cambiamos el valor del valor de completado a su opuesto
        } // y retornamos el todo con ese cambio

      } else {
        return todo;
      }

    });
  }),

  // ## Editar texto del todo en lista ##
  on(actions.edit, (state, { id, text }) => {
    return state.map(todo => { // pasamos por el map segmentando para no mutar
      if (todo.id === id) { // si el id es el mismo
        return {
          ...todo, // segmentamos
          text: text, // modificamos el texto con el nuevo texto
        }
      } else {
        return todo;
      }

    });
  }),

  // ## Borrar un item
  on(actions.deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),

  // ## Marcar todos los items
  on(actions.toggleAll, (state, { completed }) => {
    return state.map(todo => {
      if (todo.complete !== completed) {
        return {
          ...todo,
          complete: completed,
        }
      } else {
        return todo;
      }
    });
  }),

  on(actions.destroyCompleted, state => state.filter( todo => !todo.complete))


);



export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}

