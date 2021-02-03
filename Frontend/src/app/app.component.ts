import {Component, OnInit} from '@angular/core';
import {SharedService} from './shared.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SharedService]
})
export class AppComponent implements OnInit {
  input;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.input = {
      username: '',
      password: ''
    };
  }
  onRegister() {
    this.userService.registerUser(this.input).subscribe(
      response => {
        alert('User' + this.input.username + 'created');
      },
      error => {
        console.log('error', error);
      }
    );
  }
  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        alert('User' + this.input.username + 'logged');
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
