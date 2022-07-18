import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {
    const localitem = localStorage.getItem('todos');
    this.todos = localitem !== null ? JSON.parse(localitem) : [new Todo()];
  }

  ngOnInit(): void {}

  DeleteTodo(todo: Todo): void {
    var index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  HandleAdd(todo: Todo): void {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  ToggleTodo(todo: Todo): void {
    console.log(todo);
    var index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log(todo);
  }
}
