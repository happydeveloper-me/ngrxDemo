import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSumbit(password: string) {
    if (environment.password === password) {
      this.router.navigate(['/keyvalue', { password: password }]);
    }
  }
}
