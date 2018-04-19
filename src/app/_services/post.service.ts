import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from './post';

@Injectable()
export class PostService {
  
  baseURL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get(this.baseURL).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
