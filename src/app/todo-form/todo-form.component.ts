import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  ttodo = new FormControl("");
  @Output("refreshList") refresh: EventEmitter<any> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  makeID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


  submit(): void {
    let val = this.ttodo.value;
    if(val) {
      let key = this.makeID(6);
      let todo = {id: key,
        text:  val,
        completed: false};
      this.todoService.addTodo(todo);
      this.ttodo.setValue('');
      this.refresh.emit();
    }
  }
}
