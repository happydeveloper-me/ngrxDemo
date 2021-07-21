import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-keyvalue',
  templateUrl: './keyvalue.component.html',
  styleUrls: ['./keyvalue.component.css'],
})
export class KeyvalueComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.http
      .get(environment.databaseUrl + 'emails.json')
      .pipe(
        map((resData: any) => {
          let emailsArray = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              emailsArray.push({ ...resData[key], id: key });
            }
          }
          return emailsArray;
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  onSubmit(key: any, value: any) {
    const data = {
      key: key.value,
      value: value.value,
    };

    key.value = '';
    value.value = '';

    this.http
      .post(environment.databaseUrl + 'emails.json', data)
      .subscribe((res) => {
        console.log(res);
      });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
