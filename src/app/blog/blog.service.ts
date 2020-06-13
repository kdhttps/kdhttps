import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Blog} from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {
  }

  getBlogs(): Observable<HttpResponse<Blog[]>> {
    return this.http.get<Blog[]>(environment.blogUrl, { observe: 'response' });
  }
}
