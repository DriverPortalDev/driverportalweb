import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Driver Portal';

  toggle_status: boolean = false;

  constructor(private popservice: LoginService) {

  }

  toggleBtn() {
    this.toggle_status = !this.toggle_status;
  }

  afterEnter(value) {
    console.log(value);
  }

}
