import { Component } from '@angular/core';

@Component({
  selector: 'simple-message',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'webcomponent-with-angular-elements';

  SelectChange(sel: string) {
    console.log(sel);
  }
}
