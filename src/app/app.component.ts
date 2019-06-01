import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Driver Portal';

  toggle_status: boolean = false;

  toggleBtn() {
    this.toggle_status = !this.toggle_status;
  }


}
