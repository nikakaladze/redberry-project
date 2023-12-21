import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  token = '47ca5176167deab293c18b1b107aa8e20519f3a58c69045dc2a4e7ce9ad47fc1';
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });
  API_KEY = 'https://api.blog.redberryinternship.ge/api';

  isAuthentcated: boolean = false;

  login(email: string): Observable<void> {
    return this.http.post<void>(`${this.API_KEY}/login`, email, {
      headers: this.headers,
    });
  }
}
