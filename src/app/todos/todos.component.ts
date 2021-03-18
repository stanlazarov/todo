import { Component, OnInit } from '@angular/core';
import {TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  data;
  mode;
  activeCount;

  constructor(private todoService: TodoService) {
    this.mode = {all: true, uncompleted: false, completed: false};
   }

  ngOnInit(): void {
    if(this.mode.all){
      this.data = this.todoService.getAll();
      this.activeCount = this.data.filter(x => x.completed === false).length;
    }
    else if(this.mode.uncompleted) {
      this.data = this.todoService.getUncompleted();
    }
    else {
      this.data = this.todoService.getCompleted();
    }
  }

  toggleCompleted(id: string): void {
    this.todoService.toggleCompleted(id);
    this.ngOnInit();
  }

  removeTodo(id: string): void {
    this.todoService.removeTodo(id);
    this.ngOnInit();
  }

  clearCompleted(): void {
    this.todoService.clearCompleted();
    this.ngOnInit();
  }

  showAll(): void{
    this.mode.all = true;
    this.mode.uncompleted = false;
    this.mode.completed = false;
    this.ngOnInit();
  }

  showUncompleted(): void {
    this.mode.uncompleted = true;
    this.mode.all = false;
    this.mode.completed = false;
    this.ngOnInit();
  }

  showCompleted(): void {
    this.mode.completed = true;
    this.mode.uncompleted = false;
    this.mode.all = false;
    this.ngOnInit();
  }

}
