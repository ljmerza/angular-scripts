import { Component } from '@angular/core';
import { trigger, query, state, transition, style, animate, keyframes, animation, useAnimation } from '@angular/animations';

import { fade, slide, fade2 } from '../animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [fade, slide, fade2,
    trigger('todosAnimation', [
      transition(':enter',[
        // can get specific elements to animate groups of elements
        query('h1', [
          style({ transform: 'translateY(-20px)'}),
          animate(1000)
        ])
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) {
    console.log($event);
  }

  animationDone($event) {
    console.log($event);
  }
}
