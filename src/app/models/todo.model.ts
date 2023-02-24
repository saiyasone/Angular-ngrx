export interface todoState {
  totalItem: 0;
  todos: todoItemState[];
}
export interface todoItemState {
  id: string;
  title: string;
  description: string;
}

