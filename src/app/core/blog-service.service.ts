import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogModel } from './models/blog-model';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  token = '47ca5176167deab293c18b1b107aa8e20519f3a58c69045dc2a4e7ce9ad47fc1';
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });
  API_KEY = 'https://api.blog.redberryinternship.ge/api';
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogModel> {
    return this.http.get<BlogModel>(`${this.API_KEY}/blogs`, {
      headers: this.headers,
    });
  }
}
