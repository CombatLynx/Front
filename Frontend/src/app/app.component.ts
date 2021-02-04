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

  onLogin() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        console.log(response);
        alert('Пользователь ' + this.input.username + ' успешно авторизован');
      },
      error => {
        alert('Неправильный логин или пароль ');
      }
    );
  }
}
