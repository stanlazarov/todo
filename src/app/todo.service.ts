import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  addTodo(todo: Object): void {
    let data = [];
    if(localStorage['todos']){
      data = JSON.parse(localStorage['todos']);
    }
    data.push(todo);
    localStorage.setItem('todos', JSON.stringify(data));
  }

  removeTodo(id: string): void{
    if(localStorage['todos']){
      let data = JSON.parse(localStorage['todos']);
      data = data.filter(x => x.id !== id);
      localStorage.setItem('todos', JSON.stringify(data));
    }
  }

  toggleCompleted(id: string): void{
    if(localStorage['todos']){
      let data = JSON.parse(localStorage['todos']);
      for(let i = 0; i < data.length; i += 1){
        if (data[i].id === id){
          data[i].completed = !data[i].completed;
        }
      }
      localStorage.setItem('todos', JSON.stringify(data));
    }
  }

  getAll() : Object[] {
    let data = [];

    if(localStorage['todos']) {
      data = JSON.parse(localStorage['todos']);
    }

    return data;
  }

  getCompleted() : Object[] {
    let data = [];

    if(localStorage['todos']) {
      data = JSON.parse(localStorage['todos']);
    }

    return data.filter(x => x.completed === true);
  }

  getUncompleted() : Object[] {
    let data = [];

    if(localStorage['todos']) {
      data = JSON.parse(localStorage['todos']);
    }

    return data.filter(x => x.completed === false);
  }

  clearCompleted(): void {
    if(localStorage['todos']){
      let data = JSON.parse(localStorage['todos']);
      data = data.filter(x => x.completed === false);
      localStorage.setItem('todos', JSON.stringify(data));
    }
  }
}
