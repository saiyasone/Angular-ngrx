import { createAction, props } from '@ngrx/store';
import { todoItemState } from '../../models/todo.model';

export const ADD_TODO = createAction(
  '[ADD_TODO] add todo',
  props<todoItemState>()
);
export const EDIT_TODO = createAction(
  '[EDIT_TODO] edit todo',
  props<todoItemState>()
);
export const DEL_TODO = createAction(
  '[DEL_TODO] del todo',
  props<{ id: string }>()
);
