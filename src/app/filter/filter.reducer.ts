import { Action, createReducer, on } from '@ngrx/store';
import {setFilter, validFilters} from './filter.actions'

export const initialState: validFilters = 'all';

const _filterReducer =  createReducer<validFilters, Action>( // si tira error hay que poner el tipo en el createReducer<typo, Action>
    initialState,
    on(setFilter, (state, {filter}): validFilters => filter),
    );



export function filterReducer(state: any, action: Action) {
    return _filterReducer(state, action);
}