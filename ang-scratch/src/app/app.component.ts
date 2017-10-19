import { Component } from '@angular/core';

@Component({
	// selector name is the same as the one in index.html
  selector: 'app-main',
  template: '<h1>Hello, {{name}}</h1>'
})
export class AppComponent {
  name = 'Angular';
}