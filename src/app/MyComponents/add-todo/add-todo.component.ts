import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  description!: string;
  @Output() addToDo: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  HandleSubmit(): void {
    var todo = new Todo();
    todo.sno = 0;
    todo.active = true;
    todo.title = this.title;
    todo.description = this.description;
    this.addToDo.emit(todo);
  }
}
