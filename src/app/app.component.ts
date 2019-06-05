import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Driver Portal';

  toggle_status: boolean = false;

  constructor(db: AngularFireDatabase) {
    //db.list('/courses/').
  }

  toggleBtn() {
    this.toggle_status = !this.toggle_status;
  }


}
