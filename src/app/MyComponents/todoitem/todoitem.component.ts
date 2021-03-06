import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css'],
})
export class TodoitemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDone: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  Handleclick(todo: Todo) {
    this.todoDelete.emit(todo);
    //console.log(todo);
  }

  CheckboxChanged(todo: Todo) {
    console.log(todo);
    this.todoDone.emit(todo);
  }
}
