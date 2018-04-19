import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user';

@Injectable()
export class UserService {
    baseURL = 'https://jsonplaceholder.typicode.com/users';
    constructor (private http:HttpClient) {
    }

    getAllUsers(): Observable<User[]> {
        //return this.http.get(this.baseURL).map(this.extractData).catch(this.handleError); // http old is now deprecated
        return this.http.get(this.baseURL).catch(this.handleError); // HttpClient is replacing http 
    }

    // Used this when we are using http in constructor
    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body;
    // }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
