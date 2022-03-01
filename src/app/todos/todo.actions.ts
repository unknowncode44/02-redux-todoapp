import { createAction, props } from '@ngrx/store';


export const createTodo = createAction(
    '[TODO] Crear todo',
    props<{ text: string}>(),
    );

    export const toggle = createAction(
        '[TODO] Toggle Todo',
        props<{ id: number}>(),
    );

    export const edit = createAction(
        '[TODO] Edit Todo',
        props<{ id: number, text: string }>(),
    );

    export const deleteTodo = createAction(
        '[TODO] Delete Todo',
        props<{ id: number }>(),
    );

    export const toggleAll = createAction(
        '[TODO] Toggle All',
        props<{ completed: boolean}>(),
    );

    export const destroyCompleted = createAction(
        '[TODO] Destroy Complete',
    );