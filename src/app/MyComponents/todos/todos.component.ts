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
    this.todos = [
      {
        sno: 1,
        title: 'Todo Number 1',
        description: 'this is task 1',
        active: true,
      },
      {
        sno: 2,
        title: 'Todo Number 2',
        description: 'this is task 2',
        active: true,
      },
      {
        sno: 3,
        title: 'Todo Number 3',
        description: 'this is task 3',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}
}
