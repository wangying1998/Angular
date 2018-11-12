import { Component } from '@angular/core';

/**
 * Generated class for the AppComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app',
  templateUrl: 'app.html'
})
export class AppComponent {

  text: string;

  constructor() {
    console.log('Hello AppComponent Component');
    this.text = 'Hello World';
  }

}
